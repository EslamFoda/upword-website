import "./OurValue.css";
import icon1 from "../../imgs/icon1.svg";
import icon2 from "../../imgs/icon2.svg";
import icon3 from "../../imgs/icon3.svg";
import icon4 from "../../imgs/icon4.svg";
import icon5 from "../../imgs/icon5.svg";
import icon6 from "../../imgs/icon6.svg";
import Aos from "aos";
import { useEffect } from "react";
const OurValue = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="value-section">
      <div className="value-left">
        <h2 data-aos="fade-up" data-aos-once="true">
          Our {"{ values }"}
        </h2>
        <p data-aos="fade-up" data-aos-once="true">
          Everything we do at Upword encourages curiosity, embraces exploration,
          and motivates people to keep going - at whatever pace works best for
          them. Here are the values that collectively guide our decisions and
          actions:
        </p>
      </div>
      <div className="value-right">
        <div className="value-box">
          <img src={icon1} alt="" />
          <p>Empower learners & obsess over learning</p>
        </div>
        <div className="value-box">
          <img src={icon2} alt="" />
          <p>Respond & lead with integrity</p>
        </div>
        <div className="value-box">
          <img src={icon3} alt="" />
          <p>Understand one another & cultivate a family-like culture</p>
        </div>
        <div className="value-box">
          <img src={icon4} alt="" />
          <p>
            Take full accountability for our actions, & hold each other
            accountable
          </p>
        </div>
        <div className="value-box">
          <img src={icon5} alt="" />
          <p>Default to transparency & candor</p>
        </div>
        <div className="value-box">
          <img src={icon6} alt="" />
          <p>Improve ruthlessly & focus on excellence</p>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
