import React from 'react'
import styles from 'styles/Footer.module.css'
import GithubLogo from 'assets/githubLogo.svg'
import LinkedinLogo from 'assets/linkedinLogo.svg'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles.footerRoot}>
            <div className={styles.logos}>
                <a href="https://github.com/J-eld/"><Image src={GithubLogo} width={70} height={70} /></a>
                <a href="https://www.linkedin.com/in/jad-el-dik/"><Image src={LinkedinLogo} width={70} height={70} /></a>
            </div>
            <p>Copyright &copy; {new Date().getFullYear()} Jad Eldik. All Rights Reserved.</p>
        </div>
    )
}
