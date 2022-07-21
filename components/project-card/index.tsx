import React from "react"
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
  CardActionArea,
} from "@mui/material"
import { GitHub, Article, ArrowForward } from "@mui/icons-material"

import { darkTheme } from "../../styles/theme"

type Link = {
  name: React.ReactNode
  url: string
}

type Project = {
  name: string
  label?: React.ReactNode
  desc: React.ReactNode
  url: string
  gitHub: Link
  documentation: Link
}

const ProjectCard: React.FC<Project> = ({ name, label, desc, url, gitHub, documentation }) => {
  return (
    <Card raised>
      <CardActionArea
        component="a"
        target="_blank"
        rel="noreferrer noopener"
        href={url}
      >
        <CardContent>
          <Typography variant="h6" component="h2">
            {label || name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
          <ArrowForward sx={{ position: "absolute", top: darkTheme.spacing(2), right: darkTheme.spacing(2) }} />
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton
          arial-label={gitHub.name}
          component="a"
          href={gitHub.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHub />
        </IconButton>
        <IconButton
          arial-label={documentation.name}
          component="a"
          href={documentation.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Article />
        </IconButton>
      </CardActions>
    </Card>
  )

}

export default ProjectCard