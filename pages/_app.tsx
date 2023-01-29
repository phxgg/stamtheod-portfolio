import type { AppProps } from "next/app"
import Head from "next/head"
import { Inter as FontSans } from "@next/font/google"
import { ThemeProvider } from "next-themes"

import "@/styles/globals.css"
import "animate.css"

import { WavyBottom } from "@/components/ui/wavy-bottom"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Stamatis Theodosiadis' personal website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
        <WavyBottom />
      </ThemeProvider>
    </>
  )
}
