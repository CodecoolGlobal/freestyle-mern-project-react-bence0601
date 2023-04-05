import React from "react";
import "../Styles/about.css";
import Navbar from "./Navbar";
import Bence from "./Bence";
import Attila from "./Attila";
import Kinga from "./Kinga";
import Armand from "./Armand";

function about() {
  return (
    <div>
      <div className="workers">
        Our Workers
        <div className="people">
          <Kinga />
          <Bence />
          <Attila />
          <Armand />
        </div>
      </div>
    </div>
  );
}

export default about;
