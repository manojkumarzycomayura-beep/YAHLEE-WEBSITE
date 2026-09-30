import React from "react";
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <p>
        ✨ Complimentary Shipping on Orders Above ₹2,999 &nbsp; | &nbsp;
        <a href="/collections">Shop Festive Collection</a>
      </p>
    </div>
  );
};

export default AnnouncementBar;
