import "./App.css";
import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Gmaps from "./components/Gmaps.js";
import Registration from "./components/Registration.js";
import Countdown from "./components/Countdown.js";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  const [boolRegister, setBoolRegister] = useState(false);
  const [boolMaps, setBoolMaps] = useState(false);
  const [bootCount, setBoolCount] = useState(false);
  const timeoutRef = useRef(null);

  const closePopup = () => {
    setPopupOpen(false);
    setBoolMaps(false);
    setBoolRegister(false);
    clearTimeout(timeoutRef.current);
  };

  const handleRegister = () => {
    setBoolRegister(true);
    setPopupOpen(true);
  };

  const handleMaps = () => {
    setBoolMaps(true);
    setPopupOpen(true);
  };

  const handleCount = () => {
    setPopupOpen(true);
    setBoolCount(true);
    timeoutRef.current = setTimeout(() => {
      closePopup();
      handleMaps();
    }, 10000);
  };

  const contentStyle = {
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
    background: "white",
  };

  return (
    <div className="container">
      <nav className="navbar">
        <ul className="flex">
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              Registration
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleMaps();
              }}
            >
              Google Maps
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleCount();
              }}
            >
              Countdown Timer
            </a>
          </li>
        </ul>
      </nav>

      <div className="popup">
        <Popup
          open={popupOpen}
          closeOnDocumentClick
          onClose={closePopup}
          contentStyle={contentStyle}
        >
          <div className="modal">
            <button className="close" onClick={closePopup}>
              &times;
            </button>
            <div className="content">
              {boolRegister ? (
                <Registration />
              ) : (
                <>
                  {boolMaps ? <Gmaps /> : bootCount ? <Countdown /> : "nothing"}
                </>
              )}
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default App;
