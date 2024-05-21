import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'

const videos = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Rachmaninoff Sonata for Cello and Piano',
    description: 'Performed at the Aspen Music Festival, July 2021.',
    date: 'July 10, 2021',
  },
  {
    id: 2,
    src: 'https://www.youtube.com/watch?v=xAbfDTLZneE',
    title: 'Bach Cello Suite no. 6 in D major',
    description: 'Performed at the Aspen Music Festival, July 2021.',
    date: 'July 10, 2021',
  },
  {
    id: 3,
    src: 'https://www.youtube.com/watch?v=xAbfDTLZneE',
    title: 'Bach Cello Suite no 3 in C Major, Prelude',
    description: 'Performed at the Aspen Music Festival, July 2021.',
    date: 'July 10, 2021',
  },
  {
    id: 4,
    src: 'https://www.youtube.com/watch?v=xAbfDTLZneE',
    title: 'Bach Cello Suite no. 3 in C Major, Sarabande',
    description: 'Performed at the Aspen Music Festival, July 2021.',
    date: 'July 10, 2021',
  },
  {
    id: 5,
    src: 'https://www.youtube.com/watch?v=xAbfDTLZneE',
    title: 'Bach Cello Suite no. 3 in C Major, Gigue',
    description: 'Performed at the Aspen Music Festival, July 2021.',
    date: 'July 10, 2021',
  },
  {
    id: 6,
    src: 'https://www.youtube.com/watch?v=xAbfDTLZneE',
    title: 'Barber Cello Sonata op. 6',
    description: 'Performed at the Aspen Music Festival, July 2021.',
    date: 'July 10, 2021',
  },
  {
    id: 7,
    src: 'https://www.youtube.com/watch?v=xAbfDTLZneE',
    title: 'Variations on a Rococo Theme op. 33',
    description: 'Performed at the Aspen Music Festival, July 2021.',
    date: 'July 10, 2021',
  },
]


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

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Video performances
          </h1>
          <div>
            <ul className="mt-4 space-y-8 lg:space-y-4">
            {videos.map((video) => (
                 <li key={video.id} className="w-full">
                  <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={video.src}
                      title={video.title}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="mt-2 font-medium">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                  <p className="text-xs text-gray-500">{video.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
