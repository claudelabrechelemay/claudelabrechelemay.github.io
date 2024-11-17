import projects from '@/nav/projects.json'
import collections from '@/nav/collections.json'
import pages from '@/nav/pages.json'

const groups: Group[] = [projects, collections, pages]

export default groups

export type Group = {
  label?: {
    en: string
    fr: string
  }
  items: {
    title: {
      en: string
      fr: string
    }
    slug: string
  }[]
}
