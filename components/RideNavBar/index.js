import Link from 'next/link';
import React from 'react'
import styles from './styles.module.css'
const RideNavbar = ({active}) => {
    console.log(active);
    return (
        <div className={styles.RideNavbar}>
            <div className={styles.Tabbar}>
                <Link href='/'>
                <h4 className={active=='nearest'?styles.active:''}>Nearest Rides</h4>
                </Link>
                <Link href='/Upcoming'>
                <h4 className={active=='upcoming'?styles.active:''}>Upcoming Rides</h4>
                </Link>
                <Link href='/Past'>
                <h4 className={active=='past'?styles.active:''}>Past Rides</h4>
                </Link>
            </div>
            <div className={styles.filterBar}>
                <h2>Filter bar</h2>
            </div>
        </div>
    )
}

export default RideNavbar