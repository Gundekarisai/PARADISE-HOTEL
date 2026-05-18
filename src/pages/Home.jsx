import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />

      <section
        style={{
          padding: "80px 20px",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "20px"
          }}
        >
          Paradise Hotel
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            fontSize: "1.2rem",
            lineHeight: "2"
          }}
        >
          Experience world-class luxury and unforgettable hospitality
          at Paradise Hotel. Enjoy premium rooms, beautiful views,
          delicious dining, and exceptional comfort.
        </p>
      </section>
    </div>
  );
}

export default Home;