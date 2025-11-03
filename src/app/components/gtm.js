"use client";

export function gtmEvent(payload) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload); // e.g. { event: "lead_submit", source: "contact_form" }
}
