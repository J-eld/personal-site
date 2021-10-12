import React, { useRef } from 'react'
import styles from 'styles/HomepageBody.module.css'
import ArrowDown from 'assets/arrowDown.svg'
import Image from 'next/image'
import Projects from './Projects'

export default function HomepageBody() {
    const projectsRef = useRef(null)

    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className={styles.homepageBodyRoot}>
            <div className={styles.greetingTitle}>
                <div className={styles.Hi}>Hi,</div>
                <div className={styles.greetingName}>I'm Jad Eldik</div>
                <div className={styles.greetingOccupation}>Full Stack Web Developer 💻</div>
            </div>
            <div className={styles.arrowDown}>
                    <Image onClick={scrollToProjects} height={150} width={150} src={ArrowDown} />
            </div>
            <div className={styles.projects}>
                <div ref={projectsRef} className={styles.projectsTitle}>
                    Projects
                </div>
                <Projects />
            </div>
        </div>
    )
}
