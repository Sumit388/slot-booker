// * Packages Import * //
import { ToastContainer } from "react-toastify";

// * Components Import * //
import FunctionsBox from "./components/FunctionsBox";
import HeadingBanner from "./components/HeadingBanner";
import MeetingDetails from "./components/MeetingDetails";

// * Styles Import * //
import "./App.css";
import "react-calendar/dist/Calendar.css";
import "./styles/CalenderStyles.css";
import "react-toastify/dist/ReactToastify.min.css";
import Styles from "./styles/Homepage.module.scss";

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
