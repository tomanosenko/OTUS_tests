import '../dotenv/config.mjs'

export const config = {
  baseUrl: process.env.TEST_BASE_URL,
  basePassword: process.env.TEST_BASE_PASSWORD,
  basetoken: process.env.TEST_BASE_TOKEN,
  baseid: process.env.TEST_BASE_ID,
  isbn: [
    '9781449325862',
    '9781449331818',
    '9781449365035',
    '9781491904244',
    '9781491950296',
    '9781593275846',
    '9781593277574',
  ],
  UserName: process.env.TEST_BASE_LOGIN,
}
