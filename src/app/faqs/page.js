import Image from "next/image";

import RestorePeace from "../components/RestoringPeace";
import SideBarBox from "../components/SideBarBox";
import GetHelpNow from "../components/GetHelpNow";
import JsonLd from "../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs`;

const title = "Restoration FAQs | Water, Fire & Mold Damage";

const description =
  "Find answers to common questions about water damage cleanup, fire and smoke restoration, and mold remediation for homes and businesses in Spokane and Coeur d’Alene.";

export const metadata = {
  title,
  description,

  alternates: {
    canonical,
  },

  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: `${siteUrl}/sub-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "ServiceMaster by Compass restoration services",
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
    title,
    description,
    images: [`${siteUrl}/sub-banner.jpg`],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "ServiceMaster by Compass",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
    sameAs: [
      "https://www.youtube.com/channel/UCxhfBr5uexZ5FxWWnOtHEkQ",
      "https://www.facebook.com/p/ServiceMaster-by-Compass-100063756032122/",
      "https://www.linkedin.com/company/servicemaster-fire-water-restoration-by-compass",
      "https://www.instagram.com/servicemaster_by_compass",
      "https://g.co/kgs/PCuFHgp",
      "https://yelp.com/biz/servicemaster-fire-and-water-restoration-by-compass-spokane",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Spokane",
        containedInPlace: {
          "@type": "State",
          name: "Washington",
        },
      },
      {
        "@type": "City",
        name: "Spokane Valley",
        containedInPlace: {
          "@type": "State",
          name: "Washington",
        },
      },
      {
        "@type": "City",
        name: "Coeur d’Alene",
        containedInPlace: {
          "@type": "State",
          name: "Idaho",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "ServiceMaster by Compass",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#organization`,
    },
    breadcrumb: {
      "@id": `${canonical}#breadcrumb`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/sub-banner.jpg`,
      width: 1200,
      height: 630,
    },
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
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Restoration FAQs",
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Restoration FAQ Categories",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Residential Restoration FAQs",
        url: `${siteUrl}/faqs/residential`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Commercial Restoration FAQs",
        url: `${siteUrl}/faqs/commercial`,
      },
    ],
  },
];

const links = ["/faqs/residential", "/faqs/commercial"];

const list = ["Residential FAQs", "Commercial FAQs"];

export default function FaqsPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/sub-banner.jpg"
          alt="ServiceMaster by Compass restoration team providing emergency property damage assistance"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Frequently Asked Questions</h1>

            <h2>ServiceMaster Restore Has the Answers</h2>

            <p>
              When your home or business sustains damage from a storm, fire,
              mold, or another disaster, you undoubtedly have many questions
              running through your mind. The team at ServiceMaster Restore is
              here to support you in every way possible, from providing the
              restoration services you need to answering your questions and
              giving you greater peace of mind.
            </p>

            <p>
              With more than six decades of restoration experience, we have
              helped many homeowners and business owners navigate property
              damage and recovery. We understand what you are going through,
              which is why we have compiled answers to some of the most common
              questions we receive.
            </p>

            <p>
              We have organized our questions by category. Explore the
              residential and commercial FAQ pages for more information about
              our restoration services. If you still have questions or concerns,
              do not hesitate to contact our team. We are always here for you
              during these uncertain times.
            </p>

            <GetHelpNow text="Our team is standing by to assist you with all your restoration needs. Give us a call today at" />
          </div>

          <aside className="column-two" aria-label="FAQ categories">
            <SideBarBox title="FAQs" links={links} list={list} />
          </aside>
        </div>
      </div>

      <RestorePeace />
    </main>
  );
}
