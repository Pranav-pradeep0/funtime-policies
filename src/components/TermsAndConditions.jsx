import React from "react";

function TermsAndConditions() {
  return (
    <div className="legal-page">
      <h1>Terms and Conditions</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Toppzdynamics LLP operates the 4FunTalk App. These Terms & Conditions
          govern the use of our website, application, or any products or
          services in connection with the App/Website.
        </p>
        <p>
          This app is intended for users 18 years and older only. If you are
          under 18, you are prohibited from using the Website or its services.
        </p>
      </section>

      <section>
        <h2>Key Points</h2>
        <ul>
          <li>
            Content and trademarks remain the intellectual property of
            Toppzdynamics LLP
          </li>
          <li>
            Unauthorized copying, distribution, or modification is prohibited
          </li>
          <li>
            Hosts are third-party contract workers, not employees of
            Toppzdynamics LLP
          </li>
        </ul>
      </section>

      <section>
        <h2>Prohibited Actions</h2>
        <p>
          Users must not engage in unlawful, defamatory, or harmful behavior.
          Impersonation, sharing misleading information, or disrupting the
          platform's functionality is strictly prohibited.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These Terms & Conditions are governed by the laws of India, and any
          disputes shall be subject to the exclusive jurisdiction of the courts
          in the specified jurisdiction.
        </p>

        <p>
          For any questions about these Terms, contact us at:
          <a href="mailto:support@4funtalk.com" className="contact-link">
            {" "}
            support@4funtalk.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default TermsAndConditions;
