import { Fragment } from 'react'
import {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next'
import { Layout } from '@/components/layout'
import { Meta } from '@/components/meta'
import { ArticleWrapper } from '@/components/article-wrapper'
import { Markdown } from '@/components/markdown'
import { getAllArticles, getArticleBySlug } from '@/helpers/file-helpers'
import { Article } from '@/types/article'

type Props = {
  readonly article: Article
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles(true)
  const paths = articles.map(({ slug }) => `/${slug}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const article = getArticleBySlug(params.slug as string)

  return { props: { article } }
}

const ArticlePage: NextPage<Props> = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Fragment>
    <Meta article={article} />
    <Layout>
      <ArticleWrapper article={article}>
        <Markdown article={article} />
      </ArticleWrapper>
    </Layout>
  </Fragment>
)

export default ArticlePage
