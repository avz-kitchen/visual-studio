import "./finding.scss";
const Finding = (item) => {
  return (
    <div className="two-column">
      <div>
        <img src="public/Frame-24.png" />
      </div>
      <div className="wrapper">
        <h3>Usability Finding</h3>
        <div>{item.desc}Here is the first finding</div>
      </div>
    </div>
  );
};

export default Finding;
