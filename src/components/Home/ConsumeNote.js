import "./ConsumeNote.css";
import consumeNoteImg from "../../imgs/consume-note.png";
const ConsumeNote = () => {
  return (
    <div className="consume-section">
      <div className="consume-grid">
        <div className="consume-left">
          <img src={consumeNoteImg} alt="consume note img" />
        </div>
        <div className="consume-right">
          <h2>Consume your notes in a //slick summary// doc</h2>
          <p>
            Upword also transforms your knowledge bites into a summary document
            you can edit, share & collaborate on with others.
          </p>
          <button className="main-btn">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default ConsumeNote;
