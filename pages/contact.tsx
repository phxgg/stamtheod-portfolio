import { Icons } from "@/components/icons";
import { Layout } from "@/components/layout";
import { TwitterHoverCard } from "@/components/twitter-hover-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import Head from "next/head";

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>{`Contact / ${siteConfig.name}`}</title>
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex flex-col justify-between sm:flex-row">
          <div className="flex flex-col gap-6">
            <div className="animate__animated animate__jackInTheBox flex max-w-[980px] flex-col items-start gap-4">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
                Contact
                <span className="text-pink-700 dark:text-pink-500">.</span>
              </h1>
              <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400">
                This is how you can reach to me.
              </p>
            </div>

            <div className="flex flex-row justify-between">
              <div className="animate__animated animate__jackInTheBox flex flex-col gap-4 rounded p-10 shadow">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300">
                    Email
                  </h2>
                  <div className="flex items-center rounded px-4 py-2 text-lg text-slate-800 shadow-md dark:text-slate-300">
                    <Icons.mail className="h-5 w-5 text-pink-700 dark:text-pink-500" />
                    <Separator orientation="vertical" className="mx-2" />
                    <Button variant="ghost" onClick={() => window.location.href = `mailto:${siteConfig.info.email}`}>
                      {siteConfig.info.email}
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300">
                    Social
                  </h2>
                  <div className="flex items-center rounded px-4 py-2 text-lg text-slate-700 shadow-md dark:text-slate-400">
                    <Icons.twitter className="h-6 w-6 text-sky-500 dark:text-sky-400" />
                    <Separator orientation="vertical" className="mx-2" />
                    <TwitterHoverCard />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__jackInTheBox flex flex-col gap-4">
            <div className="flex flex-col gap-4 rounded p-10 shadow-lg">
              <h2 className="text-xl font-bold text-slate-700 dark:text-slate-400">
                Say hello!
              </h2>
              <form className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-slate-700 dark:text-slate-400">Name</label>
                  <Input type="text" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-slate-700 dark:text-slate-400">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-slate-700 dark:text-slate-400">Message</label>
                  <Textarea placeholder="Hello!" />
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" type="submit">Send</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  )
}
