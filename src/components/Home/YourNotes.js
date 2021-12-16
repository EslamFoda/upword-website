import "./YourNotes.css";
import notesImg from "../../imgs/up-note.png";
const YourNotes = () => {
  return (
    <>
      <div className="dark-section">
        <div className="section-grid">
          <div className="left-grid">
            <img src={notesImg} alt="your notes img" />
          </div>
          <div className="right-grid">
            <div className="content-wrapper">
              <h2>Your notes, </h2>
              <h2 className="border-around">taken for you</h2>
              <p>
                Taking notes takes time. Our AI-powered tool {"{UpNotes}"}{" "}
                generates notes for you, anytime & anywhere.
              </p>
              <button className="main-btn sec-btn">Start Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourNotes;
