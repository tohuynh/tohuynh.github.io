import {
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
  CardActionArea,
  Stack,
  Link,
} from "@mui/material"
import { GitHub, Article } from "@mui/icons-material"
import type { NextPage } from "next"

import Page from "../components/page"

const Projects: NextPage = () => {
  return (
    <Page style={{ paddingTop: "5vh" }}>
      <Typography variant="h4" component="h1" sx={{ padding: "1rem" }}>
        Projects
      </Typography>
      <Stack spacing={{ xs: 2, sm: 3, md: 8 }}>
        <Card raised>
          <CardActionArea
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://councildataproject.org"
          >
            <CardContent>
              <Typography variant="h6" component="h2">
                Council Data Project
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A set of open-source tools to improve the accessibility of local government data.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <IconButton
              arial-label="GitHub"
              component="a"
              href="https://github.com/CouncilDataProject/cookiecutter-cdp-deployment"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHub />
            </IconButton>
            <IconButton
              arial-label="JOSS paper"
              component="a"
              href="https://doi.org/10.21105/joss.03904"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Article />
            </IconButton>
          </CardActions>
        </Card>
        <Card raised>
          <CardActionArea
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.sigladata.org"
          >
            <CardContent>
              <Typography variant="h6" component="h2">
                <abbr>SIGLA</abbr> Database
              </Typography>
              <Typography variant="body2" color="text.secondary">
                An online multilingual database that freely provides information on legal and
                political institutions in Latin America.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <IconButton
              arial-label="Backend GitHub"
              component="a"
              href="https://github.com/SIGLA-GU/siglatools"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHub />
            </IconButton>
            <IconButton
              arial-label="Backend documentation"
              component="a"
              href="https://sigla-gu.github.io/siglatools/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Article />
            </IconButton>
          </CardActions>
        </Card>
        <Card raised>
          <CardActionArea
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://anno-rep.org"
          >
            <CardContent>
              <Typography variant="h6" component="h2">
                Anno<abbr>REP</abbr>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                An open-source, web-based tool that helps facilitate{" "}
                <Link target="_blank" rel="noreferrer noopener" href="https://qdr.syr.edu/ati">
                  Annotation for Transprent Inquiry
                </Link>{" "}
                and other annotation-based workflows.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <IconButton
              arial-label="GitHub"
              component="a"
              href="https://github.com/QualitativeDataRepository/AnnoREP-Frontend"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHub />
            </IconButton>
            <IconButton
              arial-label="Storybook documentation"
              component="a"
              href="https://qualitativedatarepository.github.io/AnnoREP-Frontend"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Article />
            </IconButton>
          </CardActions>
        </Card>
      </Stack>
    </Page>
  )
}

export default Projects
