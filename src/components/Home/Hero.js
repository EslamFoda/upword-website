import "./Hero.css";
import heroImg from "../../imgs/hero-img.png";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-flex">
        <div className="left-hero">
          <h1 style={{ fontSize: "90px" }}>
            Become a <br /> // super // <br /> learner
          </h1>
          <p>
            Upword supercharges your learning by automating your note-taking for
            2x faster knowledge collection. We're building a better & faster way
            for you to capture what you need.
          </p>
          <button className="main-btn">Start Now</button>
        </div>
        <div className="right-hero">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
