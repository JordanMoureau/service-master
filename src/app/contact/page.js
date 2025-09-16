"use client";

import ServiceAreaMap from "../components/ServiceAreaMap";
// imports
import { NextSeo } from "next-seo";
import JsonLd from "../components/JsonLd";

// --- SEO + JSON-LD ---
const canonical = "https://smcfireandwater.com/contact";
const title =
  "Contact ServiceMaster by Compass | Spokane & Coeur d’Alene Restoration";
const description =
  "Contact our 24/7 restoration team for water damage cleanup, fire & smoke restoration, and mold removal in Spokane, Spokane Valley & Coeur d’Alene. Fast help starts here.";

const seo = {
  title,
  description,
  canonical,
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "water damage clean up Spokane Valley WA, fire damage restoration Spokane WA, mold remediation and removal Spokane WA, mold removal services Coeur d’Alene ID, mold abatement service Coeur d’Alene ID, emergency flood cleanup Coeur d’Alene ID, fire damage restoration companies Spokane WA, fire damage restoration service near me Spokane, restoration mold removal CDA Idaho, contact ServiceMaster Spokane",
    },
  ],
  openGraph: {
    url: canonical,
    siteName: "ServiceMaster by Compass",
    type: "website",
    title:
      "Contact ServiceMaster by Compass — 24/7 Water, Fire & Mold Help | Spokane & Coeur d’Alene",
    description,
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ServiceMaster by Compass",
      },
    ],
  },
  twitter: { cardType: "summary_large_image" },
  robotsProps: {
    nosnippet: false,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};

// JSON-LD
const jsonLd = [
  // Contact page entity
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://smcfireandwater.com/contact#webpage",
    url: canonical,
    name: "Contact ServiceMaster by Compass",
    description: description,
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    about: { "@id": "https://smcfireandwater.com/#organization" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/sub-banner.jpg",
      width: 1200,
      height: 630,
    },
    breadcrumb: { "@id": "https://smcfireandwater.com/contact#breadcrumb" },
    potentialAction: [
      {
        "@type": "ContactAction",
        target: "https://smcfireandwater.com/contact",
        name: "Submit contact request",
      },
      {
        "@type": "CallAction",
        target: "tel:+15096467488",
        name: "Call for emergency service",
      },
    ],
  },
  // Breadcrumbs
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://smcfireandwater.com/contact#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smcfireandwater.com/",
      },
      { "@type": "ListItem", position: 2, name: "Contact", item: canonical },
    ],
  },
  // Business / service info for rich results
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://smcfireandwater.com/#organization",
    name: "ServiceMaster by Compass",
    url: "https://smcfireandwater.com",
    image: "https://smcfireandwater.com/logo.png",
    logo: "https://smcfireandwater.com/logo.png",
    telephone: "+1-509-646-7488",
    sameAs: [
      "https://www.youtube.com/channel/UCxhfBr5uexZ5FxWWnOtHEkQ",
      "https://www.facebook.com/p/ServiceMaster-by-Compass-100063756032122/",
      "https://www.linkedin.com/company/servicemaster-fire-water-restoration-by-compass",
      "https://www.instagram.com/servicemaster_by_compass",
      "https://g.co/kgs/PCuFHgp",
      "https://yelp.com/biz/servicemaster-fire-and-water-restoration-by-compass-spokane",
    ],
    areaServed: [
      { "@type": "Place", name: "Spokane, WA" },
      { "@type": "Place", name: "Spokane Valley, WA" },
      { "@type": "Place", name: "Coeur d’Alene, ID" },
    ],
    // Primary services to reinforce relevance
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Water Damage Clean Up" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Fire Damage Restoration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mold Remediation & Removal" },
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-509-646-7488",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
  },
];

export default function Contact() {
  return (
    <div>
      <NextSeo {...seo} />
      <JsonLd data={jsonLd} />
      <section className="contact-page">
        <div className="inner">
          <div className="contact-header">
            <h1>
              Contact Our Spokane &amp; Coeur d'Alene Restoration Professionals
            </h1>
          </div>

          <div className="row">
            <header>
              <h2>Find out how we can help</h2>
              <h3>We're Ready To Answer Your Questions.</h3>
            </header>

            <div className="form">
              <form>
                <ul className="form-list">
                  <li class="half">
                    <div class="input-text">
                      <label>First Name*</label>
                      <input type="text" required class="ui-cms-input" />
                    </div>
                  </li>

                  <li class="half">
                    <div class="input-text">
                      <label>Last Name*</label>
                      <input type="text" required class="ui-cms-input" />
                    </div>
                  </li>

                  <li class="half">
                    <div class="input-text">
                      <label>Phone*</label>
                      <input
                        type="tel"
                        required
                        pattern="[(]\d{3}[)]\s\d{3}-\d{4}"
                        class="ui-cms-input"
                      />
                    </div>
                  </li>

                  <li class="half">
                    <div class="input-text">
                      <label>Email*</label>
                      <input type="email" required class="ui-cms-input" />
                    </div>
                  </li>

                  <li class="full">
                    <div class="input-text">
                      <label>Company Name</label>
                      <input type="text" class="ui-cms-input" />
                    </div>
                  </li>

                  <li class="half">
                    <div class="input-text">
                      <label>Street Address*</label>
                      <input type="text" required class="ui-cms-input" />
                    </div>
                  </li>

                  <li class="fourth">
                    <div class="input-text">
                      <label>Apt/Unit Number</label>
                      <input type="text" class="ui-cms-input" />
                    </div>
                  </li>

                  <li class="fourth">
                    <div class="input-text">
                      <label>Zip Code*</label>
                      <input type="text" required class="ui-cms-input" />
                    </div>
                  </li>

                  <li className="third">
                    <div className="input-text">
                      <label htmlFor="ServiceNeeded">Service Needed*</label>
                      <select id="ServiceNeeded" required className="">
                        <option value=""></option>
                        <option value="Water">Water</option>
                        <option value="Fire">Fire</option>
                        <option value="Smoke">Smoke</option>
                        <option value="Mold">Mold</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </li>
                  <li class="third">
                    <div class="input-text">
                      <label>Square Footage Affected*</label>
                      <input type="number" required class="ui-cms-input" />
                    </div>
                  </li>

                  <li className="third select">
                    <div className="input-text">
                      <label>Have you contacted an insurer?*</label>
                      <select required className="ui-cms-select ui-cms-input">
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
                        required
                        className="ui-cms-input"
                        name="LocalContactSystemV1Form$ITM0$Message"
                      ></textarea>
                    </div>
                  </li>
                </ul>
                <p className="contact-disclaimer">
                  By clicking 'Submit', I give ServiceMaster Restore &amp; its
                  franchisees consent to call/text me at my phone number above
                  about my request and other offers (including via automated
                  technology) and to send me marketing and/or promotional
                  messages. Opt out anytime by replying to us with “STOP.”
                  Message and data rates may apply. I understand that the
                  information I submit may be recorded. Please refer to our{" "}
                  <a
                    href="https://www.servicemaster.com/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>{" "}
                  for your other rights.
                </p>
                <div className="req">*required field</div>
                <input type="hidden" />
                <div className="button-contact">
                  <button className="btn" type="submit">
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ServiceAreaMap />
    </div>
  );
}
