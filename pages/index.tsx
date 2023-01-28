import Head from "next/head"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>{`Home / ${siteConfig.name}`}</title>
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex w-full max-w-[980px] flex-row justify-between gap-2">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-lg text-pink-700 dark:text-pink-300 sm:text-xl">
              Hi, my name is
            </span>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
              {siteConfig.fullName}.
            </h1>
            <h1 className="text-xl font-bold text-slate-600 dark:text-slate-400 sm:text-xl md:text-3xl lg:text-4xl">
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
              className="rounded-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
