import Head from "next/head"
import { ReactNode, FC } from "react"

import Nav from "../Nav"

type PageProps = {
  children: ReactNode
}

/**TODO: add SEO */

const Page: FC<PageProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>To Huynh</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Nav />
      <main>{children}</main>
    </div>
  )
}

export default Page
