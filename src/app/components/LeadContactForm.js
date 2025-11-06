"use client";

import { useState } from "react";

export default function LeadContactForm() {
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
    <div className="lead-contact">
      <form onSubmit={handleSubmit}>
        <label>
          <h1>How long has water been leaking?</h1>
          <select name="duration" required>
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
          <select name="duration" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label>
          <h1>Is a professional on the way already?</h1>
          <select name="duration" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <label>
          <h1>at what Address is the water damage occuring?</h1>
          <input placeholder="Address of Residence or Building"></input>
        </label>

        <label>
          <h1>How do we reach you?</h1>
          <div className="input-spacer">
            <input className="half" placeholder="First Name"></input>
            <input className="half" placeholder="Last Name"></input>
          </div>
          <input placeholder="Phone Number"></input>
        </label>

        <button type="submit">
          <h2>We're On Our Way</h2>
        </button>
      </form>
    </div>
  );
}
