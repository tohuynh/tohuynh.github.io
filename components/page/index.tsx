import { Container, Paper } from "@mui/material"
import Head from "next/head"
import { ReactNode, FC, CSSProperties } from "react"

import Nav from "../nav"
type PageProps = {
  children: ReactNode
  style?: CSSProperties
}

const Page: FC<PageProps> = ({ children, style }) => {
  return (
    <>
      <Head>
        <title>To Huynh</title>
        <meta name="title" content="To Huynh" />
        <meta name="description" content="Self-taught software developer." />

        <meta property="og:title" content="To Huynh" />
        <meta property="og:description" content="Self-taught software developer." />
        <meta property="og:url" content="https://tohuynh.github.io" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="To Huynh" />
        <meta name="twitter:description" content="Self-taught software developer." />
        <meta name="twitter:url" content="https://tohuynh.github.io" />
        <meta name="twitter:card" content="summary" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Paper
        sx={{ minHeight: "100vh", width: "100%", paddingBottom: "50px" }}
        square={true}
        component="main"
      >
        <Container maxWidth="sm" sx={style}>
          {children}
        </Container>
      </Paper>
      <Nav />
    </>
  )
}

export default Page
