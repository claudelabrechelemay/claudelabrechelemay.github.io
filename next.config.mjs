import configMDX from '@next/mdx'

const withConfiguredMDX = configMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}

export default withConfiguredMDX(nextConfig)
