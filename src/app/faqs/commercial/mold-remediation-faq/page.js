import Image from "next/image";

import FAQAccordion from "../../../components/FAQAccordion";
import GetHelpNow from "../../../components/GetHelpNow";
import RestorePeace from "../../../components/RestoringPeace";
import SideBarBox from "../../../components/SideBarBox";
import UncertainTo from "../../../components/UncertaintyTo";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs/commercial/mold-remediation-faq`;

const title = "Commercial Mold Remediation FAQs | Spokane & Coeur d’Alene";

const description =
  "Get answers about commercial mold growth, testing, health concerns, professional remediation, and mold removal in Spokane and Coeur d’Alene.";

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
        url: `${siteUrl}/commercialmold.jpg`,
        width: 1200,
        height: 630,
        alt: "Commercial mold remediation services from ServiceMaster by Compass",
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
    title,
    description,
    images: [`${siteUrl}/commercialmold.jpg`],
  },
};

const links = [
  "/faqs/commercial/water-restoration-faq",
  "/faqs/commercial/mold-remediation-faq",
  "/faqs/commercial/fire-restoration-faq",
  "/faqs/commercial/air-duct-faq",
];

const list = [
  "Water Damage FAQ",
  "Mold Remediation FAQ",
  "Fire Damage FAQ",
  "Air Duct Cleaning FAQ",
];

const faqItems = [
  {
    question: "What is mold?",
    answer:
      "Mold is a microscopic fungus that is part of the natural environment and plays an important role in breaking down organic matter. While mold is normal outdoors, excessive indoor mold growth can create unsanitary conditions and damage building materials.<br><br>Mold reproduces by releasing microscopic spores that travel through the air both indoors and outdoors.",
  },
  {
    question: "Why is mold a problem?",
    answer:
      "Mold can damage building materials and furnishings if it is allowed to grow unchecked. Over time, untreated mold may contribute to costly repairs and reduce the value of a commercial property.<br><br>Mold exposure may also irritate the eyes, nose, skin, and respiratory system, particularly for people with allergies, asthma, or other sensitivities.",
  },
  {
    question: "What does mold need in order to grow?",
    answer:
      "Mold needs moisture, temperatures above freezing, and an organic food source. Common food sources include wood, paper, drywall, dust, dirt, and other building materials.<br><br>Mold is more likely to develop in damp areas, spaces with limited airflow, and locations affected by leaks, flooding, or persistent humidity.",
  },
  {
    question: "How can I tell if I have mold?",
    answer:
      "Visible growth, water stains, discoloration, and musty odors may indicate a mold problem. You should also inspect areas where leaks or moisture intrusion have occurred, including roofs, pipes, ceilings, walls, basements, and HVAC systems.<br><br>Professional testing may help evaluate suspected microbial growth when the source or extent of the problem is unclear.",
  },
  {
    question:
      "When should mold be handled by a professional remediation company?",
    answer:
      "Professional remediation is recommended when mold growth is extensive, hidden inside building materials, caused by contaminated water, or likely to spread during removal.<br><br>Trained remediation professionals use containment, filtration, removal, and cleaning procedures designed to reduce the risk of spreading mold spores into unaffected areas.",
  },
  {
    question:
      "Some molds are considered more dangerous than others. Is identifying the mold important?",
    answer:
      'Terms such as “toxic mold” and “black mold” are often used to describe certain types of mold, but identifying the exact species does not usually change the immediate response. Visible mold and the moisture source supporting its growth should be addressed regardless of the mold type.<br><br><em>Source:</em> <a class="underline-link" href="https://www.cdc.gov/mold-health/about/index.html" target="_blank" rel="noopener noreferrer">CDC — Mold</a>.',
  },
];

const stripHtml = (value) =>
  value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const jsonLd = [
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
      url: `${siteUrl}/commercialmold.jpg`,
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
        item: `${siteUrl}/faqs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Commercial Restoration FAQs",
        item: `${siteUrl}/faqs/commercial`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Commercial Mold Remediation FAQs",
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(item.answer),
      },
    })),
  },
];

export default function CommercialMoldRemediationFaqPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/commercialmold.jpg"
          alt="Commercial mold remediation and removal services"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Commercial Mold Remediation FAQs</h1>

            <p>
              Get answers to common questions about commercial mold growth,
              removal, and remediation.
            </p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow text="Contact us today to learn more about our commercial mold remediation services." />
          </div>

          <aside
            className="column-two"
            aria-label="Commercial restoration FAQ categories"
          >
            <SideBarBox title="Commercial FAQs" links={links} list={list} />

            <UncertainTo />
          </aside>
        </div>
      </div>

      <RestorePeace />
    </main>
  );
}
