// * Styles Import * //
import Styles from "../styles/PageComponents/HeadingBanner.module.scss";

const HeadingBanner = () => {
  return (
    <div className={Styles.headingBannerContainer}>
      <h1>Sumit's Slot Booking App</h1>
      <p>
        Effortlessly schedule your appointments with our user-friendly slot
        booking app, ensuring a seamless experience for both users and
        businesses.
        <br /> - Slots once booked won't show in the available slots. <br />-
        Date in the calender will become inactive if all slots for the day are
        booked. <br />
        - I have not added any transactions gateway as I did not have any
        account verified. <br /> - All successful bookings are stored in "Slots"
        table.
      </p>
    </div>
  );
};

export default HeadingBanner;
