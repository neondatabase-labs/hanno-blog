import config from '@/lib/config'
import { Body, Container, Head, Html, Preview, Section, Tailwind, Text } from '@react-email/components'

export default function ({ email }: { email: string }) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>New email from {config.title}</Preview>
        <Body className="bg-zinc-50 font-sans">
          <Container className="mx-auto py-12">
            <Section className="mt-8 rounded-md bg-zinc-200 p-px">
              <Section className="rounded-[5px] bg-white p-8">
                <Text className="mt-0 mb-4 font-semibold text-2xl text-zinc-950">You ({email}) have subscribed.</Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}
