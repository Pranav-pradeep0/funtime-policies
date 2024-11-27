import React from "react";

function RefundPolicy() {
  return (
    <div className="legal-page">
      <h1>Refund Policy</h1>

      <section>
        <h2>Recharge and Coin Usage</h2>
        <ul>
          <li>Coins are non-refundable once purchased</li>
          <li>Users can utilize their coins for services within the app</li>
        </ul>
      </section>

      <section>
        <h2>Technical Errors</h2>
        <p>
          In case of payment gateway errors (e.g., multiple charges), users can
          contact support at support@4funtalk.com. Valid claims will be
          processed within 7 working days.
        </p>
      </section>

      <section>
        <h2>Finality of Transactions</h2>
        <ul>
          <li>
            Refunds are only provided for acknowledged technical errors, not for
            user-initiated actions
          </li>
          <li>
            Users are encouraged to fully utilize their purchased coins before
            deciding to close their account
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>
          For queries related to refunds, email us at:
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
