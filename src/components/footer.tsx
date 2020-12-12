import { FC } from 'react'
import { WiseLink } from '@components/wise-link'
import { FOOTER_NAV, FOOTER_COPYRIGHT } from '@constants'

export const Footer: FC = () => {
  return (
    <footer className="py-6">
      <nav>
        <ul className="list-none">
          {FOOTER_NAV.map(({ label, href }) => (
            <li className="inline-block space-x-4" key={href}>
              <WiseLink
                className="color-gray-900 no-underline hover:underline"
                href={href}
              >
                {label}
              </WiseLink>
            </li>
          ))}
        </ul>
      </nav>
      <small className="block mt-4 text-xs">{FOOTER_COPYRIGHT}</small>
    </footer>
  )
}
