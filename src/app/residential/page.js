import SideBarBox from "../components/SideBarBox";
import UncertainTo from "../components/UncertaintyTo";

import RestorePeace from "../components/RestoringPeace";
// imports

import JsonLd from "../components/JsonLd";

// --- SEO + JSON-LD ---
const canonical = "https://smcfireandwater.com/residential";
const title =
  "Residential Restoration Services | Spokane WA & Coeur d’Alene ID | Water, Fire & Mold";
const description =
  "Top-rated residential restoration in Spokane, Spokane Valley & Coeur d’Alene: water damage cleanup, fire & smoke restoration, mold remediation, odor removal, storm damage & specialty services. 24/7 response.";

// app/residential/page.tsx

export const metadata = {
  title:
    "Residential Restoration Services | Spokane WA & Coeur d’Alene ID | Water, Fire & Mold",
  description:
    "Top-rated residential restoration in Spokane, Spokane Valley & Coeur d’Alene: water damage cleanup, fire & smoke restoration, mold remediation, odor removal, storm damage & specialty services. 24/7 response.",
  keywords: [
    "water damage clean up Spokane Valley WA",
    "fire damage restoration Spokane WA",
    "mold remediation and removal Spokane WA",
    "mold removal services Coeur d’Alene ID",
    "mold abatement service Coeur d’Alene ID",
    "emergency flood cleanup Coeur d’Alene ID",
    "fire damage restoration service near me Spokane",
    "restoration mold removal CDA Idaho",
    "fire damage restoration companies Spokane WA",
  ],
  alternates: { canonical: "https://smcfireandwater.com/residential" },
  openGraph: {
    title:
      "Residential Restoration — Water, Fire & Mold | Spokane & Coeur d’Alene",
    description:
      "24/7 residential restoration: water removal & drying, fire & smoke cleanup, mold remediation, odor & storm damage.",
    url: "https://smcfireandwater.com/residential",
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Residential restoration services in Spokane & Coeur d’Alene",
      },
    ],
    locale: "en_US",
    type: "website",
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
  twitter: {
    card: "summary_large_image",
    title:
      "Residential Restoration Services | Spokane WA & Coeur d’Alene ID | Water, Fire & Mold",
    description:
      "Trusted 24/7 residential restoration for water, fire & mold in Spokane, Spokane Valley & Coeur d’Alene.",
    images: ["https://smcfireandwater.com/sub-banner.jpg"],
  },
};

// JSON-LD
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://smcfireandwater.com/#organization",
    name: "ServiceMaster by Compass",
    url: "https://smcfireandwater.com",
    logo: "https://smcfireandwater.com/logo.png",
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
    knowsAbout: [
      "water damage clean up Spokane Valley WA",
      "fire damage restoration Spokane WA",
      "mold remediation and removal Spokane WA",
      "mold removal services Coeur d’Alene ID",
      "mold abatement service Coeur d’Alene ID",
      "emergency flood cleanup Coeur d’Alene ID",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://smcfireandwater.com/residential#webpage",
    url: canonical,
    name: "Residential Restoration Services",
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    description: description,
    breadcrumb: { "@id": "https://smcfireandwater.com/residential#breadcrumb" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://smcfireandwater.com/residential#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smcfireandwater.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Residential",
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://smcfireandwater.com/residential/water-damage",
        name: "Water Damage Mitigation",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://smcfireandwater.com/residential/fire-and-smoke",
        name: "Fire & Smoke Damage Restoration",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://smcfireandwater.com/residential/mold",
        name: "Mold Remediation Services",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://smcfireandwater.com/residential/odor",
        name: "Odor Removal Services",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://smcfireandwater.com/residential/weather",
        name: "Weather / Storm Damage Restoration",
      },
      {
        "@type": "ListItem",
        position: 6,
        url: "https://smcfireandwater.com/residential/specialty-services",
        name: "Specialty Restoration Services",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Residential Restoration",
    provider: { "@id": "https://smcfireandwater.com/#organization" },
    areaServed: ["Spokane WA", "Spokane Valley WA", "Coeur d’Alene ID"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential Services",
      itemListElement: [
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
          itemOffered: {
            "@type": "Service",
            name: "Mold Remediation & Removal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Odor Removal" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Storm / Weather Damage" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Specialty Restoration" },
        },
      ],
    },
  },
  // FAQ schema mirrors the on-page Q&A
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you ensure the quality of your restoration services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We employ trained professionals, follow industry standards, price transparently, and maintain a customer-first approach to ensure accurate, on-time project completion.",
        },
      },
      {
        "@type": "Question",
        name: "Can you handle multiple types of damage at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can combine services—such as fire, water, and mold—to deliver a comprehensive plan that restores your home efficiently.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can you respond to a restoration emergency in Spokane & Coeur d’Alene?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer 24/7/365 emergency response for Spokane, Spokane Valley, and Coeur d’Alene to help you recover as quickly as possible.",
        },
      },
    ],
  },
];

const Links = [
  "/residential/fire-and-smoke",
  "/residential/mold",
  "/residential/odor",
  "/residential/specialty-services",
  "/residential/water-damage",
  "/residential/weather",
];

const List = [
  "Fire And Smoke",
  "Mold Damage",
  "Odor Removal",
  "Specialty Services",
  "Water Damage",
  "Weather",
];

export default function Residential() {
  return (
    <div>
      <JsonLd data={jsonLd} />
      <div className="top-image">
        <img src="/sub-banner.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Top Residential Restoration Services in Spokane, WA</h1>
            <p>
              Your home is an investment that you’ve spent thousands, even
              millions, of dollars on making your own. So, when a fire,
              inclement weather, or mold damage destroys your dream property,
              you need professionals who understand that this isn’t just about
              aesthetics or functionality. It’s your family’s health and
              well-being at risk.
            </p>

            <p>
              Our team at{" "}
              <a href="/" className="underline-link">
                ServiceMaster by Compass
              </a>{" "}
              wants to work with you to recover the things you hold dear. With
              our restoration services in Spokane & Coeur d'Alene, you have
              access to comprehensive solutions that help get your home back to
              its pre-damaged state.
            </p>

            <div className="outline-box">
              Call{" "}
              <a className="underline-link" href="tel:5095355440">
                (509) 535-5440
              </a>{" "}
              to{" "}
              <a href="/contact" className="underline-link">
                get in touch
              </a>{" "}
              with our restoration team today.
            </div>

            <h2>Comprehensive Restoration Services for Every Challenge</h2>

            <p>
              When you rely on ServiceMaster Restore to repair your home, you
              have access to robust services that help you through one of the
              most challenging times in your life. We’ll be there to support you
              the entire time, offering advice and recommendations to complete
              your restoration project as soon as possible.
            </p>

            <h3>We offer you residential recovery services that include:</h3>

            <ul className="content">
              <li className="arrow-list">
                <span>
                  <strong>
                    <a
                      className="underline-link"
                      href="/residential/fire-and-smoke"
                    >
                      Fire and Smoke Damage Restoration
                    </a>
                  </strong>
                  : Our team rapidly assesses the extent of fire and smoke
                  damage, using advanced techniques and equipment to restore
                  your home to its pre-loss condition, to ensure your family’s
                  safety and comfort.
                </span>
              </li>
              <li className="arrow-list">
                <span>
                  <strong>
                    <a
                      href="/residential/water-damage"
                      className="underline-link"
                    >
                      Water Damage Mitigation
                    </a>
                  </strong>
                  : We utilize cutting-edge water extraction and drying
                  technology to mitigate the effects of water damage to prevent
                  mold growth and structural issues.
                </span>
              </li>
              <li className="arrow-list">
                <span>
                  <strong>
                    <a
                      href="/residential/specialty-services"
                      className="underline-link"
                    >
                      Specialty Restoration Services
                    </a>
                  </strong>
                  : From delicate document recovery to home reconstruction, our
                  specialty offerings cover a wide range of unique situations,
                  providing tailored solutions to protect your most valuable and
                  irreplaceable items.
                </span>
              </li>
              <li className="arrow-list">
                <span>
                  <strong>
                    <a href="/residential/mold" className="underline-link">
                      Mold Remediation Services
                    </a>
                  </strong>
                  : Our comprehensive mold remediation process includes thorough
                  inspection, containment, and removal, followed by detailed
                  cleaning and dehumidification to prevent future mold growth
                  and ensure a healthy living environment.
                </span>
              </li>
              <li className="arrow-list">
                <span>
                  <strong>
                    <a href="/residential/weather" className="underline-link">
                      Weather Damage Restoration
                    </a>
                  </strong>
                  : We provide prompt and professional restoration services for
                  weather-related damages, including wind, hail, and storm
                  destruction, to help you rebuild and fortify your home against
                  future weather events.
                </span>
              </li>
              <li className="arrow-list">
                <span>
                  <strong>
                    <a href="/residential/odor" className="underline-link">
                      Odor Removal Services
                    </a>
                  </strong>
                  : Using advanced deodorization techniques, we effectively
                  eliminate persistent odors caused by smoke, mold, or other
                  contaminants, restoring a fresh and clean atmosphere to your
                  living spaces.
                </span>
              </li>
            </ul>

            <p>
              What’s great about these and our other restoration solutions for
              your home is that we customize our offerings to fit your
              situation. For instance, if you recently experienced a fire, you
              may also be dealing with water damage and mold infestation. We can
              mix and match services to quickly tackle almost any issues you’re
              dealing with.
            </p>

            <h2>Trustworthy Restoration Services in Spokane & Coeur d'Alene</h2>
            <p>
              Our dedicated restoration service experts work around the clock to
              ensure you have the guidance needed to see the light at the end of
              a long and arduous tunnel. As a local business in the heart of
              Spokane & Coeur d'Alene, we want to be your go-to provider for all
              things restoration, knowing your home is in skilled hands.
            </p>

            <h3>
              You can trust our professionals with your residential restoration
              because:
            </h3>

            <ul className="content">
              <li className="arrow-list">
                <span>
                  <strong>We're here for you day or night.</strong> Our services
                  are available throughout the entire year because we know that
                  disasters won’t wait for a convenient time to strike.
                </span>
              </li>
              <li className="arrow-list">
                <span>
                  <strong>We present ourselves professionally.</strong> You’ll
                  know us by our bright yellow truck, customer-focused mindset
                  and TCB (taking care of business) attitude.
                </span>
              </li>
              <li className="arrow-list">
                <span>
                  <strong>
                    We ensure our services are competitively priced.
                  </strong>
                  Budget can be a point of contention for some companies, but
                  not ours. Our services are priced based on industry standards
                  and the extent of property damage to your home.
                </span>
              </li>
              <li className="arrow-list">
                <span>
                  <strong>We care about your peace of mind.</strong>Working with
                  our restoration company means being supported by compassionate
                  professionals who want to complete the job accurately and on
                  time to quickly get you back into your home.
                </span>
              </li>
            </ul>

            <div className="black-box">
              For more information about residential restoration services in
              Spokane & Coeur d'Alene, call{" "}
              <a className="underline-link" href="tel:5095355440">
                (509) 535-5440
              </a>{" "}
              or
              <a>contact us online</a>.
            </div>

            <h2>Frequently Asked Questions About Restoration Services</h2>
            <h4>How do you ensure the quality of your restoration services?</h4>
            <p>
              We ensure the quality of our restoration services by employing a
              team of dedicated professionals who are committed to completing
              the job accurately and on time. Our services are competitively
              priced based on industry standards and the extent of the damage.
              We also present ourselves professionally, with a customer-focused
              mindset and a commitment to taking care of business.
            </p>
            <h4>Can you handle multiple types of damage at once?</h4>
            <p>
              Yes, we can handle multiple types of damage at once. For example,
              if your home has experienced a fire, you may also be dealing with
              water damage and mold infestation. Our team can mix and match
              services to address all the issues you are facing, providing a
              comprehensive solution to restore your home.
            </p>
            <h4>
              How quickly can you respond to a restoration emergency in Spokane
              & Coeur d'Alene?
            </h4>
            <p>
              We understand that disasters can strike at any time, which is why
              our restoration services are available 24/7 throughout the year.
              Our team is dedicated to providing prompt and efficient service to
              help you recover from any emergency as soon as possible.
            </p>
          </div>

          <div className="column-two">
            <SideBarBox title={"Residential"} links={Links} list={List} />

            <UncertainTo />
          </div>
        </div>
      </div>

      <RestorePeace />
    </div>
  );
}
