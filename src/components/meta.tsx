import { FC, Fragment, useMemo } from 'react'
import { NextSeo, BlogJsonLd } from 'next-seo'
import { getIsoString } from '@helpers/dayjs-helpers'
import { Article } from '@models/article'
import { META } from '@constants'

type Props = {
  readonly article?: Article
}

export const Meta: FC<Props> = ({ article }) => {
  const title = article ? `${article.title} - ${META.title}` : META.title
  const description = article?.description || META.description
  const url = article ? `${META.url}/${article.slug}` : META.url

  const iso = useMemo(() => {
    if (article) {
      return getIsoString(article.date)
    }
  }, [article])

  return (
    <Fragment>
      <NextSeo
        canonical={url}
        description={description}
        openGraph={{ title, description, url, images: [{ url: META.ogImage }] }}
        title={title}
        twitter={{
          cardType: 'summary',
          site: META.twitter,
          handle: META.twitter,
        }}
      />
      {article && (
        <BlogJsonLd
          authorName={META.author}
          dateModified={iso}
          datePublished={iso}
          description={description}
          images={[]}
          title={title}
          url={url}
        />
      )}
    </Fragment>
  )
}
