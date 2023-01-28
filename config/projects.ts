import { Language } from "@/types/language"
import { languages } from "@/config/languages"

interface Projects {
  title: string
  language: Language
  description: string
  links: {
    github: string
    demo?: string
  }
}

export const projects: Projects[] = [
  {
    title: "lol-ally-viewer",
    language: languages['python'],
    description:
      "Simple script to view your league lobby now that Riot has disabled the feature on the client.",
    links: {
      github: "https://github.com/phxgg/lol-ally-viewer",
    },
  },
  {
    title: "covid-19-global-map",
    language: languages['nodejs'],
    description: "Covid-19 spread map with data from several sources, made when it first started.",
    links: {
      github: "https://github.com/phxgg/covid-19-global-map",
    },
  },
  {
    title: "yt2mp3",
    language: languages['python'],
    description: "Covid-19 spread map for Argentina, made when it first started.",
    links: {
      github: "https://github.com/phxgg/yt2mp3",
    },
  },
  {
    title: "jyeet-bot",
    language: languages['java'],
    description: "Discord music bot made in Java with JDA.",
    links: {
      github: "https://github.com/phxgg/jyeet-bot",
    },
  },
  {
    title: "sniper",
    language: languages['javascript'],
    description: "An easy to run simple bot that lets you snipe messages in your Discord server.",
    links: {
      github: "https://github.com/phxgg/sniper",
    }
  }
];
