
import Head from "next/head"
import { ReactNode, FC } from "react"

type PageProps = {
  children: ReactNode
}

/**TODO: add SEO, google analytics, nav */

const Page: FC<PageProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>To Huynh</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default Page