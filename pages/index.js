import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import  {useRef, useEffect} from 'react'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PanoramaViewer from '@/components/PanoramaViewer'




export default function Home() {

  const containerRef = useRef(null);

  return (
    <>
      <Head>
        <title>DLB Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar containerRef={containerRef}/>
        <PanoramaViewer />


        {/* <div className={styles.container} ref={containerRef}>
          <section className={styles.section}>
            <Hero />
          </section>
          <section className={styles.section}>
            <PanoramaViewer />
          </section>
          <section className={styles.section}>
           
          </section>
          <section className={styles.section}>
          
          </section>
        </div> */}

      </main>
    </>
  )
}
