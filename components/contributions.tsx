import { Contribution } from "@/types/contribution"
import { ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import { ScrollArea } from "./ui/scroll-area"

interface ContributionsProps {
  items?: Contribution[]
}

export function Contributions({ items }: ContributionsProps) {
  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <h2 className="text-2xl font-bold text-slate-800 transition-all duration-200 ease-in-out hover:-translate-y-1 dark:text-slate-200 sm:text-3xl">
        Contributions
        <span className="text-pink-700 dark:text-pink-500">.</span>
      </h2>
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4">
          {items.map((item, index) => (
            <div key={index} className="w-[150px] space-y-3">
              <div className="relative w-full pb-[100%]">
                <div className="absolute inset-0 overflow-hidden rounded-md shadow-md">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        className="absolute inset-0 h-full w-full object-cover text-transparent transition-all hover:scale-105"
                        width={100}
                        height={100}
                        alt="Test image"
                      />
                    ) : (
                      <div className="absolute inset-0 h-full w-full rounded-md bg-slate-200 dark:bg-slate-800">
                        <svg
                          className="absolute inset-0 h-full w-full object-cover text-slate-400 transition-all hover:scale-105 dark:text-slate-600"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M16 0 C7.163444 0 0 7.163444 0 16 C0 24.836556 7.163444 32 16 32 C24.836556 32 32 24.836556 32 16 C32 7.163444 24.836556 0 16 0 Z M16 30 C8.268013 30 2 23.731987 2 16 C2 8.268013 8.268013 2 16 2 C23.731987 2 30 8.268013 30 16 C30 23.731987 23.731987 30 16 30 Z" />
                          <path d="M 16 6 C 12.686292 6 10 8.686292 10 12 C 10 15.313708 12.686292 18 16 18 C 19.313708 18 22 15.313708 22 12 C 22 8.686292 19.313708 6 16 6 Z M 16 16 C 14.343145 16 13 14.656855 13 13 C 13 11.343145 14.343145 10 16 10 C 17.656855 10 19 11.343145 19 13 C 19 14.656855 17.656855 16 16 16 Z" />
                          <path d="M 16 20 C 14.343145 20 13 21.343145 13 23 C 13 24.656855 14.343145 26 16 26 C 17.656855 26 19 24.656855 19 23 C 19 21.343145 17.656855 20 16 20 Z" />
                        </svg>
                      </div>
                    )}
                  </a>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <h3 className="font-medium leading-none">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-800 transition-all duration-200 ease-in-out hover:text-opacity-80 dark:text-slate-200 dark:hover:text-opacity-80"
                  >
                    <span className="flex items-center">
                      {item.projectTitle}
                      <ExternalLinkIcon className="ml-1 inline-block h-4 w-4" />
                    </span>
                  </a>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
