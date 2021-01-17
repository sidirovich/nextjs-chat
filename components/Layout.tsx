import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
    </Head>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 mt-3">
        <header className="mt-3 mb-3">
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{' '}
            |{' '}
            <Link href="/chat">
              <a>Chat</a>
            </Link>{' '}
            |{' '}
            <Link href="/settings">
              <a>Settings</a>
            </Link>{' '}
          </nav>
        </header>
        {children}
        <footer className="mt-5">
          <hr />
          <span>develop by <a href="https://github.com/sidirovich" target="_blank">sidirovich</a></span>
        </footer>
      </div>
      </div>
    </div>
  </div>
)

export default Layout
