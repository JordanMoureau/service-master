"use client";

import RestorePeace from "../components/RestoringPeace";
import SideBarBox from "../components/SideBarBox";
import GetHelpNow from "../components/GetHelpNow";

import JsonLd from "../components/JsonLd";

// --- SEO + JSON-LD ---
const canonical = "https://smcfireandwater.com/faqs";
const title =
  "Restoration FAQs | Water, Fire & Mold | Spokane WA & Coeur d’Alene ID";
const description =
  "Answers to common questions about water damage cleanup, fire & smoke restoration, and mold remediation. Explore residential & commercial FAQs for Spokane, Spokane Valley & Coeur d’Alene. 24/7 help.";

const seo = {
  title,
  description,
  canonical,
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "mold remediation and removal Spokane WA, mold removal services Coeur d’Alene ID, fire damage restoration Spokane WA, mold abatement service Coeur d’Alene ID, water damage clean up Spokane Valley WA, fire damage restoration service near me Spokane, restoration mold removal CDA Idaho, fire damage restoration companies Spokane WA, emergency flood cleanup Coeur d’Alene ID, restoration FAQs Spokane",
    },
  ],
  openGraph: {
    url: canonical,
    siteName: "ServiceMaster by Compass",
    type: "article",
    title:
      "Restoration FAQs — Water, Fire & Mold | Spokane WA & Coeur d’Alene ID",
    description,
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "ServiceMaster by Compass — FAQs",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://smcfireandwater.com/faqs#webpage",
    url: canonical,
    name: "Restoration FAQs",
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    description: description,
    breadcrumb: { "@id": "https://smcfireandwater.com/faqs#breadcrumb" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/sub-banner.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://smcfireandwater.com/faqs#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smcfireandwater.com/",
      },
      { "@type": "ListItem", position: 2, name: "FAQs", item: canonical },
    ],
  },
  // Directory of the two FAQ detail pages
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FAQ Categories",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://smcfireandwater.com/faqs/residential",
        name: "FAQs — Residential Restoration",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://smcfireandwater.com/faqs/commercial",
        name: "FAQs — Commercial Restoration",
      },
    ],
  },
];

const Links = ["/faqs/residential", "/faqs/commercial"];

const List = ["FAQs - Residential", "FAQs - Commercial"];

export default function Faqs() {
  return (
    <div>
      <JsonLd data={jsonLd} />
      <div className="top-image">
        <img src="/sub-banner.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Frequently Asked Questions</h1>
            <h2> ServiceMaster Restore Has the Answers</h2>

            <p>
              {" "}
              When your home or business sustains damage, whether it's from a
              storm, a fire, or mold, you undoubtedly have many thoughts and
              questions running through your head. The team at ServiceMaster
              Restore wants to be there for you in every way possible, from
              providing the restoration services you need to giving you the
              peace of mind you deserve by answering any questions you may have.
              With over six decades of experience, we have seen a lot and talked
              to many home and business owners. We understand how they feel and
              what they are going through. That's why we've compiled a list of
              the common questions we receive, along with our answers.{" "}
            </p>

            <p>
              {" "}
              We've broken our questions down by category. Explore the FAQ pages
              listed to the right for additional information on each of our
              restoration services. If you still have lingering questions or
              concerns, don't hesitate to reach out to our team. We are always
              here for your during these uncertain times.
            </p>

            <GetHelpNow
              text={
                "Our team is standing by to assist you with all your needs. Give us a call today at"
              }
            />
          </div>

          <div className="column-two">
            <SideBarBox title={"FAQS"} links={Links} list={List} />
          </div>
        </div>
      </div>
      <RestorePeace />
    </div>
  );
}
