import { useState } from "react";
import React from "react";
import Styles from "../styles/PageComponents/FunctionsBox.module.scss";
import SelectTimeAndDate from "./SelectTimeAndDate";
import UserDetailsForm from "./UserDetailsForm";

const FunctionsBox = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [page, setPage] = useState(1);
  const params = {
    date,
    setDate,
    time,
    setTime,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    page,
    setPage,
  };

  return (
    <div className={Styles.functionsBoxContainer}>
      {page === 1 ? (
        <SelectTimeAndDate params={params} />
      ) : (
        <UserDetailsForm params={params} />
      )}
    </div>
  );
};

export default FunctionsBox;
