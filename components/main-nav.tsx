import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavItem } from '@/types/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NavigationMenuDemo } from './main-nav-menu';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const router = useRouter();

  const getActivePage = () => {
    return router.pathname;
  };

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo
          className={cn(
            'size-6 rounded-full transition duration-300 ease-in-out will-change-[filter] hover:animate-wave',
            'hover:drop-shadow-[0_0_2em_#db2777] dark:hover:drop-shadow-[0_0_2em_#646cffaa]'
          )}
        />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        // <div className="hidden gap-6 md:flex">
        //   <NavigationMenuDemo items={items} />
        // </div>

        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-lg font-semibold sm:text-sm',
                    getActivePage() !== item.href
                      ? 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                      : 'text-slate-900 dark:text-slate-100',
                    item.disabled && 'cursor-not-allowed opacity-80',
                    'transition duration-300',
                    'group'
                  )}
                >
                  <span className="bg-gradient-to-r from-pink-600 to-purple-400 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                    {item.title}
                  </span>
                </Link>
              )
          )}
        </nav>
      ) : null}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="-ml-4 text-base hover:bg-transparent focus:ring-0 md:hidden"
          >
            <Icons.logo className="mr-2 size-5 rounded-full" />{' '}
            <span className="font-bold">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={24}
          className="w-[300px] overflow-scroll"
        >
          <DropdownMenuLabel>
            <Link href="/" className="flex items-center">
              <Icons.logo className="mr-2 size-5 rounded-full" />{' '}
              {siteConfig.name}
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {items?.map(
            (item, index) =>
              item.href && (
                <DropdownMenuItem key={index} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
