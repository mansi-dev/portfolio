import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ToolbarComp from '../components/toolbar.js'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Contact from './contact'


export default function Home() {
  return (
    <div className={styles.container}>
      {/* <ToolbarComp/> */}
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <footer className={styles.footer}>
        <p>© Copyright 2022 Mansi Zope</p>
      </footer>
    </div>
  )
}
