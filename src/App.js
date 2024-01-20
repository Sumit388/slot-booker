import "./App.css";
import "react-calendar/dist/Calendar.css";
import "./styles/CalenderStyles.css";
import Styles from "./styles/Homepage.module.scss";
import FunctionsBox from "./components/FunctionsBox";
import HeadingBanner from "./components/HeadingBanner";
import MeetingDetails from "./components/MeetingDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className={Styles.homePage}>
      <ToastContainer />
      <HeadingBanner />
      <div className={Styles.mainContainer}>
        <MeetingDetails />
        <FunctionsBox />
      </div>
    </div>
  );
}

export default App;
