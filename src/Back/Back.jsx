import "./Back.css";
import { IoIosArrowUp } from "react-icons/io";

const Back = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="back">
      <div className="top-btn" onClick={goToBtn}>
        <IoIosArrowUp className="top-btn--icon"/>
      </div>
    </div>
  );
};

export default Back;
