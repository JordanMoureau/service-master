import Image from "next/image";

import FAQAccordion from "../../../components/FAQAccordion";
import RestorePeace from "../../../components/RestoringPeace";
import SideBarBox from "../../../components/SideBarBox";
import UncertainTo from "../../../components/UncertaintyTo";
import GetHelpNow from "../../../components/GetHelpNow";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs/residential/mold-remediation-faq`;

const title = "Residential Mold Remediation FAQs | Spokane & Coeur d’Alene";

const description =
  "Find answers about household mold growth, prevention, testing, health concerns, professional remediation, and mold removal in Spokane and Coeur d’Alene.";

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
        url: `${siteUrl}/mold-damage.jpg`,
        width: 1200,
        height: 630,
        alt: "Residential mold remediation and removal services",
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
    images: [`${siteUrl}/mold-damage.jpg`],
  },
};

const links = [
  "/faqs/residential/water-damage-faq",
  "/faqs/residential/mold-remediation-faq",
  "/faqs/residential/reconstruction-services-faq",
  "/faqs/residential/hoarding-faq",
  "/faqs/residential/fire-damage-faq",
  "/faqs/residential/air-duct-cleaning-faq",
];

const list = [
  "Water Damage FAQ",
  "Mold Remediation FAQ",
  "Reconstruction Services FAQ",
  "Hoarding FAQ",
  "Fire Damage FAQ",
  "Air Duct Cleaning FAQ",
];

const faqItems = [
  {
    question: "What is mold?",
    answer:
      "Mold is a microscopic fungus that occurs naturally in the environment and helps break down organic matter. Although mold is a normal part of the outdoor environment, excessive indoor mold growth can create unsanitary conditions and damage building materials.<br><br>Mold reproduces by releasing microscopic spores that travel through the air both indoors and outdoors.",
  },
  {
    question: "Why is mold a problem?",
    answer:
      "Mold can damage drywall, wood, insulation, furnishings, and other household materials when it is allowed to grow unchecked. Over time, untreated mold may lead to significant repairs.<br><br>Mold exposure may also irritate the eyes, nose, skin, or respiratory system, particularly for people with allergies, asthma, or other sensitivities.",
  },
  {
    question: "What does mold need in order to grow?",
    answer:
      "Mold needs moisture, temperatures above freezing, and an organic food source. Common food sources include wood, paper, drywall, dust, dirt, and other building materials.<br><br>Mold is more likely to grow in damp areas, spaces with limited airflow, and locations affected by leaks, flooding, condensation, or persistent humidity.",
  },
  {
    question: "How can I tell if I have mold?",
    answer:
      "Visible growth, water stains, discoloration, and musty odors may indicate a mold problem. Inspect areas where leaks or moisture intrusion have occurred, including roofs, pipes, ceilings, walls, basements, bathrooms, and HVAC systems.<br><br>Professional testing may help evaluate suspected microbial growth when the source or extent of the problem is unclear.",
  },
  {
    question: "What can I do to prevent mold growth in my home?",
    answer:
      "Control indoor moisture by using air conditioning or dehumidification during humid weather and in damp areas such as basements. Use exhaust fans in bathrooms and kitchens, and make sure clothes dryers vent outside the home.<br><br>Repair roof, plumbing, and wall leaks promptly. Dry wet materials as quickly as possible and address recurring condensation or moisture before mold has an opportunity to grow.",
  },
  {
    question:
      "When should mold be handled by a professional remediation company?",
    answer:
      "Professional remediation may be appropriate when mold growth is extensive, hidden inside building materials, caused by contaminated water, or likely to spread during removal.<br><br>Trained remediation professionals use containment, filtration, removal, and cleaning procedures designed to reduce the risk of spreading mold spores into unaffected areas.",
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
      url: `${siteUrl}/mold-damage.jpg`,
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
        name: "Residential Restoration FAQs",
        item: `${siteUrl}/faqs/residential`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Residential Mold Remediation FAQs",
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

export default function ResidentialMoldRemediationFaqPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/mold-damage.jpg"
          alt="Residential mold remediation and removal services"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Residential Mold Remediation FAQs</h1>

            <p>
              Get answers from our restoration experts about household mold
              growth, prevention, removal, and professional remediation.
            </p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow text="Contact us today with additional questions about our residential mold remediation services." />
          </div>

          <aside
            className="column-two"
            aria-label="Residential restoration FAQ categories"
          >
            <SideBarBox title="Residential FAQs" links={links} list={list} />

            <UncertainTo />
          </aside>
        </div>
      </div>

      <RestorePeace />
    </main>
  );
}
