import { useState } from "react";

import RoomCard from "../components/RoomCard";

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      title: "Luxury Suite",
      price: "$250 / Night"
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      title: "Deluxe Room",
      price: "$180 / Night"
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      title: "Premium Room",
      price: "$320 / Night"
    }
  ];

  return (
    <div
      style={{
        paddingTop: "140px",
        paddingBottom: "80px",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          marginBottom: "50px"
        }}
      >
        Our Rooms
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}
      >
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            image={room.image}
            title={room.title}
            price={room.price}
            onBook={() => setSelectedRoom(room)}
          />
        ))}
      </div>

      {/* Popup Form */}

      {selectedRoom && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000
          }}
        >
          <div
            style={{
              background: "white",
              color: "black",
              padding: "40px",
              borderRadius: "10px",
              width: "400px"
            }}
          >
            <h2
              style={{
                marginBottom: "20px"
              }}
            >
              Book {selectedRoom.title}
            </h2>

            <input
              type="text"
              placeholder="Enter Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Enter Email"
              style={inputStyle}
            />

            <input
              type="date"
              style={inputStyle}
            />

            <button
              style={{
                padding: "12px 25px",
                background: "gold",
                border: "none",
                cursor: "pointer",
                marginTop: "15px"
              }}
            >
              Confirm Booking
            </button>

            <button
              onClick={() => setSelectedRoom(null)}
              style={{
                marginLeft: "10px",
                padding: "12px 25px",
                border: "none",
                background: "black",
                color: "white",
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid gray"
};

export default Rooms;