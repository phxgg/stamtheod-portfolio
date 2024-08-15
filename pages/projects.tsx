import Head from 'next/head';
import { Wrench } from 'lucide-react';

import { projects } from '@/config/projects';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Layout } from '@/components/layout';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ProjectsPage() {
  return (
    <Layout>
      <Head>
        <title>{`Projects / ${siteConfig.name}`}</title>
      </Head>
      <section className="animate__animated animate__fadeIn container grid items-center gap-6 overflow-hidden pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Projects
            <span className="text-pink-700 dark:text-pink-500">.</span>
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400">
            This is a list of projects that I have worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project) => (
            <div
              key={project.title}
              className={cn(
                'flex flex-col items-start gap-4 rounded-lg border border-slate-200 p-4 dark:border-slate-700',
                'hover:scale-105 hover:border-slate-300 hover:shadow-lg dark:hover:border-slate-600',
                'transition-all duration-200 ease-in-out'
              )}
            >
              <h2 className="flex items-center text-xl font-bold text-slate-800 dark:text-slate-200">
                <Tooltip>
                  <TooltipTrigger>
                    <span
                      className={project.language.iconClass}
                      style={{ color: project.language.color }}
                    ></span>
                    &nbsp;
                  </TooltipTrigger>
                  <TooltipContent>{project.language.title}</TooltipContent>
                </Tooltip>
                <a
                  href={project.links.github}
                  className="group font-mono transition duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.title}
                  <span className="block h-0.5 max-w-0 bg-pink-700 transition-all duration-500 group-hover:max-w-full dark:bg-pink-500"></span>
                </a>
              </h2>
              <p className="min-h-[70px] text-slate-700 dark:text-slate-400">
                {project.description}
              </p>
              <Separator />
              <div className="flex flex-row gap-2 text-sm">
                {project.underDevelopment === true && (
                  <>
                    <Tooltip>
                      <TooltipTrigger>
                        <button
                          className={buttonVariants({
                            variant: 'outline',
                            size: 'sm',
                          })}
                        >
                          <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                            <Wrench className="size-4" />
                          </span>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>Under development</TooltipContent>
                    </Tooltip>
                    <Separator orientation="vertical" />
                  </>
                )}

                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants({
                        variant: 'outline',
                        size: 'sm',
                      })}
                    >
                      <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                        {/* <GithubIcon size={16} /> */}
                        <Icons.gitHub className="size-4" />
                      </span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>View on GitHub</TooltipContent>
                </Tooltip>
                {project.links?.demo && (
                  <>
                    <Separator orientation="vertical" />
                    <Tooltip>
                      <TooltipTrigger>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className={buttonVariants({
                            variant: 'outline',
                            size: 'sm',
                          })}
                        >
                          <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                            <Icons.eye className="size-4" />
                          </span>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>View demo</TooltipContent>
                    </Tooltip>
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
