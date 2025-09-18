"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xzzanzav", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul className="form-list">
        <li className="half">
          <div className="input-text">
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              required
              className="ui-cms-input"
            />
          </div>
        </li>

        <li className="half">
          <div className="input-text">
            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              required
              className="ui-cms-input"
            />
          </div>
        </li>

        <li className="half">
          <div className="input-text">
            <label>Phone*</label>
            <input
              type="tel"
              name="phone"
              required
              pattern="[(]\d{3}[)]\s\d{3}-\d{4}"
              className="ui-cms-input"
            />
          </div>
        </li>

        <li className="half">
          <div className="input-text">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              required
              className="ui-cms-input"
            />
          </div>
        </li>

        <li className="full">
          <div className="input-text">
            <label>Company Name</label>
            <input type="text" name="company" className="ui-cms-input" />
          </div>
        </li>

        <li className="half">
          <div className="input-text">
            <label>Street Address*</label>
            <input
              type="text"
              name="streetAddress"
              required
              className="ui-cms-input"
            />
          </div>
        </li>

        <li className="fourth">
          <div className="input-text">
            <label>Apt/Unit Number</label>
            <input type="text" name="unit" className="ui-cms-input" />
          </div>
        </li>

        <li className="fourth">
          <div className="input-text">
            <label>Zip Code*</label>
            <input type="text" name="zip" required className="ui-cms-input" />
          </div>
        </li>

        <li className="third">
          <div className="input-text">
            <label htmlFor="ServiceNeeded">Service Needed*</label>
            <select id="ServiceNeeded" name="serviceNeeded" required>
              <option value=""></option>
              <option value="Water">Water</option>
              <option value="Fire">Fire</option>
              <option value="Smoke">Smoke</option>
              <option value="Mold">Mold</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </li>

        <li className="third">
          <div className="input-text">
            <label>Square Footage Affected*</label>
            <input
              type="number"
              name="squareFootage"
              required
              className="ui-cms-input"
            />
          </div>
        </li>

        <li className="third select">
          <div className="input-text">
            <label>Have you contacted an insurer?*</label>
            <select
              name="insurerContacted"
              required
              className="ui-cms-select ui-cms-input"
            >
              <option value=""></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </li>

        <li className="full">
          <div className="input-text">
            <label htmlFor="Message">Message*</label>
            <textarea
              id="Message"
              name="message"
              required
              className="ui-cms-input"
            ></textarea>
          </div>
        </li>
      </ul>

      <p className="contact-disclaimer">
        By clicking 'Submit', I give ServiceMaster Restore &amp; its franchisees
        consent to call/text me at my phone number above about my request and
        other offers...
      </p>

      <div className="req">*required field</div>
      <input type="hidden" name="_subject" value="SMC Website Contact" />

      <div className="button-contact">
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Get Started"}
        </button>
      </div>

      {/* {status === "success" && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          Thanks! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p style={{ marginTop: "1rem", color: "red" }}>
          Something went wrong. Please try again.
        </p>
      )} */}
    </form>
  );
}
