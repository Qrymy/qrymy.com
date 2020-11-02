export const DIRECTORY_NAME = '_articles' as const

export const HEADER_NAV = [
  { label: 'Qrymy.com', href: '/' },
  { label: '詳細', href: '/about' },
] as const

export const FOOTER_NAV = [
  { label: 'GitHub', href: 'https://github.com/Qrymy' },
  { label: 'Twitter', href: 'https://twitter.com' },
] as const

export const FOOTER_COPYRIGHT = '(c) Qrymy' as const

export const META = {
  title: 'Qrymy.com',
  description: `個人的な趣味や日常的のあれこれをログとして書き残すための場所です。`,
  url: 'https://qrymy.com',
  twitter: '@Qrymy',
  ogImage: 'https://qrymy.com/ogp.png',
  author: 'Qrymy',
} as const
