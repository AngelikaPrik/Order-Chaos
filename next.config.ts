import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    GITHUB_ID: process.env.AUTH_GUTHUB_ID,
    GITHUB_SECRET: process.env.AUTH_GUTHUB_SECRET,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

export default nextConfig
