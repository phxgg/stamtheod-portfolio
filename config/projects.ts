import { Language } from "@/types/language"
import { languages } from "@/config/languages"

interface Project {
  title: string
  language: Language
  description: string
  underDevelopment?: boolean
  links: {
    github: string
    demo?: string
  }
}

export const projects: Project[] = [
  {
    title: "jSurebets",
    language: languages['java'],
    description: "A Java application that allows you to find surebets in famous Greek bookmakers. Under development.",
    underDevelopment: true,
    links: {
      github: "https://github.com/phxgg/jSurebets",
    },
  },
  {
    title: "discord-music-bot",
    language: languages['javascript'],
    description: "Discord music bot made using discord.js and discord-player.",
    links: {
      github: "https://github.com/phxgg/discord-music-bot",
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
    },
  },
  {
    title: "whistleblower",
    language: languages['javascript'],
    description: "Discord bot that keeps track of deleted and edited messages on my server.",
    links: {
      github: "https://github.com/phxgg/whistleblower",
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
    title: "lol-ally-viewer",
    language: languages['python'],
    description: "Simple script to view your League of Legends lobby now that Riot has disabled the feature for Ranked Queues on the client.",
    links: {
      github: "https://github.com/phxgg/lol-ally-viewer",
    },
  },
  {
    title: 'lolpy',
    language: languages['python'],
    description: "Python wrapper for the League of Legends Client API.",
    links: {
      github: "https://github.com/phxgg/lolpy",
    },
  },
  {
    title: "LobbySpy",
    language: languages['csharp'],
    description: "lol-ally-viewer but with a GUI and an OP.GG viewer.",
    links: {
      github: "https://github.com/phxgg/LobbySpy",
    },
  },
  {
    title: "instabot",
    language: languages['python'],
    description:
      "Auto commenting bot for Instagram. Works great on multi-participation allowed giveaways. I won a 3 day vacation to Mykonos with this, lol.",
    links: {
      github: "https://github.com/phxgg/instabot",
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
]
