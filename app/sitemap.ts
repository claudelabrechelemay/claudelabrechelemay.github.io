import type {MetadataRoute} from 'next'
import {resolve} from 'path'
import {readdir, stat} from 'fs/promises'

const appDir = 'app'
const basePath = 'https://www.claudelabrechelemay.com'

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {
  const pages = (
    await Promise.all(
      (await readdir(resolve(appDir))).map(async (slug) => {
        return (await stat(resolve(appDir, slug))).isDirectory()
          ? {
            url: `${basePath}/${slug}`,
            lastModified: new Date()
          }
          : null
      }),
    )
  ).filter(Boolean) as MetadataRoute.Sitemap
  return pages
}

export const dynamic = 'force-static'
