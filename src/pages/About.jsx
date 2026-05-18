function About() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        paddingTop: "140px",
        paddingBottom: "80px"
      }}
    >
      {/* HERO SECTION */}

      <div
        style={{
          textAlign: "center",
          padding: "0 20px",
          marginBottom: "100px",
          animation: "fadeIn 1.5s ease"
        }}
      >
        <h1
          style={{
            fontSize: "65px",
            color: "#facc15",
            marginBottom: "25px"
          }}
        >
          About Paradise
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            fontSize: "21px",
            lineHeight: "2"
          }}
        >
          Paradise Hotel is a symbol of luxury,
          elegance, and unforgettable experiences.
          We provide world-class hospitality,
          breathtaking views, premium services,
          and modern comfort designed for travelers
          seeking excellence and relaxation.
        </p>
      </div>

      {/* SECTION 1 */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
          padding: "0 60px",
          marginBottom: "100px"
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          alt="hotel"
          style={{
            width: "420px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            animation: "slideLeft 1.5s ease"
          }}
        />

        <div
          style={{
            maxWidth: "550px",
            animation: "slideRight 1.5s ease"
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "20px",
              color: "#facc15"
            }}
          >
            Luxury Redefined
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "2"
            }}
          >
            Every room at Paradise Hotel is
            designed with premium interiors,
            elegant furniture, and exceptional
            comfort to provide a luxury living
            experience for our guests.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap-reverse",
          padding: "0 60px",
          marginBottom: "100px"
        }}
      >
        <div
          style={{
            maxWidth: "550px",
            animation: "slideLeft 1.5s ease"
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "20px",
              color: "#facc15"
            }}
          >
            Beautiful Destinations
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "2"
            }}
          >
            Enjoy beautiful beaches, peaceful
            sunsets, relaxing infinity pools,
            premium spas, and unforgettable
            moments surrounded by nature and
            elegance.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="beach"
          style={{
            width: "420px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            animation: "slideRight 1.5s ease"
          }}
        />
      </div>

      {/* STATS SECTION */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          padding: "0 30px",
          marginBottom: "100px"
        }}
      >
        <div style={cardStyle}>
          <h1 style={numberStyle}>15+</h1>
          <p>Years of Excellence</p>
        </div>

        <div style={cardStyle}>
          <h1 style={numberStyle}>500+</h1>
          <p>Luxury Rooms</p>
        </div>

        <div style={cardStyle}>
          <h1 style={numberStyle}>10K+</h1>
          <p>Happy Guests</p>
        </div>

        <div style={cardStyle}>
          <h1 style={numberStyle}>24/7</h1>
          <p>Premium Support</p>
        </div>
      </div>

      {/* FINAL SECTION */}

      <div
        style={{
          textAlign: "center",
          padding: "0 20px",
          animation: "fadeIn 2s ease"
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "25px",
            color: "#facc15"
          }}
        >
          Experience Paradise
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            fontSize: "20px",
            lineHeight: "2"
          }}
        >
          Paradise Hotel combines luxury,
          comfort, and unforgettable hospitality
          to create a world-class experience
          for every guest. Whether you're
          traveling for relaxation, adventure,
          or business, Paradise offers the
          perfect destination for your stay.
        </p>
      </div>

      {/* ANIMATIONS */}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(40px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}

const cardStyle = {
  background: "white",
  color: "black",
  width: "240px",
  padding: "35px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
};

const numberStyle = {
  color: "#facc15",
  fontSize: "50px",
  marginBottom: "10px"
};

export default About;