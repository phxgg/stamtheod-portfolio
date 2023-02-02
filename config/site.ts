import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  fullName: string
  description: string
  mainNav: NavItem[]
  info: {
    email: string
    phone: string
    twitterHandle: string
  }
  links: {
    twitter: string
    github: string
    avatar: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Stamatis Theodosiadis", // stamtheod
  fullName: "Stamatis Theodosiadis",
  description: "Full Stack Developer, Software Engineer, Open Source Contributor",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact"
    },
  ],
  info: {
    email: "test@test.com",
    phone: "+30 698 123 4567",
    twitterHandle: "@stamtheod",
  },
  links: {
    twitter: "https://twitter.com/stamtheod",
    github: "https://github.com/phxgg",
    avatar: "https://avatars.githubusercontent.com/u/45177754?v=4",
    docs: "https://ui.shadcn.com",
  },
}
