import "./OurPlatform.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const OurPlatform = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="platform-section">
      <div className="left-platform">
        <h3 data-aos="fade-up" data-aos-once="true">
          The {">>"} <br /> science <br /> behind <br /> Upword
        </h3>
      </div>
      <div className="right-platform">
        <h2>Our platform</h2>{" "}
        <p>
          With Upword, professionals, students & lifelong learners can transform
          any content into an interactive reading experience designed for
          engagement & retention. Our platform is built on insights from
          cognitive science about how humans learn best, so you’ll get your
          reading done quicker, retain information longer, & actually have fun
          doing it.
        </p>
        <p>
          We are building a whole new way of consuming what you already know.
          From our Beta with basic reading elements to our full, live, robust
          product, which will transform your knowledge into audio-bite
          playlists.
        </p>
        <p>
          Our natural language processing engine identifies key information in
          the text, & auto-generates the Upword signature AI features. After
          saving time on capturing new information, we use cutting edge
          technologies to help you consume what you know, the way you love.{" "}
        </p>
      </div>
    </div>
  );
};

export default OurPlatform;
