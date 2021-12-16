import "./Knowledge.css";
import firstPoster from "../../imgs/first.png";
import secPoster from "../../imgs/sec.png";
import thirdPoster from "../../imgs/third.png";
import fourPoster from "../../imgs/four.png";
import fivePoster from "../../imgs/five.png";
import sixPoster from "../../imgs/six.png";
const Knowledge = () => {
  return (
    <div className="knowledge-section">
      <div className="knowledge-left">
        <h2>
          Your new <br /> {"{ knowledge }"} <br /> library
        </h2>
        <p>
          Every paper, article, & note you upload to Upword is securely stored
          in your personal knowledge library, for life. Organized, indexed, and
          ready for you, whenever you need.
        </p>
        <button className="main-btn sec-btn">Start Now</button>
      </div>
      <div className="knowledge-right">
        <div className="poster-container">
          <img src={firstPoster} alt="firstPoster" />
        </div>
        <div className="poster-container">
          <img src={secPoster} alt="secPoster" />
        </div>

        <div className="poster-container">
          <img src={thirdPoster} alt="thirdPoster" />
        </div>

        <div className="poster-container">
          <img src={fourPoster} alt="fourPoster" />
        </div>

        <div className="poster-container">
          <img src={fivePoster} alt="fivePoster" />
        </div>

        <div className="poster-container">
          <img src={sixPoster} alt="sixPoster" />
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
