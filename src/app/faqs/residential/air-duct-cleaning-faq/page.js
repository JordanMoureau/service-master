import Image from "next/image";

import FAQAccordion from "../../../components/FAQAccordion";
import RestorePeace from "../../../components/RestoringPeace";
import SideBarBox from "../../../components/SideBarBox";
import UncertainTo from "../../../components/UncertaintyTo";
import GetHelpNow from "../../../components/GetHelpNow";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs/residential/air-duct-cleaning-faq`;

const title = "Residential Air Duct Cleaning FAQs | Spokane & Coeur d’Alene";

const description =
  "Find answers about residential air duct cleaning costs, scheduling, HVAC maintenance, cleaning frequency, and indoor air quality in Spokane and Coeur d’Alene.";

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
        url: `${siteUrl}/air-duct.jpg`,
        width: 1200,
        height: 630,
        alt: "Residential air duct and HVAC system cleaning services",
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
    images: [`${siteUrl}/air-duct.jpg`],
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
    question: "Is residential air duct cleaning expensive?",
    answer:
      "The cost of air duct cleaning varies depending on factors such as the size and layout of your home, the condition of the HVAC system, the accessibility of the ductwork, and the materials used in the system.<br><br>Your technician can inspect the system and provide an estimate based on the scope of work.",
  },
  {
    question: "How long does residential air duct cleaning take?",
    answer:
      "The amount of time required depends on the size, layout, accessibility, and complexity of your HVAC system. After inspecting the system, your technician can provide a more accurate estimate.<br><br>Many residential duct-cleaning appointments take approximately three to five hours, while larger or more complex systems may take longer.",
  },
  {
    question: "Will air duct cleaning disrupt my family?",
    answer:
      "Air duct cleaning can create some noise and temporarily limit access to areas around vents and HVAC equipment. We can work with you to schedule service at a time that minimizes disruption to your household.<br><br>The amount of time involved will depend on the size and complexity of the system.",
  },
  {
    question: "How often should residential air ducts be cleaned?",
    answer:
      "The appropriate cleaning schedule depends on the condition of the system, household activity, indoor air concerns, and whether the home has experienced construction, water damage, smoke, mold, or excessive dust.<br><br>You may want to consider more frequent inspection or cleaning if your home has:<br><br>• Pets that shed heavily<br>• Recent water damage<br>• Remodeling or renovation work<br>• Residents with asthma or allergies<br>• Persistent humidity or moisture concerns",
  },
  {
    question:
      "What should I do before the technician arrives for air duct cleaning?",
    answer:
      "<strong>Before your scheduled service:</strong><br><br>• Ask how much space the technician will need around vent registers, the furnace, and the air-conditioning equipment.<br>• Clear furniture and personal belongings away from the work areas.<br>• Plan for some noise during the cleaning process.<br>• Keep children and pets away from active work areas.<br>• Complete a walk-through with the technician to discuss the ductwork, access points, cleaning process, and protective coverings.<br>• Make sure utility rooms, closets, vents, and other required areas are accessible.",
  },
  {
    question: "Why should I have my air ducts cleaned?",
    answer:
      "<strong>Residential air duct cleaning may help:</strong><br><br>• Remove accumulated dust, dirt, and debris from the HVAC system<br>• Support improved airflow and system performance<br>• Reduce the circulation of certain airborne contaminants<br>• Address debris left behind after construction or renovation<br>• Support a cleaner indoor environment<br>• Identify areas that may require additional HVAC maintenance or repair",
  },
  {
    question: "How can I help maintain clean air ducts?",
    answer:
      "Inspect and replace HVAC filters according to the manufacturer’s recommendations. The appropriate schedule may depend on the type of filter, household conditions, pets, system usage, and indoor air concerns.<br><br>Routine vacuuming can also help reduce dust, pet dander, and debris. Keep supply and return vents unobstructed, address moisture problems promptly, and schedule regular HVAC maintenance.",
  },
];

const stripHtml = (value) =>
  value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/•/g, "")
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
      url: `${siteUrl}/air-duct.jpg`,
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
        name: "Residential Air Duct Cleaning FAQs",
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

export default function ResidentialAirDuctCleaningFaqPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/air-duct.jpg"
          alt="Residential air duct and HVAC system cleaning services"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Residential Air Duct Cleaning FAQs</h1>

            <p>
              Get answers from our experts about residential air duct cleaning,
              scheduling, HVAC maintenance, and indoor air quality.
            </p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow text="If you still have questions about our residential air duct cleaning services, do not hesitate to call us at" />
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
