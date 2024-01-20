import { useEffect, useState } from "react";
import Styles from "../styles/PageComponents/SelectTimeAndDate.module.scss";
import Calendar from "react-calendar";
import { toast } from "react-toastify";
import { getAllBookedDays, getBookedSlotsByDay } from "../utils/urls";
import axios from "axios";

const SelectTimeAndDate = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [bookedDates, setBookedDates] = useState([]);
  const [unbookedSlots, setUnBookedSlots] = useState([]);

  const isDateDisabled = (date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate());
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
    return (
      date <= tomorrow ||
      date > oneMonthLater ||
      bookedDates.includes(date.getTime() + 24 * 60 * 60 * 1000)
    );
  };

  const formatDate = (dateObject) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return dateObject.toLocaleDateString("en-US", options);
  };

  const handleNextPage = () => {
    if (!params.date || !params.time) {
      toast.error("Please select a slot first");
      return;
    }
    params.setPage(2);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(getAllBookedDays)
      .then((data) => {
        setLoading(false);
        setBookedDates(
          data?.data?.fullyBookedDays?.map((bookedDay) =>
            new Date(bookedDay).getTime()
          )
        );
      })
      .catch((err) => {
        console.error(err?.message);
        setLoading(false);
        toast.error(
          err?.response?.data?.message ||
            "Some error occurred while fetching booked dates data."
        );
      });
  }, []);

  useEffect(() => {
    if (params.date) {
      setSlotsLoading(true);
      axios
        .get(`${getBookedSlotsByDay}?date=${params.date.toLocaleDateString()}`)
        .then((data) => {
          setSlotsLoading(false);
          const slots = [1, 2, 3, 4, 5].filter(
            (val) => !data?.data?.bookedSlots?.includes(val)
          );
          setUnBookedSlots(slots);
        })
        .catch((err) => {
          console.error(err?.message);
          setSlotsLoading(false);
          toast.error(
            err?.response?.data?.message ||
              "Some error occurred while fetching slots data."
          );
        });
    }
  }, [params.date]);

  return (
    <div className={Styles.selectTimeAndDateContainer}>
      <h2>Select a Date & Time</h2>
      {loading ? (
        "Loading. Please Wait...."
      ) : (
        <div className={Styles.mainFunctionsContainer}>
          <div>
            {!loading && (
              <Calendar
                onChange={params.setDate}
                value={params.date}
                tileDisabled={({ date }) => isDateDisabled(date)}
              />
            )}
          </div>
          {params.date && (
            <div className={Styles.slots}>
              {params.date && <h2>{formatDate(params.date)}</h2>}
              {unbookedSlots.map((slot) => (
                <button
                  key={slot}
                  className={params.time === slot ? Styles.activeButton : ""}
                  onClick={() => params.setTime(slot)}
                >{`0${slot}:00 PM`}</button>
              ))}
              <button
                className={Styles.selectButton}
                onClick={handleNextPage}
                disabled={slotsLoading}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectTimeAndDate;
