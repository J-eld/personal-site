import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import styles from 'styles/About.module.css'
import Link from 'next/link'

export default function aboutme() {
    return (
        <div className="container">
            <Header />
            <div className={styles.aboutRoot}>
                <h1 className={styles.aboutTitle}>About Me</h1>
                <p className={styles.aboutContent}>
                    Hi, My name is Jad Eldik. I am a Full Stack Software Developer, currently working as a developer/faciliatator at Mission Ready HQ.
                    If you'd like to see some of the projects i've been working on, check them out <Link href="/#projects"><span className={styles.link}>here.</span></Link>
                </p>
                <p className={styles.aboutContent}>
                    The tech stack i'm currently the most familiar with is React, NodeJS and MySQL, but i've had experience with a ton of other languages and frameworks, such as Python, PHP, Laravel, Django and VueJS.
                    I'm constantly on the lookout for new challenges and opportunities, if you have a project in mind that you think I could contribute to, 
                    don't hesitate to get in contact with me through my <Link href="/contact"><span className={styles.link}>contact form.</span></Link>
                </p>
            </div>
            <Footer />
        </div>
    )
}