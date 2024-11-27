import React from "react";

function RefundPolicy() {
  return (
    <div className="legal-page">
      <h1>Refund Policy</h1>

      <section>
        <h2>Recharge and Coin Usage</h2>
        <ul>
          <li>Coins are non-refundable once purchased</li>
          <li>Coins can be utilized for services within the app</li>
        </ul>
      </section>

      <section>
        <h2>Technical Errors</h2>
        <p>
          In case of payment gateway errors (e.g., multiple charges), users can
          contact support. Valid claims will be processed within 7 working days.
        </p>
      </section>

      <section>
        <h2>Transaction Finality</h2>
        <ul>
          <li>Refunds are only provided for acknowledged technical errors</li>
          <li>
            Users are encouraged to fully utilize purchased coins before closing
            their account
          </li>
        </ul>

        <p>
          For refund queries, email:
          <a href="mailto:support@4funtalk.com" className="contact-link">
            {" "}
            support@4funtalk.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default RefundPolicy;
