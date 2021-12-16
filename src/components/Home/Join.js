import company1 from "../../imgs/company1.png";
import company2 from "../../imgs/company2.png";
import company3 from "../../imgs/company3.png";
import company4 from "../../imgs/company4.png";
import company5 from "../../imgs/company5.png";
import company6 from "../../imgs/company6.png";
import company7 from "../../imgs/company7.png";
import company8 from "../../imgs/company8.png";
import company9 from "../../imgs/company9.png";
import company10 from "../../imgs/company10.png";
import company11 from "../../imgs/company11.png";
import company12 from "../../imgs/company12.png";
import "./Join.css";
const Join = () => {
  return (
    <div className="we-turn-section">
      <div className="section-grid">
        <div className="we-turn-left join-left">
          <h2>
            Join <span className="black-border">thousands</span> of <br /> users
            from <br /> //leading// <br />
            organizations
          </h2>
          <p>
            Learning doesn't have to be such a lift – use Upword to increase
            your knowledge productivity.
          </p>
        </div>
        <div className="join-right">
          <div className="company-img-container">
            <img src={company1} alt="company1" />
          </div>
          <div className="company-img-container">
            <img src={company2} alt="company2" />
          </div>
          <div className="company-img-container">
            <img src={company3} alt="company3" />
          </div>
          <div className="company-img-container">
            <img src={company4} alt="company4" />
          </div>
          <div className="company-img-container">
            <img src={company5} alt="company5" />
          </div>
          <div className="company-img-container">
            <img src={company6} alt="company6" />
          </div>
          <div className="company-img-container">
            <img src={company7} alt="company7" />
          </div>
          <div className="company-img-container">
            <img src={company8} alt="company8" />
          </div>
          <div className="company-img-container">
            <img src={company9} alt="company9" />
          </div>
          <div className="company-img-container">
            <img src={company10} alt="company10" />
          </div>
          <div className="company-img-container">
            <img src={company11} alt="company11" />
          </div>
          <div className="company-img-container">
            <img src={company12} alt="company12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
