import type { AppProps } from 'next/app';
import { Inter as FontSans } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

import { WavyBottom } from '@/components/ui/wavy-bottom';

import '@/styles/globals.css';
import 'animate.css';

import { TooltipProvider } from '@/components/ui/tooltip';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

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
        <TooltipProvider>
          <Component {...pageProps} />
          <WavyBottom />

          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}
