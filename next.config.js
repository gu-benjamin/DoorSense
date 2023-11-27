/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LOCAL_ENDPOINT: 'http://localhost/doorsense_backend/api/',
    API_ENDPOINT: 'https://doorsense-api.azurewebsites.net/api/',
    DEV_API_ENDPOINT: 'http://40.87.17.78/',
  }
};

module.exports = nextConfig;
