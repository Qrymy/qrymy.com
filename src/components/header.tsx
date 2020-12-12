import { FC } from 'react'
import { WiseLink } from '@/components/wise-link'
import { HEADER_NAV } from '@/constants'

export const Header: FC = () => (
  <header className="h-14">
    <nav>
      <ul className="list-none leading-14 space-x-4">
        {HEADER_NAV.map(({ label, href }) => (
          <li className="inline-block" key={href}>
            <WiseLink
              className="no-underline hover:underline text-gray-900"
              href={href}
            >
              {label}
            </WiseLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
