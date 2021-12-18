import cultureImg from "../../imgs/culture.png";
import "./OurCulture.css";
const OurCulture = () => {
  return (
    <div className="culture-section">
      <div className="culture-left">
        <div className="culture-img-container">
          <img src={cultureImg} alt="culture" />
        </div>
      </div>
      <div className="culture-right">
        <h2>Our culture</h2>
        <p>
          We are on a mission towards building the next generation of knowledge
          productivity. We feel blessed to have the opportunity to re-shape the
          way people capture, collect and use their life knowledge.
        </p>
        <p>
          At Upword, we combine hard work & fun — all part of our family like
          culture. We deeply believe in our mission & are fully committed to
          achieve it each & every day.
        </p>
        <button className="main-btn">Start Now</button>
      </div>
    </div>
  );
};

export default OurCulture;
