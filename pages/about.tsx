import Head from "next/head";
import Link from "next/link";

import { Layout } from "@/components/layout";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>{`About / ${siteConfig.name}`}</title>
      </Head>
      <section className="animate__animated animate__pulse container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            About me
            <span className="text-pink-700 dark:text-pink-400">.</span>
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
      </section>
    </Layout>
  )
}
