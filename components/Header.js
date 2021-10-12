import React, {useState} from 'react'
import styles from 'styles/Header.module.css'
import HamburgerMenu from 'assets/hamburgerMenu.svg'
import Image from 'next/image'
import HamburgerMenuComponent from './HamburgerMenu'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setMenuOpen(true)
    }

    return (
        <div className={styles.headerRoot}>
            <div className={styles.headerButtons}>
                <div className={styles.headerButton}>
                    Home
                </div>
                <div className={styles.headerButton}>
                    About Me
                </div>
                <div className={styles.headerButton}>
                    Contact
                </div>
            </div>
            <div className={styles.hamburgerMenu}>
                <Image onClick={handleMenuClick} src={HamburgerMenu} />
            </div>
            {menuOpen && <HamburgerMenuComponent setMenuOpen={setMenuOpen} />}
        </div>
    )
}
