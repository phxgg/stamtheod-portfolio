import Head from "next/head"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>{`Home / ${siteConfig.name}`}</title>
      </Head>
      <section className="animate__animated animate__jackInTheBox container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex w-full max-w-[980px] flex-row justify-between gap-2">
          <div className="flex flex-col gap-6">
            <span className={cn(
              "font-mono text-lg text-pink-700 dark:text-pink-400 sm:text-xl",
              "hover:-translate-y-1",
              "transition-all duration-200 ease-in-out"
            )}>
              Hi, my name is
            </span>
            <h1 className={cn(
              "text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl",
              "hover:-translate-y-1",
              "transition-all duration-200 ease-in-out"
            )}>
              {siteConfig.fullName}
              <span className="text-pink-700 dark:text-pink-400">.</span>
            </h1>
            <h1 className={cn(
              "text-xl font-bold text-slate-600 dark:text-slate-400 sm:text-xl md:text-3xl lg:text-4xl",
              "hover:-translate-y-1",
              "transition-all duration-200 ease-in-out"
            )}>
              I build things for the web.
            </h1>
            <p className="max-w-[700px] font-mono text-lg text-slate-800 dark:text-slate-200 sm:text-xl">
              I{"'"}m a software engineer based in Greece. I specialize in
              building (and occasionally designing) websites, applications, and everything in between.
            </p>
          </div>
          <div className="flex flex-col">
            <Image
              src={siteConfig.links.avatar}
              alt="Avatar"
              width={200}
              height={200}
              className={cn(
                "rounded-full",
                "hover:-translate-y-1",
                "transition-all duration-200 ease-in-out"
              )}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
