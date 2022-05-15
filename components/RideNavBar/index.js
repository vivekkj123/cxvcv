import React from 'react'
import styles from './styles.module.css'
const RideNavbar = () => {
    return (
        <div className={styles.RideNavbar}>
            <div className={styles.Tabbar}>
                <h4>Nearest Rides</h4>
                <h4>Upcoming Rides</h4>
                <h4>Past Rides</h4>
            </div>
            <div className={styles.filterBar}>
                <h2>Filter bar</h2>
            </div>
        </div>
    )
}

export default RideNavbar