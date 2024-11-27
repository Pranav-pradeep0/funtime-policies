import React from "react";

function TermsAndConditions() {
  return (
    <div className="legal-page">
      <h1>Terms and Conditions</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Toppzdynamics LLP ("we," "us," or "our") operates the 4FunTalk
          ("App"). These Terms & Conditions ("Terms") govern the use of our
          website, application, or any products or services in connection with
          the App/Website.
        </p>
        <p>
          These Terms constitute an electronic record in accordance with the
          provisions of the Information Technology Act, 2000, and the
          Information Technology (Intermediaries guidelines) Rules, 2021, as
          amended from time to time.
        </p>
        <p>
          Your use/access/browsing of the Website or its services or products or
          registration (with or without payment/with or without subscription)
          through any means shall signify your acceptance of the Terms and your
          agreement to be legally bound by the same.
        </p>
        <p>
          This app is intended for users 18 years and older only. If you are
          under 18, you are prohibited from using the Website or its services.
        </p>
        <p>
          Note: The hosts in the 4FunTalk app are third-party contract workers
          and are not employees of Toppzdynamics LLP.
        </p>
      </section>

      <section>
        <h2>Ownership and Usage Restrictions</h2>
        <p>
          The content, trademarks, logos, and other materials on the Website
          remain the intellectual property of Toppzdynamics LLP or respective
          third parties. Any unauthorized copying, distribution, or modification
          is prohibited.
        </p>
      </section>

      <section>
        <h2>Prohibited Actions and User Responsibility</h2>
        <p>
          Users must not engage in any unlawful, defamatory, or harmful
          behavior. Specifically prohibited actions include:
        </p>
        <ul>
          <li>Impersonation</li>
          <li>Sharing misleading information</li>
          <li>Disrupting the platform's functionality</li>
        </ul>
      </section>

      <section>
        <h2>Modifications</h2>
        <p>
          Toppzdynamics LLP reserves the right to modify these Terms at any
          time. Continued use of the Website constitutes acceptance of such
          changes.
        </p>
      </section>

      <section>
        <h2>Governing Law and Jurisdiction</h2>
        <p>
          These Terms & Conditions are governed by the laws of India, and any
          disputes shall be subject to the exclusive jurisdiction of the courts
          in the specified jurisdiction.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
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
