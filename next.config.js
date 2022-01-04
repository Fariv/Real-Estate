module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
  },
  env: {
    BAYOUT_API_HOST: process.env.BAYOUT_API_HOST,
    BAYOUT_API_KEY: process.env.BAYOUT_API_KEY,
  }
}
