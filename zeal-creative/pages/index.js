import Head from 'next/head'
// import Nav from '../src/components/nav'
import Card from '../src/components/card'
import Hero from "../src/components/hero"
import Projects from "./projects"
import Reviews from "./reviews"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zeal Creative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Nav /> */}
      {/* <Hero /> */}
      <Projects />
      <Card />
      <Reviews />
    </div>
  )
}
