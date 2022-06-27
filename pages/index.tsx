import { Card, CardContent, CardActions, Typography, IconButton, Link } from "@mui/material"
import { GitHub, Email } from "@mui/icons-material"
import type { NextPage } from "next"

import Page from "../components/page"

const Home: NextPage = () => {
  return (
    <Page style={{ paddingTop: "15vh" }}>
      <Card raised>
        <CardContent>
          <Typography variant="h4" component="h1">
            To Huynh
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Self-taught software developer with over 2 years of experience in full-stack web
            development.
          </Typography>
          <br />
          <Typography variant="body1" color="text.secondary">
            Currently a contributor at{" "}
            <Link target="_blank" rel="noreferrer noopener" href="https://councildataproject.org">
              Council Data Project
            </Link>
            .
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            arial-label="GitHub"
            component="a"
            href="https://github.com/tohuynh"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHub />
          </IconButton>
          <IconButton arial-label="Email" component="a" href="mailto:huynh.nto@gmail.com">
            <Email />
          </IconButton>
        </CardActions>
      </Card>
    </Page>
  )
}

export default Home
