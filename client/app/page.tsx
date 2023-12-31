import Image from 'next/image'
import Button from './components/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Want to see blog posts?</h1>
        <Button link='/blogposts' text='Read more' />
      </div>
    </main>
  )
}
