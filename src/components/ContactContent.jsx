const ContactContent = () => {
  return (
    <div
      style={{
        padding: "10px 20px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f7f7f7",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px 30px",
          borderRadius: "12px",
          maxWidth: "650px",
          width: "100%",

          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            fontSize: "30px",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Contact Us
        </h2>

        <p style={{ fontSize: "17px", marginBottom: "15px", color: "#555" }}>
          If you have any questions, feel free to reach out to us at:
          <br />
          <span style={{ fontWeight: "bold", color: "#0d6efd" }}>
            dammarbhatt111@gmail.com
          </span>
        </p>

        <p style={{ fontSize: "17px", marginBottom: "10px", color: "#555" }}>
          Mobile:{" "}
          <span style={{ fontWeight: "bold", color: "#222" }}>9805752792</span>
        </p>

        <p style={{ fontSize: "17px", marginBottom: "10px", color: "#555" }}>
          Address:{" "}
          <span style={{ fontWeight: "bold", color: "#222" }}>
            Bedkot 03, Bhamka, Nepal
          </span>
        </p>

        <p style={{ marginTop: "20px", fontSize: "17px", color: "#444" }}>
          We look forward to hearing from you and assisting you with your needs!
        </p>

        <hr
          style={{
            margin: "25px 0",
            border: "none",
            borderTop: "1px solid #ddd",
          }}
        />

        <p style={{ fontSize: "16px", color: "#333", marginBottom: "8px" }}>
          Thank you for choosing{" "}
          <span style={{ fontWeight: "bold", color: "#0d6efd" }}>Ecloth</span> —
          Your Trusted Clothing Store!
        </p>

        <p style={{ fontSize: "16px", color: "#555", marginBottom: "8px" }}>
          Working Hours:{" "}
          <span style={{ fontWeight: "bold", color: "#222" }}>
            Mon–Sat, 9:00 AM - 6:00 PM
          </span>{" "}
          (Closed on Sundays)
        </p>

        <p style={{ fontSize: "16px", marginTop: "15px", color: "#333" }}>
          Follow us on Social Media:
        </p>

        <div style={{ marginTop: "10px", fontSize: "18px", fontWeight: "600" }}>
          <span
            style={{ margin: "0 10px", color: "#1877F2", cursor: "pointer" }}
          >
            Facebook
          </span>
          |
          <span
            style={{ margin: "0 10px", color: "#E4405F", cursor: "pointer" }}
          >
            Instagram
          </span>
          |
          <span
            style={{ margin: "0 10px", color: "#1DA1F2", cursor: "pointer" }}
          >
            Twitter
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
