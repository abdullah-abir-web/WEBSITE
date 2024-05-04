import "./Back.css";
import { FaArrowUp } from "react-icons/fa";

const Back = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="back">
      <div className="top-btn" onClick={goToBtn}>
        <FaArrowUp className="top-btn--icon" />
      </div>
    </div>
  );
};

export default Back;
