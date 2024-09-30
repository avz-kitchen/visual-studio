import React from "react";
import portfolioItems from "../../data/portfolio";

const Logo = () => {
  const brandingItems = portfolioItems.filter(
    (item) => item.type === "Branding"
  );

  return (
    <div className="branding">
      <h1>Branding</h1>
      <div className="branding-grid">
        {brandingItems.map((item) => (
          <div className="branding-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="branding-info">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Branding</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
