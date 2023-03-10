import Analytics from '@/components/Analytics'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Data Finance</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
          <Hero />
          <Analytics />Analytics
          <Newsletter />
          <Cards />
          <Footer />
        </div>
  )
}
