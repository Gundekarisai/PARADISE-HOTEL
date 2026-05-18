import { useState } from "react";

import ServiceCard from "../components/ServiceCard";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Luxury Rooms",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      description:
        "Experience world-class luxury rooms with premium comfort."
    },

    {
      id: 2,
      title: "Infinity Pool",
      image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
      description:
        "Relax in our infinity pool with breathtaking ocean views."
    },

    {
      id: 3,
      title: "Luxury Spa",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
      description:
        "Refresh your body and mind with relaxing spa treatments."
    },

    {
      id: 4,
      title: "Premium Dining",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      description:
        "Enjoy premium dining prepared by world-class chefs."
    }
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
        Premium Services
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "35px"
        }}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            onExplore={() =>
              setSelectedService(service)
            }
          />
        ))}
      </div>

      {/* Popup */}

      {selectedService && (
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
              borderRadius: "15px",
              width: "400px"
            }}
          >
            <h2
              style={{
                marginBottom: "25px"
              }}
            >
              Book {selectedService.title}
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
                border: "none",
                background: "#facc15",
                fontWeight: "bold",
                cursor: "pointer",
                borderRadius: "6px"
              }}
            >
              Confirm Booking
            </button>

            <button
              onClick={() =>
                setSelectedService(null)
              }
              style={{
                marginLeft: "10px",
                padding: "12px 25px",
                border: "none",
                background: "black",
                color: "white",
                cursor: "pointer",
                borderRadius: "6px"
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
  border: "1px solid gray",
  borderRadius: "5px"
};

export default Services;