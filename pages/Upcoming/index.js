import react from "react";
import Navbar from "../../components/Navbar";
import RideCard from "../../components/RideCard";
import RideNavbar from "../../components/RideNavBar";
import styles from "../../styles/Home.module.css";

export default function Upcoming({ ridesjson, userjson }) {
  const [UpcomingRides, setUpcomingRides] = react.useState([]);
  const [PastRides, setPastRides] = react.useState([]);
  react.useEffect(() => {
    ridesjson.map((ride) => {
      let currentDate = new Date();
      let RideDate = new Date(ride.date);
      currentDate < RideDate
        ? setUpcomingRides([ride, ...UpcomingRides])
        : // : setPastRides([...PastRides, ride]);
          setPastRides([...PastRides, ride]);
    });
  }, []);
  console.log(PastRides);
  return (
    <div className={styles.Home}>
      <Navbar user={userjson} />
      <RideNavbar active='upcoming'/>
      <div className={styles.container}>
        {ridesjson.map((ride) => (
          <RideCard ride={ride} station={userjson.station_code} key={ride.id} />
        ))}
        {/* <RideCard /> */}
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const rides = await fetch("https://assessment.api.vweb.app/rides");
  const user = await fetch("https://assessment.api.vweb.app/user");
  const ridesjson = await rides.json();
  const userjson = await user.json();
  return {
    props: {
      ridesjson,
      userjson,
    },
  };
}
