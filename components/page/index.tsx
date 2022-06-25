import { Container, ThemeProvider, createTheme, Paper } from "@mui/material"
import Head from "next/head"
import { ReactNode, FC } from "react"

import Nav from "../nav"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

type PageProps = {
  children: ReactNode
}

/**TODO: add SEO */

const Page: FC<PageProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>To Huynh</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Paper sx={{ minHeight: "100vh", width: "100%" }} square={true}>
          <Nav />
          <Container maxWidth="sm">
            <main>{children}</main>
          </Container>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default Page
