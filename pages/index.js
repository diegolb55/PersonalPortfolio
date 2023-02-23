import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'




export default function Home() {
  return (
    <>
      <Head>
        <title>DLB Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {/* Nav bar */}
        <NavBar />
        {/*  Hero Section : info content, canvasx2*/}
        <Hero />


        <div className={styles.sp}>
          {/* Tech Skills */}
          <Skills />
          {/* Projects */}
          <Projects />
        </div>




        {/* Contact */}
        <Contact />
        {/* Footer links */}
        <Footer />
      
      </main>
    </>
  )
}
