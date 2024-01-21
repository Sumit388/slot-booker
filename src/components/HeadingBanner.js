// * Styles Import * //
import Styles from "../styles/PageComponents/HeadingBanner.module.scss";

const HeadingBanner = () => {
  return (
    <div className={Styles.headingBannerContainer}>
      <h1>Sumit's Slot Booking App</h1>
      <p>
        Effortlessly schedule your appointments with our user-friendly slot
        booking app, ensuring a seamless experience for both users and
        businesses. Effortlessly choose from a range of available dates and time
        slots, then proceed to secure your spot by providing your details for a
        seamless booking experience.
      </p>
      <p>
        I have not added any transactions gateway as I did not have any account
        verified. PS: All successful bookings are stored in "Slots" table.
      </p>
    </div>
  );
};

export default HeadingBanner;
