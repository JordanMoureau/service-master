import Image from "next/image";

import FAQAccordion from "../../../components/FAQAccordion";
import RestorePeace from "../../../components/RestoringPeace";
import SideBarBox from "../../../components/SideBarBox";
import UncertainTo from "../../../components/UncertaintyTo";
import GetHelpNow from "../../../components/GetHelpNow";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs/residential/fire-damage-faq`;

const title = "Residential Fire Damage FAQs | Spokane & Coeur d’Alene";

const description =
  "Find answers about residential fire and smoke damage restoration, contents cleaning, safety, storage, insurance, and recovery in Spokane and Coeur d’Alene.";

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
        url: `${siteUrl}/firedamagefaq.jpg`,
        width: 1200,
        height: 630,
        alt: "Residential fire and smoke damage restoration services",
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
    images: [`${siteUrl}/firedamagefaq.jpg`],
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
    question: "How long will the restoration process take?",
    answer:
      "Because there are many variables and services involved in fire and smoke restoration, it is difficult to predict exactly how long the complete restoration will take. Consult with your ServiceMaster Restore restoration technician about the estimated dates and phases of your restoration project.",
  },
  {
    question: "Can I clean up fire damage myself?",
    answer:
      "We suggest that you do not attempt any do-it-yourself cleaning methods without consulting your ServiceMaster Restore restoration technician. Pretesting, using the right cleaning agent for each item, combining deodorizing agents with cleaning solutions, and using correct dilution rates are some of the ways a fire restoration technician controls the results.<br><br>Professional cleaning systems and products used by experienced, trained ServiceMaster Restore technicians give you the best chance of restoring your belongings.",
  },
  {
    question: "What are some safety concerns?",
    answer:
      "At ServiceMaster Restore, occupant and worker safety is a top priority. During the initial inspection, safety hazards are identified and addressed, including debris, air-quality concerns, electrical hazards, and slip-and-fall risks.<br><br>Burned electrical cords and appliances may be separated for disposal. Questionable electrical appliances may be unplugged and tagged for evaluation. Electrical power may remain off until the property has been evaluated by a licensed electrician.",
  },
  {
    question: "Can I turn on my heating and air conditioning system?",
    answer:
      "We recommend that you do not turn on your furnace, air conditioner, or ventilation system until it has been inspected and cleared by a qualified HVAC professional.",
  },
  {
    question:
      "Which items should I keep with me during the restoration process?",
    answer:
      "<strong>Keep important, valuable, or hazardous items in your possession, including:</strong><br><br>• Cash<br>• Medications<br>• Valuable jewelry<br>• Checkbooks<br>• Personal documents<br>• Valuable artwork<br>• Flammable materials<br>• Pets<br>• Weapons and ammunition<br>• Gasoline containers<br>• Stamp and coin collections",
  },
  {
    question: "How do I keep track of items that cannot be restored?",
    answer:
      "Make a detailed list of items considered nonrestorable, including damaged food. Keep one copy for your records and provide another to your insurance company.<br><br>Photographs, receipts, serial numbers, and estimated replacement values may also help document the loss.",
  },
  {
    question: "Do I need to move out during the restoration process?",
    answer:
      "That decision depends on the condition of the property and factors such as safety concerns, odors, electrical service, and noise from restoration equipment.<br><br>If you leave the property temporarily, consider forwarding your mail, pausing deliveries, securing the property, and notifying relevant utility or service providers. Your restoration technician and insurance representative can provide information to help you make the decision.",
  },
  {
    question: "Will I need a general contractor?",
    answer:
      "Some repairs may require a general contractor or specialized trades. This may include drywall repair, painting, electrical work, plumbing, roofing, framing, finish carpentry, flooring, carpet installation, door or window replacement, cabinetry, and post-construction cleaning.",
  },
  {
    question: "Do my belongings need to be removed from the property?",
    answer:
      "Depending on the source, nature, and extent of the fire, it may be best to move belongings to a secure facility for cleaning and storage. Removing contents may also create space for structural restoration or reconstruction.<br><br>ServiceMaster Restore will work with you and your insurance claims representative to manage this process.",
  },
  {
    question: "Will I have access to my belongings while they are in storage?",
    answer:
      "Yes. With advance notice, we can schedule a time for a ServiceMaster Restore technician to provide access to requested items. A service charge may apply.",
  },
  {
    question:
      "What happens to special items such as artwork, china, and heirlooms?",
    answer:
      "Some valuable or specialized items require evaluation and restoration by an appropriate specialist. We can work with you and your insurance claims representative to identify these items and locate a qualified restoration professional.",
  },
  {
    question: "Who is responsible for paying for the service?",
    answer:
      "Before work begins, the property owner or another responsible party will need to sign an authorization for the work and payment.<br><br>If the work is part of a covered insurance claim, ServiceMaster Restore may collect the deductible and bill the remaining approved amount to the insurance provider. If the work is not covered or you choose not to file a claim, payment terms must be agreed upon before non-insured work begins.<br><br><strong>Important:</strong> Direct questions about insurance coverage, deductibles, and claim decisions to your insurance agent or claims representative.",
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
      url: `${siteUrl}/firedamagefaq.jpg`,
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
        name: "Residential Fire Damage FAQs",
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

export default function ResidentialFireDamageFaqPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/firedamagefaq.jpg"
          alt="Residential fire and smoke damage restoration services"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Residential Fire Damage and Contents Restoration FAQs</h1>

            <p>
              Get answers from our restoration experts about residential fire
              damage, smoke cleanup, contents restoration, storage, and
              insurance.
            </p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow text="If you still have questions about our residential fire restoration services, do not hesitate to call us at" />
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
