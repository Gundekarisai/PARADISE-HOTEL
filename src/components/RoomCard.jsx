function RoomCard({
  image,
  title,
  price,
  onBook
}) {
  return (
    <div
      style={{
        width: "320px",
        background: "white",
        color: "black",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "20px" }}>
        <h2>{title}</h2>

        <p
          style={{
            margin: "15px 0",
            fontSize: "20px",
            color: "gray"
          }}
        >
          {price}
        </p>

        <button
          onClick={onBook}
          style={{
            padding: "12px 25px",
            border: "none",
            background: "gold",
            cursor: "pointer",
            borderRadius: "5px",
            fontWeight: "bold"
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default RoomCard;