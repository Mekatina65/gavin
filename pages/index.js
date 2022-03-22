import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <h1>hello world</h1>
     <a href="#">Home button</a>
     <nav>this is nav</nav>
    </div>
  )
}
