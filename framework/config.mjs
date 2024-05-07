import '../dotenv/config.mjs'

export const config = {
  baseUrl: process.env.TEST_BASE_URL,
  basePassword: process.env.TEST_BASE_PASSWORD,
  basetoken: process.env.TEST_BASE_TOKEN,
}

