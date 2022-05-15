import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'

const RideCard = ({ ride, station }) => {
    const closest = ride.station_path.reduce((a, b) => {
        return Math.abs(b - station) < Math.abs(a - station) ? b : a;
    });
    return (
        <div className={styles.RideCard}>
            <div className="map">
                <Image className={styles.map_image} src={ride.map_url} height={150} width={300} />
            </div>
            <div className={styles.Ride_Details}>
                <p>Ride Id: <span>{ride.id}</span></p>
                <p>Origin Station: <span>{ride.origin_station_code}</span></p>
                <p>station_path: <span>[{ride.station_path.toString()}]</span></p>
                <p>Date: <span>{ride.date}</span></p>
                <p>Distance: <span>{Math.abs(closest - station)}</span></p>
            </div>

        </div>
    )
}

export default RideCard