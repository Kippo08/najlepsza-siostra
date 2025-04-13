import { useEffect, useRef, useState } from "react";
import cakeImg from "/cake.png";
import balloonsImg from "/balloons.png";
import giftsImg from "/gifts.png";

export default function Birthday() {
  const [opened, setOpened] = useState(false);
  const [muted, setMuted] = useState(false);
  const musicRef = useRef(null);
  const clickRef = useRef(null);

  useEffect(() => {
    if (musicRef.current && !muted) {
      musicRef.current.volume = 0.5;
      musicRef.current.play().catch(() => {});
    }
  }, [muted]);

  const handleClick = () => {
    if (clickRef.current) {
      clickRef.current.currentTime = 0;
      clickRef.current.play();
    }
    setOpened(!opened);
  };

  const toggleMute = () => {
    setMuted((prev) => !prev);
    if (musicRef.current) {
      musicRef.current.muted = !musicRef.current.muted;
    }
  };

  return (
    <div className="birthday-container pastel">
      <audio ref={musicRef} src="/birthday-music.mp3" loop />
      <audio ref={clickRef} src="/click.mp3" />

      <button className="mute-button" onClick={toggleMute}>
        {muted ? "🔈" : "🔇"}
      </button>

      <h1 className="title">🎉 С ДНЁМ ВАРЕНЬЯ ЧЕЛОВЕНИК!!! 🎉</h1>

      <div className={`card ${opened ? "open" : ""}`} onClick={handleClick}>
        {!opened ? (
          <p className="open-text">🎁 тыкни</p>
        ) : (
          <div className="wish">
            <h2>💖 ЧЕЛОВЕНИК!</h2>
            <p>
              Желаю тебе всего наилучшего! Здоровья, счастья, много путешествий и много денег. Желаю тебе чтобы ты смогла работать в удовольствие и жить так как ты хочешь. Желаю чтобы чаще были концерты в Польше и вы могли на них ходить с Ваней. Вот. Да. Люблю тебя. 
              <br /><br />
              (если что, если бесит звук, то за шариками спрятана кнопка)
            </p>
          </div>
        )}
      </div>

      <img src={cakeImg} className="decor cake" alt="Tort" />
      <img src={balloonsImg} className="decor balloons" alt="Balony" />
      <img src={giftsImg} className="decor gifts" alt="Prezenty" />
    </div>
  );
}

