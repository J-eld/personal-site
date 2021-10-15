import React, { useState } from 'react'
import Header from 'components/Header'
import styles from 'styles/Contact.module.css'
import clsx from 'clsx'
import axios from 'axios'
import Footer from 'components/Footer'
import ContactModal from'components/ContactModal'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim().length || !email.trim().length || !message.trim().length) {
            alert('Please fill in all the fields before submitting')
        } else {
            axios.post('/api/contact', { 
                name: name, 
                email: email, 
                message: message
            })
            .then(res => {
                clearData()
                setOpenModal(true)
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })
        }
    }

    const clearData = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className="container">
            <Header />
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.contactTitle}>
                    Contact Me
                </div>
                <div className={styles.inputDiv}>
                    <label>Name</label>
                    <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className={clsx(styles.input)} />
                </div>
                <div className={styles.inputDiv}>
                    <label>Email</label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" className={clsx(styles.input)} />
                </div>
                <div className={styles.inputDiv}>
                    <label>Message</label>
                    <textarea required value={message} onChange={(e) => setMessage(e.target.value)} type="text" className={clsx(styles.bigInput)} />
                </div>
                {error && <p className={styles.error}>Sorry, it looks like an error has occurred. Please try submitting again</p>}
                <input className={clsx("btn", styles.submit)} type="submit" value="Send" />
            </form>
            <Footer />
            {openModal && <ContactModal setOpenModal={setOpenModal} />}
        </div>
    )
}
