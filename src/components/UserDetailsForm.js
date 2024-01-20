import { useState } from "react";
import Styles from "../styles/PageComponents/UserDetailsForm.module.scss";
import { toast } from "react-toastify";
import axios from "axios";
import { addSlot } from "../utils/urls";

const UserDetailsForm = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    if (!params.name || !params.email || !params.phone) {
      toast.error("Please fill all the details");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(params.name)) {
      toast.error("Invalid name format. Please use only alphabets and spaces.");
      return;
    }

    if (!emailRegex.test(params.email)) {
      toast.error("Invalid email format. Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(params.phone)) {
      toast.error(
        "Invalid phone number. Please enter a 10-digit phone number."
      );
      return;
    }

    const requestBody = {
      slot_number: params.time,
      name: params.name,
      email: params.email,
      phone: params.phone,
      day: params.date.toLocaleDateString(),
    };

    setLoading(true);

    axios
      .post(addSlot, requestBody)
      .then((data) => {
        setLoading(false);
        toast.success(data?.data?.message || "Slot booked successfully");
        params.setPage(1);
        params.setTime(null);
        params.setDate(null);
      })
      .catch((err) => {
        console.error(err?.message);
        console.log(err?.response);
        setLoading(false);
        toast.error(
          err?.response?.data?.error ||
            "Some error occurred while booking slot. Please try again."
        );
      });
  };

  return (
    <div className={Styles.formContainer}>
      <button onClick={() => params.setPage(1)}>Go back</button>
      <div className={Styles.inputContainer}>
        <label htmlFor={"name"}>Name: </label>
        <input
          id={"name"}
          onChange={(e) => params.setName(e.target.value)}
          placeholder="Sumit Mishra"
        />
      </div>
      <div className={Styles.inputContainer}>
        <label htmlFor={"email"}>Email Id: </label>
        <input
          id={"email"}
          onChange={(e) => params.setEmail(e.target.value)}
          placeholder="sumitmishra388@gmail.com"
        />
      </div>
      <div className={Styles.inputContainer}>
        <label htmlFor={"phone"}>Phone Number:</label>
        <input
          id={"phone"}
          onChange={(e) => params.setPhone(e.target.value)}
          placeholder="9876543210"
        />
      </div>
      <button onClick={handleSubmit} className={Styles.selectButton}>
        Schedule Event
      </button>
    </div>
  );
};

export default UserDetailsForm;
