import { Container, ThemeProvider, createTheme, Paper } from "@mui/material"
import Head from "next/head"
import { ReactNode, FC, CSSProperties } from "react"

import Nav from "../nav"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

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
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta charSet="UTF-8" />

        <meta property="og:title" content="To Huynh" />
        <meta property="og:description" content="Self-taught software developer." />
        <meta property="og:url" content="https://tohuynh.github.io" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="To Huynh" />
        <meta name="twitter:description" content="Self-taught software developer." />
        <meta name="twitter:url" content="https://tohuynh.github.io" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Paper sx={{ minHeight: "100vh", width: "100%" }} square={true}>
          <Nav />
          <main>
            <Container maxWidth="sm" sx={style}>
              {children}
            </Container>
          </main>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default Page
