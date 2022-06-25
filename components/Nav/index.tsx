import { Tabs, Tab, AppBar } from "@mui/material"
import { useRouter } from "next/router"

type LinkTabProps = {
  label: string
  href: string
}

function LinkTab(props: LinkTabProps) {
  const router = useRouter()

  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        router.push(props.href)
      }}
      {...props}
    />
  )
}

const navs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
]

const Nav = () => {
  const router = useRouter()
  const pathnameIndex = navs.findIndex(({ href }) => href === router.pathname)

  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Tabs value={Math.max(pathnameIndex, 0)} aria-label="Navigation" centered>
        {navs.map(({ label, href }) => (
          <LinkTab key={label} label={label} href={href} />
        ))}
      </Tabs>
    </AppBar>
  )
}

export default Nav
