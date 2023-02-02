import { Layout } from "@/components/layout";
import { TwitterHoverCard } from "@/components/twitter-hover-card";
import { siteConfig } from "@/config/site";
import Head from "next/head";

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>{`Contact / ${siteConfig.name}`}</title>
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="animate__animated animate__jackInTheBox flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Contact
            <span className="text-pink-700 dark:text-pink-500">.</span>
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400">
            This is how you can reach to me.
          </p>
        </div>

        {/* Contact info */}
        <div className="animate__animated animate__jackInTheBox flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-700 dark:text-slate-400">
              Email
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-400">
              <a href={`mailto:${siteConfig.info.email}`} className="hover:underline">
                {siteConfig.info.email}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-700 dark:text-slate-400">
              Phone
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-400">
              <a href={`tel:${siteConfig.info.phone}`} className="hover:underline">
                {siteConfig.info.phone}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-slate-700 dark:text-slate-400">
              Social
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-400">
              <TwitterHoverCard />
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-400">
              <a
                href="
                https://www.linkedin.com/in/test"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
