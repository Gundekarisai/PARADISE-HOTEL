function Gallery() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",

    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",

    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",

    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",

    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",

    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
  ];

  return (
    <div
      style={{
        paddingTop: "140px",
        paddingBottom: "80px",
        paddingLeft: "40px",
        paddingRight: "40px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          marginBottom: "60px",
          color: "#facc15"
        }}
      >
        Paradise Gallery
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px"
        }}
      >
        {galleryImages.map((image, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: "15px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.4)"
            }}
          >
            <img
              src={image}
              alt="gallery"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                transition: "0.5s",
                cursor: "pointer"
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;