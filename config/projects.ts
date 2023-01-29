import { Language } from "@/types/language"
import { languages } from "@/config/languages"

interface Project {
  title: string
  language: Language
  description: string
  links: {
    github: string
    demo?: string
  }
}

export const projects: Project[] = [
  {
    title: "lol-ally-viewer",
    language: languages['python'],
    description:
      "Simple script to view your League of Legends lobby now that Riot has disabled the feature for Ranked Queues on the client.",
    links: {
      github: "https://github.com/phxgg/lol-ally-viewer",
    },
  },
  {
    title: "LobbySpy",
    language: languages['csharp'],
    description:
      "lol-ally-viewer but with a GUI and an OP.GG viewer.",
    links: {
      github: "https://github.com/phxgg/LobbySpy",
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
    description: "Converts audio to downloadable files from several platforms like YouTube, MixCloud or SoundCloud. Made in Python Flask.",
    links: {
      github: "https://github.com/phxgg/yt2mp3",
      demo: "https://yt2mp3-375819.ey.r.appspot.com/",
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
]
