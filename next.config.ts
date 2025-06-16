import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    GITHUB_ID: process.env.AUTH_GITHUB_ID,
    GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

export default nextConfig
