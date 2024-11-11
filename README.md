# Hanno Blog

<p>
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#one-click-deploy"><strong>One-click Deploy</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>

## Introduction

A blog template (by [Neon](https://neon.tech)) that is fully customizable from a ([single file](./lib/config.ts)), integrated with GitHub Actions for automating blog search indexing (powered by Neon's pgrag), Resend to ensure high rate of email delivery, and Neon as the scalable serverless Postgres.

## Demo

Video

## One-click Deploy

You can deploy this template to Vercel/Netlify/Render with the buttons below:

<div>
    <a href="https://vercel.com/new/clone?repository-url=https://github.com/neondatabase-labs/hanno-blog&env=DATABASE_URL,RESEND_API_KEY" target="_blank">
        <img src="https://vercel.com/button" width="103" height="32" />
    </a>
    <a href="https://app.netlify.com/start/deploy?repository=https://github.com/neondatabase-labs/hanno-blog#DATABASE_URL&RESEND_API_KEY" target="_blank">
        <img src="https://www.netlify.com/img/deploy/button.svg" width="179" height="32" style="height: 30px; width: auto;" />
    </a>
    <a href="https://render.com/deploy?repo=https://github.com/neondatabase-labs/hanno-blog" target="_blank">
        <img src="https://render.com/images/deploy-to-render-button.svg" width="153" height="40" style="height: 30px; width: auto;" />
    </a>
</div>

## Tech Stack + Features

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience.

### Platforms

#### (Postgres) Database

- [Neon](https://neon.tech) – A serverless database platform that provides instant scalability and high performance for your applications, allowing you to focus on building without worrying about infrastructure.

#### Email

- [Resend](https://resend.com) – A platform for sending emails and managing email communications, providing a simple API for integrating email functionality into your applications.

#### Cron job

- [GitHub Actions](https://github.com/) - A web-based platform for hosting and managing Git repositories.

#### Deployment

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git.
- [Netlify](https://netlify.com/) – A platform that simplifies the deployment process and provides continuous integration for your projects.
- [Render](https://render.com/) – A cloud platform that offers instant deployment and automatic scaling for web applications.

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development.

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety.
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style.

## Author

- Rishi Raj Jain ([@rishi_raj_jain_](https://twitter.com/rishi_raj_jain_))

## Setup

### 1. Use Neon to get your Database url

To obtain your `DATABASE_URL` from Neon:

1. Sign up or log in to your account on Neon.
2. Create a new database or select an existing one.
3. Navigate to the database settings to find your connection string, which will be your `DATABASE_URL`.

### 2. Use Resend to get your Email key

To get API key from Resend:

1. Log in to your account on Resend.
2. Go to the API settings section.
3. If you need to regenerate your API key, click on the **Regenerate** button.
4. Copy the new API key and store it securely as `RESEND_API_KEY`.

### 3. Setting Up Environment Variables

To set up your environment variables in GitHub Secrets, follow these steps:

1. Go to your GitHub repository.
2. Click on **Settings** in the repository menu.
3. In the left sidebar, click on **Secrets and variables** and then **Actions**.
4. Click on the **New repository secret** button.
5. Add a new secret with the name `DATABASE_URL` and paste your database URL as the value.
