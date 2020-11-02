import { Fragment } from 'react'
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import { Layout } from '@components/layout'
import { Meta } from '@components/meta'
import { ArticleItem } from '@components/article-item'
import { getAllArticles } from '@helpers/file-helpers'
import { Article } from '@models/article'

type Props = {
  readonly articles: Article[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = getAllArticles()
  return { props: { articles } }
}

const IndexPage: NextPage<Props> = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Fragment>
    <Meta />
    <Layout>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.slug} />
      ))}
    </Layout>
  </Fragment>
)

export default IndexPage
