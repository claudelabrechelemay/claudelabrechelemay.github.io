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

export default function robots (): MetadataRoute.Robots {
  return {
    rules: disallowedUAs.map((userAgent) => ({
      userAgent,
      disallow: '/'
    })),
    sitemap: 'https://www.claudelabrechelemay.com/sitemap.xml'
  }
}

export const dynamic = 'force-static'
