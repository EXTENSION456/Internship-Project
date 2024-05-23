import React, { useState } from "react";
import styles from "./Registration.module.css";

function Registration() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);
    sendDataToApi({ name: newName, number });
  };

  const handleNumber = (e) => {
    const newNumber = e.target.value;
    setNumber(newNumber);
    sendDataToApi({ name, number: newNumber });
  };

  const sendDataToApi = async (data) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error sending data to API", error);
    }
  };

  return (
    <>
      <div className="register">
        <form>
          <div className={styles.flex}>
            <h3>Name: </h3>
            <input type="text" onChange={(e) => handleName(e)} value={name} />
          </div>
          <div className={styles.flex}>
            <h3>Number</h3>
            <input
              type="text"
              value={number}
              onChange={(e) => handleNumber(e)}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
