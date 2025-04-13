import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [clicks, setClicks] = useState(0);
  const [scale, setScale] = useState(1);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate("/birthday");
  };

  const handleNoClick = () => {
    if (clicks >= 15) return;

    setClicks((prev) => prev + 1);
    setScale((prev) => Math.max(prev * 0.9, 0.2));
    setShake(true);

    // zakończ wibrację po 0.3s
    setTimeout(() => {
      setShake(false);
    }, 300);
  };

  return (
    <div className="home bw-theme">
      <h1 className="question">Кто лучшая сестра в мире?</h1>

      <div className="buttons-horizontal">
        <button className="cool-button yes" onClick={handleYesClick}>
        я
        </button>

        <AnimatePresence>
          {clicks < 15 && (
            <motion.button
              key="no-button"
              onClick={handleNoClick}
              className={`cool-button no ${shake ? "shake" : ""}`}
              animate={{ scale }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              не я
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
