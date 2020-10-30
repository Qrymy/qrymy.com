import { FC, AnchorHTMLAttributes, useMemo } from 'react'
import Link from 'next/link'

type Props = AnchorHTMLAttributes<HTMLAnchorElement>

export const WiseLink: FC<Props> = ({ href, ...rest }) => {
  const isExternal = useMemo(() => {
    return href.startsWith('http')
  }, [href])

  if (isExternal) {
    return (
      <a
        href={href}
        rel="noopener noreferrer nofollow"
        target="_blank"
        {...rest}
      />
    )
  }

  return (
    <Link href={href} passHref>
      <a {...rest} />
    </Link>
  )
}
