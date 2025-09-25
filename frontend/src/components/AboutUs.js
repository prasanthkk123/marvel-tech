import React from "react";

export default function AboutUs() {
  return (
    <section
      id="about"
      style={{
        padding: "50px",
        background: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>About Us</h2>
      <p style={{ fontSize: "16px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
        Marvel Tech is a leading service provider in CNC Machine Repair,
        Reconditioning, and Spare Parts Solutions in Coimbatore.
        <br /><br />
        We are committed to delivering high-quality service with timely
        delivery. Our expertise spans across CNC machine components such
        as servo drives, encoders, lubrication units, batteries, connectors,fans,
        and more.  
        <br /><br />
        With years of experience and a dedicated team, we ensure that
        customers receive the best possible support for their CNC
        machinery — from repairs to complete reconditioning.
        <br /><br />
        Contact us today to learn more about our services and how we can
        assist with your CNC machine needs.
        <br /><br />
        We are well Specialized in Fanuc, Siemens, Mitsubishi, Delta,
        Schneider Electric, and other CNC systems.
      </p>
    </section>
  );
}
