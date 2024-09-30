import { useRef } from "react";
import "./branding.scss"; // Add styling for this component

const Branding = ({ item }) => {
  return (
    <section className="branding-section">
      <div className="container">
        <div className="branding-card">
          <img src={item.img} alt={item.title} className="branding-logo" />
          <div className="branding-info">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Branding</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
