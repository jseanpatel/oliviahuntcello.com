import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-green-500 dark:text-zinc-200 dark:hover:text-green-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-green-500" />
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

function Testimonial() {
  return (
    <section className="px-6 py-4 lg:px-8">
      <figure className="max-w-2xl mx-auto">
        <blockquote className="mt-2 text-xl font-semibold leading-8 tracking-tight text-zinc-800 sm:text-2xl sm:leading-9 dark:text-zinc-100">
          <p>
            “Olivia&apos;s command of the cello is extraordinary, infusing each
            note with profound emotion and depth. Her unwavering commitment to
            music is both inspiring and commendable. As a seasoned veteran in
            the field, I can unequivocally attest to Olivia&apos;s exceptional talent
            and predict a future of great success in her musical pursuits.”
          </p>
        </blockquote>
        <figcaption className="flex items-center mt-10 gap-x-6">
          <img
            className="w-12 h-12 rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1616693630344-85d96ffc664b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VpdCUyMGFuZCUyMHRpZSUyMG11c2ljaWFufGVufDB8fDB8fHww"
            alt=""
          />
          <div className="text-sm leading-6">
            <div className="font-semibold text-zinc-800 dark:text-zinc-100">
              Peter H.
            </div>
            <div className="mt-0.5 text-zinc-800 dark:text-zinc-100">
              Cello Student
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
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
              className="object-cover border-2 border-black aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:border-white dark:border-zinc-700 dark:bg-zinc-800 "
            />
            
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Motion through music
          </h1>
          <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
            <p>
            Cellist Olivia Hunt began her musical journey at age 9 in Atlanta. She went on to earn her Bachelor&apos;s at Vanderbilt University&apos;s Blair School of Music under Dr. Felix Wang. During her undergraduate studies, she performed with the Eschaton New Music Ensemble, Nashville Sinfonietta, and at the Festival d&apos;Aix en Provence. After graduating, she continued her studies at Indiana University with cellist Eric Kim, obtaining her Master&apos;s and Performer&apos;s Diploma.            </p>
            <p>
            Hunt has performed at renowned festivals worldwide, including the Aspen Music Festival, Green Mountain Chamber Music Festival, Brancaleoni International Music Festival, and National Music Festival. She is currently the Assistant Principal Cellist of the Billings Symphony and a substitute with the Owensboro Symphony Orchestra and Evansville Philharmonic.
            </p>
            <p>
            Passionate about teaching, Hunt spent two years on the faculty at the Stafford Music Academy in Bloomington, Indiana. She is now based in Los Angeles, California, with her cat, Rory.
            </p>
           
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}

            <SocialLink
              href="https://www.linkedin.com/in/oliviahuntcello/"
              icon={LinkedInIcon}
              className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
            >
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:olivia.c.hunt@gmail.com"
              icon={MailIcon}
              className="mt-4"
            >
              Send an email
            </SocialLink>
            
          </ul>
        </div>
      </div>
    </Container>
  )
}
