'use server'

import ContactTemplate from '@/components/email-templates'
import config from '@/lib/config'
import { neon } from '@neondatabase/serverless'
import { ReactElement } from 'react'
import { Resend } from 'resend'

export async function createPost(_: any, formData: FormData) {
  try {
    if (!process.env.DATABASE_URL || !process.env.RESEND_API_KEY) throw new Error('Required environment variables not found.')
    const email = formData.get('email') as string
    if (!email) return [{ message: 'Email is required' }, { status: 400 }]
    const sql = neon(process.env.DATABASE_URL)
    const resend = new Resend(process.env.RESEND_API_KEY)
    await sql`CREATE TABLE IF NOT EXISTS subscribers(subscriber_id SERIAL PRIMARY KEY, email TEXT UNIQUE, subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`
    await sql`INSERT INTO subscribers (email) VALUES (${email}) ON CONFLICT (email) DO NOTHING;`
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `Welcome to our ${config.title} newsletter`,
      react: ContactTemplate({ email }) as ReactElement,
    })
    return [{ message: 'Successfully subscribed to newsletter!' }, { status: 200 }]
  } catch (error) {
    console.error('Subscription error:', error)
    return [{ message: 'Failed to subscribe :/' }, { status: 500 }]
  }
}
