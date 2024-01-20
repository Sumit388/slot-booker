// * Assets Import * //
import sumit from "../assets/sumit.jpeg";
import time from "../assets/time.svg";
import camera from "../assets/camera.svg";

// * Styles Import * //
import Styles from "../styles/PageComponents/MeetingDetails.module.scss";

const MeetingDetails = () => {
  return (
    <div className={Styles.meetingDetailsContainer}>
      <div className={Styles.hostDetails}>
        <div className={Styles.image}>
          <img src={sumit} alt="sumitPic" />
        </div>
        <h2> Sumit Mishra</h2>
        <p> Consultation Call</p>
        <div className={Styles.duration}>
          {" "}
          <img src={time} alt="sumitPic" width={20} />
          <p>1 Hour</p>
        </div>
        <div className={Styles.duration}>
          <img src={camera} alt="sumitPic" width={26} />
          <p>Web conferencing details provided upon confirmation.</p>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;
