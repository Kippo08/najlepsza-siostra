import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleYes = () => {
    navigate("/birthday");
  };

  const handleNo = () => {
    setClicked(true);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="question">Кто лучшая сестра на свете?</h1>
        <div className="choice-buttons">
          <button className="btn" onClick={handleYes}>
            Я
          </button>
          <button
            className={`btn ${clicked ? "shake" : ""}`}
            onClick={handleNo}
            style={clicked ? { transform: "scale(0.85)" } : {}}
          >
            Не я
          </button>
        </div>
      </div>
    </div>
  );
}
