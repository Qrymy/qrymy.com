import { FC } from 'react'
import { Header } from '@components/header'
import { Footer } from '@components/footer'

export const Layout: FC = ({ children }) => (
  <div className="w-full h-full bg-gray-50">
    <div className="max-w-screen-md mx-auto py-10 px-4">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  </div>
)
