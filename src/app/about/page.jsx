import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  TwitterIcon,

} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
  'I’m Olivia Hunt. I live in Bloomington, Indiana where I work as a cellist and teacher.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="object-cover border-2 border-black aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 dark:border-white dark:border-zinc-700 "
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Motion through music
          </h1>
          <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
            <p>
              Cellist Olivia Hunt grew up in Milton, Georgia where she began
              learning the cello in school at age 9. She attended Vanderbilt
              University’s Blair School of Music, where she earned her
              Bachelor’s in Music under the instruction of Dr. Felix Wang.
            </p>
            <p>
              While an undergraduate, she performed with the Nashville
              Sinfonietta, spent a semester studying music at the Conservatorium
              van Amsterdam, and performed as part of the Festival d’Aix en
              Provence with her string quartet.
            </p>
            <p>
              Following graduation, she continued her studies at Indiana
              University with Eric Kim, where she earned her Master’s in Music
              and Performer’s Diploma in Solo Cello Performance. She has
              attended festivals such as the Aspen Music Festival, Green
              Mountain Chamber Music Festival, Brancaleoni International Music
              Festival, and National Music Festival.
            </p>
            <p>
              She is currently the Assistant Principal Cellist of the Billings
              Symphony and acts as a substitute in the Owensboro Symphony
              Orchestra and Evansville Philharmonic. In addition to performing
              she has a passion for teaching, and is on faculty at the Stafford
              Music Academy in Bloomington, Indiana. Outside of music she enjoys
              traveling, cuddling her cat, and reading.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
         
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href="olivia.c.hunt@gmail.com"
              icon={MailIcon}
              className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
            >
              olivia.c.hunt@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
