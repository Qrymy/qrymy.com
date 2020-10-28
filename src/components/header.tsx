import { FC } from 'react'
import { HEADER } from '@constants'

export const Header: FC = () => (
  <header>
    <nav>
      <ul>
        {HEADER.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
