function ServiceCard({
  image,
  title,
  description,
  onExplore
}) {
  return (
    <div
      style={{
        background: "white",
        color: "black",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 5px 20px rgba(0,0,0,0.4)"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "25px" }}>
        <h2>{title}</h2>

        <p
          style={{
            color: "gray",
            lineHeight: "1.7",
            marginTop: "15px"
          }}
        >
          {description}
        </p>

        <button
          onClick={onExplore}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            border: "none",
            background: "#facc15",
            fontWeight: "bold",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Explore
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;