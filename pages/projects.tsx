import Head from "next/head";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

import { Layout } from "@/components/layout";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { siteConfig } from "@/config/site";
import { projects } from "@/config/projects";
import { buttonVariants } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <Layout>
      <Head>
        <title>{`Projects / ${siteConfig.name}`}</title>
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Projects
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            This is a list of projects I have worked on.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col items-start gap-4 rounded-lg border border-slate-200 p-4 dark:border-slate-700"
            >
              <h2 className="flex items-center text-xl font-bold text-slate-800 dark:text-slate-200">
                <Tooltip>
                  <TooltipTrigger>
                    <span className={project.language.iconClass} style={{ color: project.language.color }}></span>&nbsp;
                  </TooltipTrigger>
                  <TooltipContent>
                    {project.language.title}
                  </TooltipContent>
                </Tooltip>
                <span className="font-mono">
                  {project.title}
                </span>
              </h2>
              <p className="min-h-[100px] text-lg text-slate-700 dark:text-slate-400">
                {project.description}
              </p>
              <Separator />
              <div className="flex flex-row gap-2 text-sm">
                <a href={project.links.github} className={buttonVariants({ variant: "outline", size: "sm" })}>
                  <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                    <GithubIcon size={16} />
                    GitHub
                  </span>
                </a>
                {project.links?.demo && (
                  <>
                    <Separator orientation="vertical" />
                    <a href={project.links.demo} className={buttonVariants({ variant: "outline", size: "sm" })}>
                      <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                        <ExternalLinkIcon size={16} />
                        Demo
                      </span>
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
