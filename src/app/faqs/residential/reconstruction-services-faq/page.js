import Image from "next/image";

import FAQAccordion from "../../../components/FAQAccordion";
import RestorePeace from "../../../components/RestoringPeace";
import SideBarBox from "../../../components/SideBarBox";
import GetHelpNow from "../../../components/GetHelpNow";
import UncertainTo from "../../../components/UncertaintyTo";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs/residential/reconstruction-services-faq`;

const title = "Residential Reconstruction FAQs | Spokane & Coeur d’Alene";

const description =
  "Find answers about residential reconstruction timelines, permits, insurance repairs, pre-loss condition, building-code upgrades, and home restoration.";

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
        alt: "Residential reconstruction and property repair services",
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
    images: [`${siteUrl}/sub-banner.jpg`],
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
    question: "How long will the reconstruction project take?",
    answer:
      "Because reconstruction projects involve many variables, it is difficult to predict exactly how long the work will take. The project timeline may depend on the extent of the damage, required permits, material availability, inspections, and the work included in the approved scope.<br><br>Your ServiceMaster Restore project manager will explain the phases of the reconstruction process and provide an estimated completion date.",
  },
  {
    question: "What does pre-loss condition mean?",
    answer:
      "Pre-loss condition refers to the state of your home immediately before the covered damage occurred. The goal of insured reconstruction work is generally to return the affected areas to a similar condition using materials of comparable type and quality.<br><br>Damage or deterioration that existed before the loss may not be included in the insured scope of repairs. At your request, ServiceMaster Restore can provide a separate estimate for additional renovation work.",
  },
  {
    question: "What is non-insured work?",
    answer:
      "Non-insured work includes repairs, renovations, or improvements that are not part of the covered property-loss claim.<br><br>ServiceMaster Restore can provide a separate estimate for requested non-insured work. That work will require separate authorization and payment terms. If it could delay the insured portion of the project, the timing should be discussed with your insurance adjuster and ServiceMaster Restore project manager.",
  },
  {
    question: "Do I need a building permit?",
    answer:
      "Permits may be required depending on the location, scope, and type of reconstruction work. When applicable, your ServiceMaster Restore project manager will coordinate the appropriate permits and identify the responsible contractor on the permit application.<br><br>Permit fees may be included in the project estimate and may be eligible for insurance coverage depending on your policy and approved claim.",
  },
  {
    question: "What is a building-code or ordinance upgrade?",
    answer:
      "A building-code or ordinance upgrade is a required improvement made when the damaged portion of a home no longer complies with current legal building standards.<br><br>Coverage for these upgrades depends on the terms of your insurance policy. Questions about whether a required upgrade is covered should be directed to your insurance adjuster.",
  },
  {
    question: "Will I need to be home throughout the project?",
    answer:
      "Not usually. We will work with you to arrange safe and reliable access to the property so you can continue with your normal routine.<br><br>Depending on the project, you may provide a key to the project manager or approve the use of a secure lockbox. Access arrangements should be discussed before work begins.",
  },
  {
    question: "Do my belongings need to be removed from the property?",
    answer:
      "That depends on the location and scope of the reconstruction work. Some belongings may remain in the home if they can be safely covered and protected from dust, debris, and accidental damage.<br><br>If items need to be packed, moved, or stored, your project manager will explain the process. Construction-related dust in the work area will be addressed during post-construction cleaning.",
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
        name: "Residential Reconstruction FAQs",
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

export default function ResidentialReconstructionFaqPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/sub-banner.jpg"
          alt="Residential reconstruction and property repair services"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Residential Reconstruction Services FAQs</h1>

            <p>
              Get answers from our experts about residential reconstruction,
              repairs, permits, insurance claims, and project timelines.
            </p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow text="Contact us with any additional questions about our residential reconstruction services." />
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
