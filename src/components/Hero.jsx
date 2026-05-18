import "./Hero.css";

import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source
          src="/videos/hotel.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay">
        <h1>Welcome To Paradise</h1>

        <p>Luxury • Comfort • Elegance</p>

        <button onClick={() => navigate("/rooms")}>
          Book Your Stay
        </button>
      </div>

    </div>
  );
}

export default Hero;