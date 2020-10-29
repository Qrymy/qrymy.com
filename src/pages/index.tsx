import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
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
  articles: _,
}: InferGetStaticPropsType<typeof getStaticProps>) => <main />

export default IndexPage
