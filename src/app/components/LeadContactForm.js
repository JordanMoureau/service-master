"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6LdthDosAAAAAMkxoKxRiIr1BSkLIfDhCowc4JTL"; // public is fine

export default function LeadContactForm() {
  const [status, setStatus] = useState("idle");
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const [pendingData, setPendingData] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    // Capture the form values now, but do NOT submit yet
    const form = e.currentTarget;
    const data = new FormData(form);

    setPendingData(data);
    setCaptchaToken(null);
    setCaptchaOpen(true);
  }

  async function submitToFormspree(token) {
    if (!pendingData) return;

    setStatus("sending");

    // IMPORTANT: Formspree expects this exact field name
    pendingData.set("g-recaptcha-response", token);

    const res = await fetch("https://formspree.io/f/manrpabl", {
      method: "POST",
      body: pendingData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      formRef.current?.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }

    // Cleanup
    setPendingData(null);
    setCaptchaToken(null);
    setCaptchaOpen(false);
    recaptchaRef.current?.reset?.();
  }

  function onCaptchaChange(token) {
    // token is the proof from Google
    setCaptchaToken(token);
  }

  async function onCaptchaContinue() {
    if (!captchaToken) return;
    await submitToFormspree(captchaToken);
  }

  function onCaptchaCancel() {
    setCaptchaOpen(false);
    setPendingData(null);
    setCaptchaToken(null);
    recaptchaRef.current?.reset?.();
  }

  return (
    <div className="lead-contact">
      <form ref={formRef} onSubmit={handleSubmit}>
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

      {/* Full-page captcha gate */}
      {captchaOpen && (
        <div className="captchaOverlay" role="dialog" aria-modal="true">
          <div className="captchaCard">
            <h2>Quick verification</h2>
            <p>Please confirm you’re not a robot before we submit.</p>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={SITE_KEY}
              onChange={onCaptchaChange}
            />

            <div className="captchaActions">
              <button type="button" onClick={onCaptchaCancel}>
                Cancel
              </button>
              <button
                type="button"
                onClick={onCaptchaContinue}
                disabled={!captchaToken || status === "sending"}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
