import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for your message"
      intro="I’ll get back to you shortly. In the meantime, feel free to check out my latest writing surrounding the world of music."
    />
  )
}
