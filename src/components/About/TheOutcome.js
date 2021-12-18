import Tab from "./Tab";
import "./TheOutcome.css";
const TheOutcome = () => {
  return (
    <div className="outcome-section">
      <div className="outcome-left">
        <Tab />
      </div>
      <div className="outcome-right">
        <span style={{ marginBottom: "1rem", display: "block" }}>
          The outcome {">>"}
        </span>
        <h2>Read *twice* as fast</h2>
        <p>
          With Upword, professionals, students & lifelong learners read twice as
          fast & understand what they need. Our users become much more
          productive, making the most out of their time.
        </p>
        <button className="main-btn">Start Now</button>
      </div>
    </div>
  );
};

export default TheOutcome;
