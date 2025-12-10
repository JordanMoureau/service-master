"use client";

import { useState } from "react";

export default function LeadContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/manrpabl", {
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
    <div className="lead-contact">
      <form onSubmit={handleSubmit}>
        {/* subject line in the email you get */}
        <input
          type="hidden"
          name="_subject"
          value="New water damage lead (SMC site)"
        />

        <label>
          <h1>How long has water been leaking?</h1>
          <select name="leak_duration" required>
            <option value="">Select one</option>
            <option value="<1hr">Less than 1 hour</option>
            <option value="1-6hr">1–6 hours</option>
            <option value="6-24hr">6–24 hours</option>
            <option value="1-3d">1–3 days</option>
            <option value=">3d">Over 3 days</option>
            <option value="unknown">Not sure</option>
          </select>
        </label>

        <label>
          <h1>Has property been damaged?</h1>
          <select name="property_damage" required>
            <option value="">Select one</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <label>
          <h1>Is a professional on the way already?</h1>
          <select name="pro_on_way" required>
            <option value="">Select one</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <label>
          <h1>At what address is the water damage occurring?</h1>
          <input
            name="address"
            placeholder="Address of residence or building"
            required
          />
        </label>

        <label>
          <h1>How do we reach you?</h1>
          <div className="input-spacer">
            <input
              className="half"
              name="first_name"
              placeholder="First Name"
              required
            />
            <input
              className="half"
              name="last_name"
              placeholder="Last Name"
              required
            />
          </div>
          <input name="phone" placeholder="Phone Number" required />
        </label>

        <button type="submit" disabled={status === "sending"}>
          <h2>{status === "sending" ? "Sending..." : "We're On Our Way"}</h2>
        </button>

        {status === "success" && (
          <p className="form-success">Thanks! We’ve received your info.</p>
        )}
        {status === "error" && (
          <p className="form-error">
            Something went wrong. Please call us directly.
          </p>
        )}
      </form>
    </div>
  );
}
