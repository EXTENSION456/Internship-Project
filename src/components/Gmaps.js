import React from "react";
import style from './Gmaps.module.css'

function Gmaps() {
  return (
    <>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57984.55235779336!2d92.77153999999999!3d24.72569505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e37d0945c167d%3A0x9931796ba5ee50c2!2sSilcoorie%20Grant%2C%20Assam!5e0!3m2!1sen!2sin!4v1716445965851!5m2!1sen!2sin"
          width="auto"
          height="500px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className={style.iframe}
        ></iframe>
      </div>
    </>
  );
}

export default Gmaps;
