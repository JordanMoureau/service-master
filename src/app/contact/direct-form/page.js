// app/we-can-help/page.jsx

import LeadReviews from "../../components/LeadReviews";
import TrustStrip from "../../components/TrustStrip";
import JsonLd from "../../components/JsonLd";
import GeneralIntakeForm from "../../components/GeneralIntakeForm";

// --- SEO ---
const canonical = "https://smcfireandwater.com/we-can-help";
const phoneTel = "+15095355440";
const phonePretty = "(509) 535-5440";
const ogImage = "https://smcfireandwater.com/sub-banner.jpg";

export const metadata = {
  title:
    "Request Emergency Restoration Help | 24/7 Water, Fire & Mold Response",
  description:
    "Request immediate help from our certified restoration team. 24/7 response for water damage, fire & smoke, and mold. Call now or submit the form for fast dispatch.",
  alternates: { canonical },
  openGraph: {
    title: "Request Emergency Restoration Help | 24/7 Response",
    description:
      "Fast, professional restoration help for water damage, fire/smoke, and mold. Call now or submit the form for rapid dispatch.",
    url: canonical,
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Emergency restoration help",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Emergency Restoration Help | 24/7 Response",
    description:
      "Fast restoration help for water damage, fire/smoke, and mold. Call now or submit the form.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "Request Emergency Restoration Help",
    description:
      "Request immediate help from our certified restoration team. 24/7 response for water damage, fire & smoke, and mold.",
    isPartOf: { "@id": "https://YOURDOMAIN.com/#website" },
    about: { "@id": "https://YOURDOMAIN.com/#organization" },
    breadcrumb: { "@id": `${canonical}#breadcrumb` },
    potentialAction: [
      {
        "@type": "ContactAction",
        target: canonical,
        name: "Submit a restoration request",
      },
      {
        "@type": "CallAction",
        target: `tel:${phoneTel}`,
        name: "Call for emergency service",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://YOURDOMAIN.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Request Help",
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://YOURDOMAIN.com/#organization",
    name: "ServiceMaster by Compass",
    url: "https://YOURDOMAIN.com",
    telephone: phonePretty,
    image: "https://YOURDOMAIN.com/logo.png",
    logo: "https://YOURDOMAIN.com/logo.png",
    areaServed: [
      { "@type": "Place", name: "Spokane, WA" },
      { "@type": "Place", name: "Spokane Valley, WA" },
      { "@type": "Place", name: "Coeur d’Alene, ID" },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Water Damage Cleanup" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Fire & Smoke Restoration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mold Remediation" },
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phoneTel,
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "US",
      },
    ],
  },
];

export default function RequestHelp() {
  return (
    <div className="lead-container">
      <JsonLd data={jsonLd} />

      <div className="we-can-help">
        <div className="inner">
          <section aria-labelledby="request-help-heading">
            <h1 id="request-help-heading">
              Request Immediate Restoration Help
            </h1>

            <p className="lead">
              If you’re dealing with water damage, fire/smoke, or mold, we can
              help you stabilize the situation fast. Call now or submit the form
              and our team will respond as quickly as possible.
            </p>

            <ul className="check-list">
              <li>24/7 emergency response</li>
              <li>Clear next steps and insurance-friendly documentation</li>
              <li>Local technicians dispatched quickly</li>
            </ul>
            <h2 className="supporting">
              Prefer to talk first? Call{" "}
              <a className="underline" href={`tel:${phoneTel}`}>
                {phonePretty}
              </a>{" "}
              and we’ll walk you through what to do next.
            </h2>
          </section>
        </div>
      </div>

      <TrustStrip />

      {/* Make sure LeadContactForm has an element with id="lead-form" */}
      <GeneralIntakeForm />
      <LeadReviews />

      <div className="final-cta" aria-labelledby="final-cta">
        <h2 id="final-cta">Ready to stop the damage?</h2>
        <p>
          Our certified restoration team is on call 24/7. Don’t wait—every
          minute can increase damage and cost.
        </p>
        <div className="button-box">
          <a className="btn" href={`tel:${phoneTel}`}>
            Call Now — {phonePretty}
          </a>
          <a className="btn secondary" href="#lead-form">
            Request Immediate Help
          </a>
        </div>
      </div>
    </div>
  );
}
