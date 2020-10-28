import remark from 'remark'
import html from 'remark-html'

export const markdownToHtml = async (md: string) => {
  const content = await remark().use(html).process(md)
  return content.toString()
}
