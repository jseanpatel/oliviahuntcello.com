import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import lessonInfoPortraitImage from '@/images/lesson-info-portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}) {
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
  title: 'Lessons',
  description:
    'Private cello lessons are offered to cellists of any age or skill level who are interested in establishing a strong technical foundation and developing their personal artistry. The approach is individualistic and flexible, based on the needs and interests of the student.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={lessonInfoPortraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="object-cover border-2 border-black aspect-rectangle rotate-2 rounded-2xl bg-zinc-100 dark:border-white dark:border-zinc-700"
            />
            
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Information about private lessons
            </h1>

            <section className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                Private cello lessons are offered to cellists of any age or
                skill level who are interested in establishing a strong
                technical foundation and developing their personal artistry. The
                approach is individualistic and flexible, based on the needs and
                interests of the student.
              </p>
            </section>

            <section className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <h2 className="text-lg font-bold tracking-tight text-zinc-800 sm:text-xl dark:text-zinc-100">
                Topics focused on
              </h2>
              <ol className="pl-5 space-y-2 list-decimal">
                <li>Instrument tuning/maintenance</li>
                <li>Developing a warm-up routine</li>
                <li>Practice techniques</li>
                <li>Managing performance anxiety</li>
                <li>Musical interpretation</li>
              </ol>
              <p>
                Trial lessons are available and recurring lessons are offered in
                30-minute or hour-long sessions. Please send a message below for
                a follow-up.
              </p>
            </section>

            
          </div>

          <div>
            <div>
              <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg ">
                <form action="/thank-you" method="POST" className="pt-8 mt-8 border-t border-gray-900/10 dark:border-zinc-400" name="lesson-inquiry" netlify>
                <div className="grid grid-cols-1 mt-8 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400"
                      >
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400"
                      >
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white dark:ring-white dark:ring-white dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between text-sm leading-6">
                        <label
                          htmlFor="phone"
                          className="block font-semibold text-zinc-600 dark:text-zinc-400"
                        >
                          Phone
                        </label>
                        <p
                          id="phone-description"
                          className="text-zinc-400 dark:text-zinc-500"
                        >
                          Optional
                        </p>
                      </div>
                      <div className="mt-2.5">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          aria-describedby="phone-description"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between text-sm leading-6">
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400"
                        >
                          Please describe what you are looking for in a lesson,
                          be sure to include your current level of playing and
                          any other relevant information
                        </label>
                      </div>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          aria-describedby="message-description"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-zinc-700 dark:text-white dark:placeholder:text-gray-500"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-10">
                    <button
                      type="submit"
                      className="rounded-md bg-gray-900 cursor-pointer hover:opacity-75 px-3.5 py-2.5 text-center text-sm font-semibold font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 dark:bg-zinc-700 " 
                    >
                      Send message
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
