import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        The Lost Language
      </div> 
      <div>
        <ul>
          <li>There are roughly 1.8 million people who claim to speak Irish.</li>
          <li>The population of the Republic or Ireland is roughly 5 million persons.</li>
          <li>That makes roughly 40% of the population.</li>
        </ul>
      </div>
    </main>
  )
}
