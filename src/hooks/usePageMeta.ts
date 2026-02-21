import { useEffect } from 'react'

type PageMetaOptions = {
  title: string
  description: string
  image?: string
  imageAlt?: string
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let metaTag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute(attribute, key)
    document.head.appendChild(metaTag)
  }

  metaTag.setAttribute('content', content)
}

export function usePageMeta({
  title,
  description,
  image = '/images/welcome-rice.webp',
  imageAlt = 'S.R Export House — premium agro products',
}: PageMetaOptions) {
  useEffect(() => {
    const pageUrl = window.location.href
    const imageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`

    document.title = title
    upsertMeta('name', 'description', description)

    // Open Graph
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', pageUrl)
    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('property', 'og:image:alt', imageAlt)

    // Twitter / X
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)
    upsertMeta('name', 'twitter:image:alt', imageAlt)

    // Canonical
    let canonicalTag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.setAttribute('href', pageUrl)
  }, [description, image, imageAlt, title])
}
