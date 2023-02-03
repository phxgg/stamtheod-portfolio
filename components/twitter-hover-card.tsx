import { CalendarDays } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { siteConfig } from "@/config/site"
import { Icons } from "./icons"
import { Separator } from "./ui/separator"

export function TwitterHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          {siteConfig.info.twitterHandle}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
          </a>
          <div className="space-y-1">
            <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <h4 className="text-sm font-semibold">
                {siteConfig.info.twitterHandle}
              </h4>
            </a>
            <p className="text-sm">
              Full Stack Developer, Software Engineer
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Joined May 2020
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
