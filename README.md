# Hanno Blog

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/neondatabase-labs/hanno-blog&env=DATABASE_URL,RESEND_API_KEY)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/neondatabase-labs/hanno-blog#DATABASE_URL&RESEND_API_KEY)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/neondatabase-labs/hanno-blog)

## Setup

### 1. Use Neon to get your Database url

To obtain your `DATABASE_URL` from [Neon](https://console.neon.tech):

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
