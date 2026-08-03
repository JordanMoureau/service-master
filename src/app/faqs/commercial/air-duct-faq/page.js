import Image from "next/image";

import FAQAccordion from "../../../components/FAQAccordion";
import RestorePeace from "../../../components/RestoringPeace";
import SideBarBox from "../../../components/SideBarBox";
import UncertainTo from "../../../components/UncertaintyTo";
import GetHelpNow from "../../../components/GetHelpNow";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs/commercial/air-duct-faq`;

const title = "Commercial Air Duct Cleaning FAQs | Spokane & Coeur d’Alene";

const description =
  "Find answers about commercial air duct cleaning, HVAC contamination, indoor air quality, cleaning frequency, inspections, and service in Spokane and Coeur d’Alene.";

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
        url: `${siteUrl}/commercialairduct.jpg`,
        width: 1200,
        height: 630,
        alt: "Commercial air duct cleaning and HVAC system inspection",
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
    images: [`${siteUrl}/commercialairduct.jpg`],
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
    question: "Why should a commercial air duct system be cleaned?",
    answer:
      "Dust, debris, allergens, odors, and other contaminants can accumulate inside commercial ductwork and HVAC components over time. Professional cleaning can remove this buildup and help support cleaner indoor air, more efficient airflow, and a healthier environment for employees, customers, tenants, and visitors.",
  },
  {
    question: "How often should commercial air ducts be cleaned?",
    answer:
      "There is no single schedule that applies to every commercial property. Cleaning frequency depends on the building type, occupancy, HVAC usage, surrounding environment, maintenance history, and whether the property has experienced construction, water damage, mold, smoke, or pest activity.<br><br>A professional inspection can help determine whether cleaning is currently needed.",
  },
  {
    question: "What are signs that commercial air ducts may need cleaning?",
    answer:
      "Possible signs include visible dust or debris around vents, persistent odors, reduced airflow, excessive dust inside the building, unexplained indoor air quality concerns, or contamination following construction, fire, smoke, water damage, or mold growth.<br><br>These signs do not always confirm that the ductwork is the source, so an inspection may be necessary.",
  },
  {
    question: "Can dirty air ducts affect indoor air quality?",
    answer:
      "Contaminants inside an HVAC system may be distributed throughout the building when the system is operating. Dust, debris, allergens, microbial growth, and smoke residue can potentially contribute to poor indoor air quality.<br><br>Air duct cleaning may be one part of a larger indoor air quality or HVAC maintenance plan.",
  },
  {
    question: "Can air ducts be cleaned after a commercial fire?",
    answer:
      "Yes. Smoke, soot, and odors can enter ductwork and spread through the HVAC system after a fire. The system should be inspected before operation, and contaminated components may need professional cleaning and deodorization before the system can safely return to service.",
  },
  {
    question: "Should air ducts be cleaned after water or mold damage?",
    answer:
      "If moisture or microbial growth has affected the HVAC system, the source of the moisture must be corrected before cleaning begins. Contaminated ductwork or HVAC components may require specialized cleaning, remediation, or replacement depending on the materials involved and the extent of the damage.",
  },
  {
    question: "What parts of the HVAC system are cleaned?",
    answer:
      "The scope of work depends on the system and its condition. Cleaning may include supply and return ducts, registers, grilles, diffusers, air handlers, coils, fans, drip pans, and other accessible HVAC components.<br><br>Your technician should explain which components are included before work begins.",
  },
  {
    question: "Will air duct cleaning disrupt business operations?",
    answer:
      "Some noise, equipment access, and temporary restrictions may be necessary during cleaning. The amount of disruption depends on the size and layout of the property, the number of HVAC systems, and the extent of contamination.<br><br>Service may be scheduled in phases or during lower-occupancy hours when practical.",
  },
  {
    question: "How long does commercial air duct cleaning take?",
    answer:
      "The service time varies based on the size of the building, number of HVAC systems, accessibility of the ductwork, level of contamination, and whether additional cleaning or restoration services are required.<br><br>A technician can provide a more accurate estimate after inspecting the property.",
  },
  {
    question: "Can air duct cleaning eliminate all odors?",
    answer:
      "Air duct cleaning may help reduce odors caused by dust, smoke, debris, or contaminants inside the HVAC system. However, odors can also originate from carpeting, walls, ceilings, insulation, furnishings, moisture, mold, or other building materials.<br><br>The source of the odor must be identified and addressed for effective odor removal.",
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
      url: `${siteUrl}/commercialairduct.jpg`,
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
        name: "Commercial Air Duct Cleaning FAQs",
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

export default function CommercialAirDuctFaqPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/commercialairduct.jpg"
          alt="Commercial air duct cleaning and HVAC system inspection"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Commercial Air Duct Cleaning FAQs</h1>

            <p>
              Get answers from our restoration experts about commercial air duct
              cleaning, HVAC contamination, and indoor air quality.
            </p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow text="If you still have questions about our commercial air duct cleaning services, do not hesitate to call us at" />
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
