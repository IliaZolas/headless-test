import Card from '../components/card'

export default function BlogPosts() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Card image_url="/girl.png" title='This title' description='This is a description' id='1' link='/#' buttonText='Read'/>
      </div>
    </main>
  )
}
