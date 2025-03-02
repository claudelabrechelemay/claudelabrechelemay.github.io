import configMDX from '@next/mdx'
import withExportImages from 'next-export-optimize-images';

const withConfiguredMDX = configMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // experimental: {
  //   reactCompiler: true,
  // },
};

export default withExportImages(withConfiguredMDX(nextConfig));
