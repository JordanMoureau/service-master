import RestorePeace from "../components/RestoringPeace";
import SideBarBox from "../components/SideBarBox";
import UncertainTo from "../components/UncertaintyTo";
// imports

import JsonLd from "../components/JsonLd";

// --- SEO + JSON-LD ---
const canonical = "https://smcfireandwater.com/payment-financing-options";
const title =
  "Payment & Financing Options | ServiceMaster by Compass Spokane & Coeur d’Alene";
const description =
  "ServiceMaster by Compass offers flexible payment & financing for water damage, fire restoration, and mold removal in Spokane, Spokane Valley & Coeur d’Alene. We also work with all major insurance providers.";

// app/payment-financing-options/page.tsx

export const metadata = {
  title:
    "Payment & Financing Options | ServiceMaster by Compass Spokane & Coeur d’Alene",
  description:
    "ServiceMaster by Compass offers flexible payment & financing for water damage, fire restoration, and mold removal in Spokane, Spokane Valley & Coeur d’Alene. We also work with all major insurance providers.",
  keywords: [
    "restoration financing Spokane",
    "insurance claims support restoration Spokane",
    "water damage clean up Spokane Valley WA",
    "fire damage restoration Spokane WA",
    "mold remediation and removal Spokane WA",
    "mold removal services Coeur d’Alene ID",
    "mold abatement service Coeur d’Alene ID",
  ],
  alternates: {
    canonical: "https://smcfireandwater.com/payment-financing-options",
  },
  openGraph: {
    title:
      "Payment & Financing Options — ServiceMaster by Compass | Spokane & Coeur d’Alene",
    description:
      "Flexible payment plans, financing options, and insurance support for restoration services. Serving Spokane, Spokane Valley & Coeur d’Alene.",
    url: "https://smcfireandwater.com/payment-financing-options",
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "ServiceMaster by Compass — Payment & Financing",
      },
    ],
    locale: "en_US",
    type: "article",
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
      "Payment & Financing Options | ServiceMaster by Compass Spokane & Coeur d’Alene",
    description:
      "Flexible payment, financing, and insurance coordination for restoration services.",
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
      "restoration financing Spokane",
      "insurance claims support restoration Spokane",
      "water damage clean up Spokane Valley WA",
      "fire damage restoration Spokane WA",
      "mold remediation and removal Spokane WA",
      "mold removal services Coeur d’Alene ID",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://smcfireandwater.com/payment-financing-options#webpage",
    url: canonical,
    name: "Payment & Financing Options",
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    description: description,
    breadcrumb: {
      "@id": "https://smcfireandwater.com/payment-financing-options#breadcrumb",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://smcfireandwater.com/payment-financing-options#breadcrumb",
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
        name: "Payment & Financing",
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Payment & Financing Options for Restoration",
    provider: { "@id": "https://smcfireandwater.com/#organization" },
    areaServed: ["Spokane WA", "Spokane Valley WA", "Coeur d’Alene ID"],
    description:
      "Flexible payment plans, financing options, and insurance support for residential and commercial restoration services.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What payment methods do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept credit cards, checks, in-house financing at select locations, and third-party financing options.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with insurance providers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We coordinate with all major insurance carriers to help streamline the claims process and reduce delays.",
        },
      },
      {
        "@type": "Question",
        name: "Can I finance restoration costs if insurance doesn’t cover everything?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Flexible financing solutions are available if insurance doesn’t cover the full cost or if you prefer not to go through insurance. Options vary by location.",
        },
      },
    ],
  },
];

const Links = [
  "/commercial/services",
  "/residential/services",
  "/insurance/professionals",
];

export default function PaymentFinancingOptions() {
  return (
    <div>
      <JsonLd data={jsonLd} />
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Payment and financing options ServiceMaster"
        />
      </div>
      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Payment & Financing Options</h1>
            <p>
              At ServiceMaster Restore, we know that unexpected disasters can
              create financial stress. That’s why we offer flexible payment and
              financing options to make the restoration process as smooth as
              possible. Whether you’re facing water damage, fire damage, or need
              mold remediation, we’re here to help you recover both physically
              and financially.
            </p>

            <h2>Payment Options</h2>
            <p>We accept a variety of convenient payment methods, including:</p>
            <ul>
              <li className="arrow-list">Credit cards</li>
              <li className="arrow-list">Checks</li>
              <li className="arrow-list">
                In-house financing (available at select locations)
              </li>
              <li className="arrow-list">
                Third-party financing (ask your local ServiceMaster Restore for
                details)
              </li>
            </ul>

            <h2>Insurance Support</h2>
            <p>
              We work with all major insurance carriers and can guide you
              through the claims process. Our team understands how to coordinate
              directly with your insurer to help reduce stress and avoid delays.
            </p>

            <h2>Flexible Financing Solutions</h2>
            <p>
              If insurance doesn’t cover the full cost of restoration, or if you
              prefer not to go through insurance, ask us about financing.
              Options vary by location.
            </p>

            <h2>Trusted Experience, National Reach</h2>
            <p>
              With over 65 years of experience and locations across the country,
              we’re a trusted name in restoration. We offer 24/7 emergency
              response and personalized service backed by a national network.
              Whether you’re a homeowner or a business owner, we have the tools,
              training, and resources to help you recover faster.
            </p>

            <h2>Industries We Serve</h2>
            <ul>
              <li className="arrow-list">Residential homes</li>
              <li className="arrow-list">Multi-family properties</li>
              <li className="arrow-list">Commercial offices</li>
              <li className="arrow-list">Healthcare facilities</li>
              <li className="arrow-list">Education institutions</li>
              <li className="arrow-list">Industrial spaces</li>
              <li className="arrow-list">And more</li>
            </ul>

            <h2>Ready to Get Started?</h2>
            <p>
              Let us take the worry off your plate. Contact your local
              ServiceMaster Restore today to learn more about payment options
              and request a free estimate.
            </p>

            <div className="outline-box">
              <p>
                <a className="underline-link" href="tel:5095355440">
                  Call now
                </a>{" "}
                or <a className="underline-link">find your nearest location</a>{" "}
                to get started. We’re here 24/7 when you need us most.
              </p>
            </div>
          </div>

          <div className="column-two">
            <UncertainTo />
          </div>
        </div>
      </div>
      <RestorePeace />
    </div>
  );
}
