import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Message recieved',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thank you for your message"
      intro="If applicable, you will receive a response shortly."
    />
  )
}
