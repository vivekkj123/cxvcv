import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'

function Navbar({user}) {
    return (
        <div className={styles.Navbar}>
            <h2>Edvora</h2>
            <div className={styles.User_details}>
                <h3>{user.name}</h3>
                <Image className={styles.user_icon} src={user.url} height={44} width={44} />
            </div>
        </div>
    )
}

export default Navbar