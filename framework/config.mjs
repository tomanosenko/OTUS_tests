import '../dotenv/config.mjs'

export const config = {
  baseUrl: process.env.TEST_BASE_URL,
  baseLogin: process.env.TEST_BASE_LOGIN, 
  basePassword: process.env.TEST_BASE_PASSWORD,
};

