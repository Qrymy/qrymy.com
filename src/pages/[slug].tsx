import {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next'
import { Layout } from '@components/layout'
import { Markdown } from '@components/markdown'
import { getAllArticles, getArticleBySlug } from '@helpers/file-helpers'
import { Article } from '@models/article'

type Props = {
  readonly article: Article
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles()
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
  <Layout>
    <Markdown article={article} />
  </Layout>
)

export default ArticlePage
