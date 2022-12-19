import Head from 'next/head'
import Image from 'next/image' 
import Layout from '../components/layout';
import Hero from '../components/home/hero';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>빡코딩 포토폴리오</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
    </Layout>

  )
}
