import "./WeTurn.css";
import Audio from "./Audio";
const WeTurn = () => {
  return (
    <div className="we-turn-section">
      <div className="section-grid">
        <div className="we-turn-left">
          <h2>
            We turn your <br /> notes {">>"} into a <br /> knowledge <br />{" "}
            playlist
          </h2>
          <p>
            Upword automatically transforms your knowledge into audio bites.
            Your notes become a fun & easily-digestible playlist, so you can
            consume your knowledge your way.
          </p>
          <button className="main-btn">Start Now</button>
        </div>
        <div className="we-turn-right">
          <Audio />
        </div>
      </div>
    </div>
  );
};

export default WeTurn;
