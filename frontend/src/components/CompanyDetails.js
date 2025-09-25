import React from "react";

export default function CompanyDetails() {
  return (
    <section id="company-details" style={{ padding: "50px 0", background: "#f1f6fa" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px", textAlign: "center" }}>Our Company Details</h2>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: '100vw',
        minHeight: '350px',
        gap: '40px',
        margin: '0',
        flexWrap: 'wrap',
        boxSizing: 'border-box'
      }}>
  <div style={{ flex: '0 0 420px', minWidth: '320px', maxWidth: '500px', marginLeft: '2cm' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.612290034326!2d77.046627!3d11.051933099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8571443aec02f%3A0x6318414e9b863367!2sMarvel%20tech%20(CNC%20Machine%20Spares%20)!5e1!3m2!1sen!2sin!4v1757400036998!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '10px', width: '100%', minWidth: '250px', maxWidth: '500px', display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Marvel Tech Location"
          ></iframe>
        </div>
        <div style={{ flex: '1 1 350px', minWidth: '300px', maxWidth: '700px', fontSize: '16px', lineHeight: 1.7, marginLeft: 'auto' }}>
          <p><strong>Company Name:</strong> Marvel Tech</p>
          <p><strong>Address:</strong> 7, Duraisamy Nagar, Civil Aerodrome Post, Coimbatore - 641014</p>
          <p><strong>Phone:</strong> +91 72000 14379  +91 97158 14379</p>
          <p><strong>Email:</strong> marveltech.cbe0270@gmail.com</p>
          <p><strong>GSTIN:</strong> 33GBJPS7931C1ZH</p>
          <p><strong>Specialization:</strong> CNC Machine Repair, Reconditioning, Spare Parts, Fanuc, Siemens, Mitsubishi, Delta, Schneider Electric, and more.</p>
          <p><strong>Reach Out Our Sales Team for more information.</strong></p>
          <p>Phone : +91 97158 14379<br />Email : marveltech.cbe0270@gmail.com</p>
          <p><strong>A Verified Supplier by India Mart</strong></p>
        </div>
      </div>
    </section>
  );
}
