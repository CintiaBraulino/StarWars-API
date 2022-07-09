import type { NextPage } from 'next'
import Head from 'next/head';
import WelcomePage from '../layouts/Welcome';

const Home: NextPage = () => {
  <Head>
    <title>Star Wars | Home </title>
    <meta name="Keywords" content='starwars'/>
  </Head>
  return <WelcomePage />
}
export default Home
