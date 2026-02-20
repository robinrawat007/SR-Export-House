import { useEffect } from 'react'

type PageMetaOptions = {
  title: string
  description: string
}

export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    document.title = title

    const descriptionMeta = document.querySelector('meta[name="description"]')
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', description)
    }
  }, [description, title])
}
