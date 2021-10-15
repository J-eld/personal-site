import React, {useState} from 'react'
import styles from 'styles/Header.module.css'
import HamburgerMenu from 'assets/hamburgerMenu.svg'
import Image from 'next/image'
import HamburgerMenuComponent from './HamburgerMenu'
import Link from 'next/link'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setMenuOpen(true)
    }

    return (
        <div className={styles.headerRoot}>
            <div className={styles.headerButtons}>
                <Link href="/">
                    <div className={styles.headerButton}>
                        Home
                    </div>
                </Link>
                <div className={styles.headerButton}>
                    About Me
                </div>
                <Link href="/contact">
                    <div className={styles.headerButton}>
                        Contact
                    </div>
                </Link>
            </div>
            <div className={styles.hamburgerMenu}>
                <Image onClick={handleMenuClick} src={HamburgerMenu} />
            </div>
            {menuOpen && <HamburgerMenuComponent setMenuOpen={setMenuOpen} />}
        </div>
    )
}
