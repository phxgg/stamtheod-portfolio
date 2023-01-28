import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  fullName: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    avatar: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "stamtheod",
  fullName: "Stamatis Theodosiadis",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    }
  ],
  links: {
    twitter: "https://twitter.com/stamtheod",
    github: "https://github.com/phxgg",
    avatar: "https://avatars.githubusercontent.com/u/45177754?v=4",
    docs: "https://ui.shadcn.com",
  },
}
