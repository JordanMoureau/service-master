import Image from "next/image";

import FAQAccordion from "../../../components/FAQAccordion";
import RestorePeace from "../../../components/RestoringPeace";
import SideBarBox from "../../../components/SideBarBox";
import UncertainTo from "../../../components/UncertaintyTo";
import GetHelpNow from "../../../components/GetHelpNow";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs/commercial/air-duct-faq`;

const title = "Commercial Fire Damage FAQs | Spokane & Coeur d’Alene";

const description =
  "Find answers about commercial fire and smoke damage restoration, safety, contents cleaning, storage, insurance, and recovery in Spokane and Coeur d’Alene.";

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
        url: `${siteUrl}/commercialfire.jpg`,
        width: 1200,
        height: 630,
        alt: "Commercial fire and smoke damage restoration services",
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
    images: [`${siteUrl}/commercialfire.jpg`],
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
    question: "How long will the restoration process take?",
    answer:
      "Because fire and smoke restoration can involve many variables and services, it is difficult to predict exactly how long the complete restoration process will take. Your ServiceMaster Restore technician can explain the anticipated phases of the project and provide estimated dates as the scope of work becomes clear.",
  },
  {
    question: "Can I clean the fire and smoke damage myself?",
    answer:
      "We recommend that you do not attempt do-it-yourself cleaning methods without first consulting your ServiceMaster Restore technician.<br><br>Pretesting materials, selecting the correct cleaning agents, using proper dilution rates, and combining cleaning and deodorizing products safely are important parts of the restoration process. Professional systems and products used by trained technicians provide the best opportunity to restore your property and belongings successfully.",
  },
  {
    question: "What are some safety concerns after a commercial fire?",
    answer:
      "Occupant and worker safety are top priorities. During the initial inspection, our technicians identify and address hazards such as unstable debris, poor air quality, damaged electrical systems, and slip or trip risks.<br><br>Burned electrical cords and appliances may be separated for disposal. Questionable appliances may be unplugged and tagged for professional evaluation. Electrical power may also need to remain off until the property has been inspected by a licensed electrician.",
  },
  {
    question: "May I turn on the heating or air conditioning system?",
    answer:
      "Do not turn on the furnace, air conditioner, or ventilation system until it has been inspected and cleared by a qualified HVAC professional. Operating a contaminated system could circulate smoke, soot, and other particles throughout the property.",
  },
  {
    question: "How should I keep track of items that cannot be restored?",
    answer:
      "For insurance and documentation purposes, create a detailed list of items considered nonrestorable, including damaged food, inventory, equipment, furnishings, and personal property.<br><br>Photographs, purchase records, serial numbers, and estimated replacement values may also help support your insurance claim.",
  },
  {
    question: "Will I need a general contractor?",
    answer:
      "Some restoration projects require licensed contractors or specialized trades. This may include drywall repair, painting, electrical work, plumbing, roofing, framing, finish carpentry, flooring, carpet installation, window or door replacement, cabinetry, and post-construction cleaning.<br><br>Your restoration team can help identify which repairs require additional contractors.",
  },
  {
    question: "Do my belongings need to be removed from the property?",
    answer:
      "Depending on the source, severity, and extent of the fire damage, belongings may need to be moved to a secure facility for cleaning and storage. Removing contents can also create the space needed for structural restoration or reconstruction.<br><br>ServiceMaster Restore will coordinate with you and your insurance claims representative throughout this process.",
  },
  {
    question: "Will I have access to my belongings while they are in storage?",
    answer:
      "Yes. With advance notice, we can arrange for a ServiceMaster Restore technician to meet you and provide access to requested items. A service charge may apply depending on the location, timing, and amount of work involved.",
  },
  {
    question:
      "What happens to special items such as artwork, computers, and electronics?",
    answer:
      "Artwork, electronics, documents, machinery, and other valuable or specialized items may require evaluation and restoration by an appropriate specialist.<br><br>We can work with you and your insurance claims representative to identify these items and locate qualified restoration professionals when necessary.",
  },
  {
    question: "Who is responsible for paying for the service?",
    answer:
      "Before work begins, the responsible parties will need to sign an authorization for payment. If the work is part of a covered insurance claim, ServiceMaster Restore may collect the deductible from you and bill the remaining approved amount to your insurance provider.<br><br>If the claim is denied, the damage is not covered, or you choose not to file a claim, you will be responsible for payment according to the terms of the service agreement.",
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
      url: `${siteUrl}/commercialfire.jpg`,
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
        name: "Commercial Fire Damage FAQs",
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

export default function CommercialFireRestorationFaqPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/commercialfire.jpg"
          alt="Commercial fire and smoke damage restoration services"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Commercial Fire Damage Restoration FAQs</h1>

            <p>
              Get answers from our restoration experts about commercial fire and
              smoke damage recovery.
            </p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow text="If you still have questions about our commercial fire restoration services, do not hesitate to call us at" />
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
