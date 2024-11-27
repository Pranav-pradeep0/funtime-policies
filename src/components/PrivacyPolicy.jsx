import React from "react";

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Toppzdynamics LLP ("we," "us," or "our") values your privacy. This
          Privacy Policy outlines the types of information we collect, how we
          use and protect that information, and your rights regarding your
          personal data.
        </p>
        <p>
          This application is intended solely for users who are 18 years of age
          or older. If you are under 18, you are not permitted to use this
          application or its services.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <h3>Personal Information</h3>
        <ul>
          <li>
            Contact Information: Name, email address, phone number, payment
            details
          </li>
          <li>
            Account Information: Username, password, and other credentials
          </li>
        </ul>

        <h3>Usage Data</h3>
        <ul>
          <li>
            Website Interactions: IP addresses, browser types, access times
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For any questions about our Privacy Policy, contact us at:
          <a href="mailto:support@4funtalk.com" className="contact-link">
            {" "}
            support@4funtalk.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
