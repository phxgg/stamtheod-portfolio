import { useState } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import toast from 'react-hot-toast';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Layout } from '@/components/layout';
import { TwitterHoverCard } from '@/components/twitter-hover-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const { theme } = useTheme();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // const form = e.target as HTMLFormElement;
    // const formData = new FormData(form);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      if (theme === 'dark') {
        toast('Message sent successfully!', {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      } else {
        toast('Message sent successfully!', {
          icon: '👏',
        });
      }

      setName('');
      setEmail('');
      setMessage('');
    } else {
      const data = await res.json();

      if (theme === 'dark') {
        toast.error(data.error, {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      } else {
        toast.error(data.error);
      }
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <Head>
        <title>{`Contact / ${siteConfig.name}`}</title>
      </Head>
      <section className="container grid items-center gap-6 overflow-hidden pb-8 pt-6 md:py-10">
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
              <div className="animate__animated animate__jackInTheBox flex flex-col gap-4 rounded-lg p-10 shadow dark:bg-gray-900">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300">
                    Email
                  </h2>
                  <div className="flex items-center rounded px-4 py-2 text-lg text-slate-800 shadow-md dark:text-slate-300">
                    <Icons.mail className="size-5 text-pink-700 dark:text-pink-500" />
                    <Separator orientation="vertical" className="mx-2" />
                    <Button
                      variant="ghost"
                      onClick={() =>
                        (window.location.href = `mailto:${siteConfig.info.email}`)
                      }
                    >
                      {siteConfig.info.email}
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300">
                    Social
                  </h2>
                  <div className="flex items-center rounded px-4 py-2 text-lg text-slate-700 shadow-md dark:text-slate-400">
                    <Icons.twitter className="size-6 text-sky-500 dark:text-sky-400" />
                    <Separator orientation="vertical" className="mx-2" />
                    <TwitterHoverCard />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Separator orientation="vertical" />
          </div>

          <div className="animate__animated animate__backInRight flex flex-col gap-4">
            <div className="flex flex-col gap-4 rounded-lg p-10 shadow-lg dark:bg-gray-900">
              <h2 className="flex items-center text-xl font-bold">
                <span
                  aria-label="Waving hand"
                  className="animate-wave text-2xl sm:text-3xl"
                >
                  👋
                </span>{' '}
                Say hello
                <span className="text-pink-700 dark:text-pink-500">!</span>
              </h2>
              <form
                className={cn(
                  'space-y-4',
                  isSubmitting && 'pointer-events-none opacity-50'
                )}
                onSubmit={handleContactSubmit}
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-slate-700 dark:text-slate-400"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    className="text-base"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-slate-700 dark:text-slate-400"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    className="text-base"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-xs text-slate-500">
                    Your email will not be shared with anybody.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-slate-700 dark:text-slate-400"
                  >
                    Message
                  </label>
                  <Textarea
                    className="h-28 text-base"
                    placeholder="Hello!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" type="submit">
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
