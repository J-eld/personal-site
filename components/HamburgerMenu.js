import React, { useState } from 'react'
import styles from 'styles/HamburgerMenu.module.css'
import RightChevron from 'assets/chevronRight.svg'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'

export default function HamburgerMenu({ setMenuOpen }) {
    const [menuClose, setMenuClose] = useState(false)
    const handleClick = (e) => {
        if (e.target.id === 'backgroundModal') {handleClose()}
    }

    const handleClose = () => {
        setMenuClose(true)
        setTimeout(() => {
            setMenuOpen(false)
        }, 300)
    }

    return (
        <div id="backgroundModal" onClick={handleClick} className={styles.hamburgerMenuRoot}>
            <div className={clsx(styles.menuBox, {[styles.menuClose]: menuClose})}>
                <div className={styles.closeIconDiv}>
                    <Image onClick={handleClose} src={RightChevron} />
                </div>
                <div className={styles.headerButtonsInMenu}>
                    <Link href="/">
                        <div className={styles.headerButton}>Home</div>
                    </Link>
                    <div className={styles.headerButton}>About Me</div>
                    <Link href="/contact">
                        <div className={styles.headerButton}>Contact</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
