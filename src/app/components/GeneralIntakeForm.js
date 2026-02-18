"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Keep this as your public reCAPTCHA site key
const SITE_KEY = "6LdthDosAAAAAMkxoKxRiIr1BSkLIfDhCowc4JTL";

// Your new Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeelzpdg";

export default function GeneralIntakeForm({
  subject = "New lead (SMC site)",
  submitLabel = "Request Help",
}) {
  const [status, setStatus] = useState("idle"); // idle | captcha | sending | success | error
  const [pendingData, setPendingData] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setPendingData(data);
    setCaptchaToken(null);
    setStatus("captcha");
  }

  async function submitNow(token) {
    if (!pendingData) return;

    setStatus("sending");

    // Formspree expects this field name if you're using reCAPTCHA validation on their side
    pendingData.set("g-recaptcha-response", token);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
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
    } catch (err) {
      setStatus("error");
    } finally {
      setPendingData(null);
      setCaptchaToken(null);
      recaptchaRef.current?.reset?.();
    }
  }

  function onCaptchaChange(token) {
    setCaptchaToken(token || null);
  }

  function onCaptchaCancel() {
    setStatus("idle");
    setPendingData(null);
    setCaptchaToken(null);
    recaptchaRef.current?.reset?.();
  }

  async function onCaptchaContinue() {
    if (!captchaToken) return;
    await submitNow(captchaToken);
  }

  const isSending = status === "sending";

  return (
    <div className="lead-contact" id="lead-form">
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="hidden" name="_subject" value={subject} />
        {/* Optional honeypot */}
        <input
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
          style={{ position: "absolute", left: "-9999px" }}
          aria-hidden="true"
        />

        <label>
          <h1>What do you need help with?</h1>
          <select name="service_type" required>
            <option value="">Select one</option>
            <option value="water">Water damage</option>
            <option value="fire_smoke">Fire / smoke</option>
            <option value="mold">Mold</option>
            <option value="biohazard">Biohazard</option>
            <option value="other">Other / not sure</option>
          </select>
        </label>

        <label>
          <h1>How urgent is this?</h1>
          <select name="urgency" required>
            <option value="">Select one</option>
            <option value="emergency_now">Emergency — need help now</option>
            <option value="today">Today</option>
            <option value="1_2_days">1–2 days</option>
            <option value="not_sure">Not sure</option>
          </select>
        </label>

        <label>
          <h1>Where is the property?</h1>
          <input
            name="address"
            placeholder="Address of residence or building"
            required
          />
        </label>

        <label>
          <h1>Briefly describe what happened</h1>
          <textarea
            name="details"
            placeholder="Example: leak under sink, smoke smell, visible mold, etc."
            rows={4}
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
          <input name="email" placeholder="Email (optional)" />
        </label>

        <button type="submit" disabled={isSending}>
          <h2>{isSending ? "Sending..." : submitLabel}</h2>
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

      {status === "captcha" && (
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
                disabled={!captchaToken || isSending}
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
