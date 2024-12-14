import type {MetadataRoute} from 'next'

const disallowedUAs = [
  'OpenAI-GPT',
  'CCBot',
  'NeevaBot',
  'BaiduSpider-Image',
  'CommonCrawl',
  'DataminrBot',
  'Archive.org_bot',
  'SemrushBot',
  'AhrefsBot',
  'BUbiNG',
  'DotBot',
  'NerdyBot'
]

const disallowedPatterns = [
  '/*.json$',
  '/*_buildManifest.js$',
  '/*_middlewareManifest.js$',
  '/*_ssgManifest.js$',
  '/*.js$',
  '/_next/static/media/*',
  '/_next/static/chunks/media/*',
  '/_next/static/chunks/images/_next/static/media/*'
]

export default async function robots (): Promise<MetadataRoute.Robots> {
  return {
    rules: disallowedUAs.map((userAgent) => ({
      userAgent,
      disallow: '/'
    })).concat(disallowedPatterns.map((pattern) => ({
      userAgent: '*',
      disallow: pattern
    }))),
    sitemap: 'https://www.claudelabrechelemay.com/sitemap.xml'
  }
}

export const dynamic = 'force-static'
