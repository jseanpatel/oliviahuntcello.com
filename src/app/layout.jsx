import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Olivia Hunt',
    default:
      'Olivia Hunt - orchestral and chamber cellist based in Bloomington, Indiana',
  },
  description:
  'Olivia Hunt is a lifelong teacher and student of music. She currently lives in Bloomington, Indiana, where she is the Assistant Principal Cellist of the Billings Symphony and acts as a substitute in the Owensboro Symphony Orchestra and Evansville Philharmonic. In addition to performing she has a passion for teaching, and is on faculty at the Stafford Music Academy in Bloomington, Indiana. Outside of music she enjoys traveling, cuddling her cat, and reading.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
