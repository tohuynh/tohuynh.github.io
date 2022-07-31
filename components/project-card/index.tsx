import React from "react"
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
  CardActionArea,
  Stack,
  Chip,
} from "@mui/material"
import { GitHub, Article, ArrowForward } from "@mui/icons-material"

import { darkTheme } from "../../styles/theme"

type Link = {
  name: string
  url: string
}

type Project = {
  name: string
  label?: React.ReactNode
  desc: React.ReactNode
  url: string
  tech: string[]
  gitHub: Link
  documentation: Link
}

const ProjectCard: React.FC<Project> = ({
  name,
  label,
  desc,
  url,
  tech,
  gitHub,
  documentation,
}) => {
  return (
    <Card raised>
      <CardActionArea component="a" target="_blank" rel="noreferrer noopener" href={url}>
        <CardContent>
          <Typography variant="h6" component="h2">
            {label || name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>

          <ArrowForward
            sx={{ position: "absolute", top: darkTheme.spacing(2), right: darkTheme.spacing(2) }}
          />
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Stack
          component="ul"
          direction="row"
          spacing={0}
          sx={{
            flexWrap: "wrap",
            listStyle: "none",
            gap: darkTheme.spacing(0.5),
            padding: 0,
            margin: 0,
          }}
        >
          {tech.map((tech) => (
            <li key={tech}>
              <Chip size="small" label={tech} />
            </li>
          ))}
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label={gitHub.name}
          title={gitHub.name}
          component="a"
          href={gitHub.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHub />
        </IconButton>
        <IconButton
          aria-label={documentation.name}
          title={documentation.name}
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
