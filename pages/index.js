import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from 'components/Header'
import HomepageBody from 'components/HomepageBody'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <HomepageBody />
      <Footer />
    </div>
  )
}
