import Image from "next/image";

import FAQAccordion from "../../../components/FAQAccordion";
import RestorePeace from "../../../components/RestoringPeace";
import SideBarBox from "../../../components/SideBarBox";
import UncertainTo from "../../../components/UncertaintyTo";
import GetHelpNow from "../../../components/GetHelpNow";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs/residential/hoarding-faq`;

const title = "Hoarding Cleanup FAQs | Spokane & Coeur d’Alene";

const description =
  "Find answers about compassionate hoarding cleanup, costs, timelines, privacy, donations, storage, hazardous materials, and home recovery.";

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
        url: `${siteUrl}/calloutreslong.jpg`,
        width: 1200,
        height: 630,
        alt: "Compassionate residential hoarding cleanup services",
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
    images: [`${siteUrl}/calloutreslong.jpg`],
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
    question: "Will you clean the home without the customer being present?",
    answer:
      "We prefer to work with the customer in the home. However, in certain medical or accessibility-related situations, we may be able to complete the work with the customer’s ongoing input even if they are not physically present.<br><br>We will not clean out a home without the customer’s knowledge, approval, and understanding of the cleanup plan.",
  },
  {
    question: "How involved must the customer be in the cleanup process?",
    answer:
      "We do not ask the customer to physically move items, but we do rely on their guidance when decisions need to be made.<br><br>Customer involvement helps ensure that important, sentimental, or valuable belongings are handled appropriately and that the cleanup reflects the customer’s priorities.",
  },
  {
    question: "How do you work with a customer who feels resistant or unsure?",
    answer:
      "Our first priority is building trust and helping the customer understand the cleanup process. We move through the project carefully and communicate whenever decisions or changes become challenging.<br><br>The customer may be encouraged to move beyond their original comfort zone as progress is made, but our team remains focused on respect, consent, and clear communication.",
  },
  {
    question: "Can friends, neighbors, or church groups help?",
    answer:
      "Friends, neighbors, and community groups can provide valuable emotional and practical support. However, because hoarding cleanup can involve sensitive decisions, privacy concerns, and potential hazards, informal helpers may be better suited to supporting the customer before or after professional cleanup.<br><br>Your project manager can help determine when outside support may be appropriate.",
  },
  {
    question: "Can you help family members understand the cleanup process?",
    answer:
      "Yes. Our team can work with the customer and their family members to explain the cleanup plan, answer questions, and clarify how decisions will be handled.<br><br>We take the time to help everyone understand the process while respecting the customer’s privacy and authority over their belongings.",
  },
  {
    question: "What does hoarding cleanup cost?",
    answer:
      "Every project is different. Pricing may depend on the size and condition of the home, the volume and type of belongings, access to the property, disposal requirements, decision-making time, and any hazards discovered during the evaluation.<br><br>We will review the expected scope of work and pricing before the cleanup begins.",
  },
  {
    question: "How long does hoarding cleanup take?",
    answer:
      "The timeline varies depending on the size of the property, the volume of belongings, safety concerns, the customer’s decision-making pace, and the services required.<br><br>Some cleanups may take three to five days, while larger or more complex projects may require additional time. Preparation and planning may also take place before the physical cleanup begins.",
  },
  {
    question: "Does the customer receive breaks during the cleanup?",
    answer:
      "Yes. Each project is adjusted to the customer’s ability to focus, make decisions, and participate comfortably.<br><br>The team may work half days or full days depending on the customer’s needs, and breaks are encouraged whenever they are necessary.",
  },
  {
    question: "What happens to valuables found in the home?",
    answer:
      "Any valuables found in the home remain the property of the customer. Items with financial, sentimental, or personal importance will be brought to the customer’s attention as soon as they are discovered.<br><br>Our team will follow the agreed-upon process for documenting, protecting, and returning valuable items.",
  },
  {
    question: "Can you help donate items?",
    answer:
      "Yes. Once the customer chooses a donation organization, our team may be able to sort, document, and transport approved items to the donation center.<br><br>When available, donation receipts and inventories will be returned to the customer for their records. Customers should consult a tax professional regarding any potential tax deductions.",
  },
  {
    question: "Can you help sell items?",
    answer:
      "Our team does not sell the customer’s belongings directly. However, we may be able to connect the customer with third-party professionals who specialize in selling certain items.<br><br>Those businesses may charge commissions or other fees. ServiceMaster Restore does not share in the proceeds from sold belongings.",
  },
  {
    question: "Can you store items?",
    answer:
      "Storage options vary by location. Some ServiceMaster Restore locations may offer warehouse storage for an additional fee, while others may coordinate with third-party storage providers.<br><br>Our team can explain available options and help coordinate transportation. Long-term storage should be considered carefully so it does not simply postpone necessary decisions.",
  },
  {
    question: "Do you remove animals from hoarding situations?",
    answer:
      "When animals are involved, our priority is helping create a safer environment for both the customer and the animals.<br><br>Depending on the conditions, we may coordinate with veterinarians, animal-control agencies, shelters, rescue organizations, or adoption groups. Contact us to discuss the specific circumstances. We will handle the conversation as privately and respectfully as possible.",
  },
  {
    question: "Are you licensed, bonded, and insured?",
    answer:
      "Licensing, bonding, and insurance requirements can vary by location and by the type of work being performed. Contact ServiceMaster by Compass directly to confirm the credentials and coverage applicable to your project.<br><br>Our team members are trained to work respectfully, carefully, and professionally inside customers’ homes.",
  },
  {
    question: "What happens if mold or other hazardous materials are found?",
    answer:
      "If mold, sewage, animal waste, asbestos-containing materials, or other hazards are discovered, the team will stop and evaluate the affected area before continuing.<br><br>Additional remediation, testing, containment, disposal, or specialized contractors may be required. Any additional services and costs will be discussed with the customer before that work begins.",
  },
  {
    question: "What happens if you find a dangerous condition in the home?",
    answer:
      "Our team will identify and communicate visible safety concerns discovered during the initial walkthrough or cleanup process. These may include structural damage, mold, animal waste, unstable materials, blocked exits, or other hazards.<br><br>We will explain the concern, restrict access when necessary, and discuss the appropriate next steps with the customer.",
  },
  {
    question: "Can you help the customer maintain the home after cleanup?",
    answer:
      "Yes. We can help the customer and their family develop a practical plan for maintaining the cleaned areas and managing belongings going forward.<br><br>Follow-up support may also be available to check progress and determine whether additional assistance is needed.",
  },
  {
    question: "How discreet is the cleanup process?",
    answer:
      "We understand that privacy is extremely important. Our team will work with the customer to make the process as discreet as reasonably possible.<br><br>Access, vehicles, scheduling, communication, and disposal arrangements can be discussed before work begins so privacy concerns are addressed in the cleanup plan.",
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
      url: `${siteUrl}/calloutreslong.jpg`,
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
        name: "Hoarding Cleanup FAQs",
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

export default function ResidentialHoardingFaqPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/calloutreslong.jpg"
          alt="Compassionate residential hoarding cleanup and property recovery services"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Residential Hoarding Cleanup FAQs</h1>

            <p>
              Get answers about compassionate hoarding cleanup, privacy,
              timelines, belongings, donations, storage, and safety.
            </p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow text="Contact us today to discuss residential hoarding cleanup services." />
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
