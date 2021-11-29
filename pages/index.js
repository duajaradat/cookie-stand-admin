import Head from 'next/head'
import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function Home() {

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <body>
        <Header />
        <Main />
        <Footer />
      </body>

    </>
  )
}
