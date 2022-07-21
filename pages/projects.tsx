import { Typography, Stack } from "@mui/material"
import type { NextPage } from "next"

import Page from "../components/page"
import { darkTheme } from "../styles/theme"
import ProjectCard from "../components/project-card"

const projects = [
  {
    name: "Council Data Project",
    desc: "A set of open-source tools to improve the accessibility of local government data.",
    url: "https://councildataproject.org",
    tech: ["Python", "Firebase", "TypeScript", "Vite", "React", "Semantic UI React", "Emotion", "Storybook"],
    gitHub: {
      name: "cookiecutter-cdp-deployment codebase",
      url: "https://github.com/CouncilDataProject/cookiecutter-cdp-deployment",
    },
    documentation: {
      name: "Council Data Project: Software for Municipal Data Collection, Analysis, and Publication",
      url: "https://doi.org/10.21105/joss.03904",
    },
  },
  {
    name: "SIGLA Database",
    label: (
      <>
        <abbr>SIGLA</abbr> Database
      </>
    ),
    desc: "An online multilingual database that freely provides information on legal and political institutions in Latin America.",
    url: "https://www.sigladata.org",
    tech: [
      "Python",
      "Prefect",
      "MongoDB",
      "GitHub Actions",
      "TypeScript",
      "Express",
      "React",
      "Redux Toolkit",
      "Ant Design",
    ],
    gitHub: {
      name: "AnnoREP-Frontend codebase",
      url: "https://github.com/SIGLA-GU/siglatools",
    },
    documentation: {
      name: "siglatools documentation",
      url: "https://sigla-gu.github.io/siglatools",
    },
  },
  {
    name: "AnnoREP",
    label: (
      <>
        Anno<abbr>REP</abbr>
      </>
    ),
    desc: (
      <>
        An open-source, web-based tool that helps facilitate Annotation for Transparent Inquiry (
        <abbr>ATI</abbr>) and other annotation-based workflows.
      </>
    ),
    url: "https://anno-rep.org",
    tech: [
      "TypeScript",
      "Next.js",
      "NextAuth.js",
      "React",
      "Carbon Design System",
      "Storybook",
      "Jest",
    ],
    gitHub: {
      name: "siglatools codebase",
      url: "https://github.com/QualitativeDataRepository/AnnoREP-Frontend",
    },
    documentation: {
      name: "AnnoREP-Frontend documentation",
      url: "https://qualitativedatarepository.github.io/AnnoREP-Frontend",
    },
  },
]

const Projects: NextPage = () => {
  return (
    <Page style={{ paddingTop: "5vh" }}>
      <Typography variant="h4" component="h1" sx={{ padding: darkTheme.spacing(2) }} gutterBottom>
        Projects
      </Typography>
      <Stack spacing={{ xs: 2, sm: 3, md: 4 }}>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Stack>
    </Page>
  )
}

export default Projects
