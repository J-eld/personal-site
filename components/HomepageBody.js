import React from 'react'
import styles from 'styles/HomepageBody.module.css'
import ArrowDown from 'assets/arrowDown.svg'
import Image from 'next/image'

export default function HomepageBody() {
    return (
        <div className={styles.homepageBodyRoot}>
            <div className={styles.greetingTitle}>
                <div className={styles.Hi}>Hi,</div>
                <div className={styles.greetingName}>I'm Jad Eldik</div>
                <div className={styles.greetingOccupation}>Full Stack Web Developer 💻</div>
            </div>
            <div className={styles.arrowDown}>
                    <Image height={150} width={150} src={ArrowDown} />
            </div>
        </div>
    )
}
