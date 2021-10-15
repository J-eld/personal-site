import React from 'react'
import styles from 'styles/ContactModal.module.css'
import Link from 'next/link'

export default function ContactModal({ setOpenModal }) {
    const handleClose = () => {
        setOpenModal(false)
    }

    const handleClick = (e) => {
        if (e.target.id === 'background') {
            handleClose()
        }
    } 

    return (
        <div onClick={handleClick} id="background" className={styles.modalRoot}>
            <div className={styles.modalPaper}>
                <span onClick={handleClose} className={styles.closeSymbol}>&#10005;</span>
                <div className={styles.modalContent}>
                    <h2 className={styles.modalTitle}>Thanks for getting in touch</h2>
                    <p>I'll be in contact with you soon.</p>
                    <Link href="/">
                        <div className={styles.button}>Back to Home</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
