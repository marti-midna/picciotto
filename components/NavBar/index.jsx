import React from 'react'
import Image from 'next/image'
import logo from "../../public/favicon.png";
import styles from './styles.module.scss'
import Link from 'next/link';


export default function NavBar() {
  return (
    <nav className={styles.nav}>
    <Image alt="logo" src={logo} width="50" height="50" />
    <h1>Picciotto!</h1>
    <div className={styles.link}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/messages"><a>Messages</a></Link>
    </div>
  </nav>
  )
}
