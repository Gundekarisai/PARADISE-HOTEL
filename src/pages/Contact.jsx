import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        paddingTop: "140px",
        paddingBottom: "80px",
        color: "white"
      }}
    >
      {/* Heading */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "70px",
          padding: "0 20px"
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#facc15",
            marginBottom: "20px"
          }}
        >
          Contact Paradise
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "2"
          }}
        >
          We are always ready to help you with
          bookings, services, and luxury experiences.
          Contact Paradise Hotel anytime.
        </p>
      </div>

      {/* Contact Section */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
          padding: "0 40px"
        }}
      >
        {/* LEFT SIDE */}

        <div
          style={{
            maxWidth: "400px"
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
            alt="contact"
            style={{
              width: "100%",
              borderRadius: "20px",
              marginBottom: "25px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
            }}
          />

          <h2
            style={{
              color: "#facc15",
              marginBottom: "20px"
            }}
          >
            Contact Information
          </h2>

          <p style={infoStyle}>
            📍 Paradise Beach Resort, Goa, India
          </p>

          <p style={infoStyle}>
            📞 +91 9876543210
          </p>

          <p style={infoStyle}>
            ✉ paradisehotel@gmail.com
          </p>

          <p style={infoStyle}>
            🕒 24/7 Premium Support
          </p>
        </div>

        {/* RIGHT SIDE */}

        <form
          onSubmit={handleSubmit}
          style={{
            background: "white",
            color: "black",
            padding: "40px",
            borderRadius: "20px",
            width: "450px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
          }}
        >
          <h2
            style={{
              marginBottom: "25px",
              textAlign: "center"
            }}
          >
            Send Message
          </h2>

          <input
            type="text"
            placeholder="Enter Your Name"
            required
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            required
            style={inputStyle}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            style={inputStyle}
          />

          <textarea
            placeholder="Write Your Message"
            rows="5"
            required
            style={textareaStyle}
          ></textarea>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              background: "#facc15",
              fontWeight: "bold",
              fontSize: "18px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Send Message
          </button>

          {submitted && (
            <p
              style={{
                marginTop: "20px",
                color: "green",
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              Message Sent Successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  border: "1px solid gray",
  borderRadius: "8px",
  fontSize: "16px"
};

const textareaStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  border: "1px solid gray",
  borderRadius: "8px",
  fontSize: "16px",
  resize: "none"
};

const infoStyle = {
  marginBottom: "15px",
  fontSize: "18px",
  lineHeight: "1.8"
};

export default Contact;