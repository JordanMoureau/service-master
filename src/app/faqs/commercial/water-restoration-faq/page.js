import Image from "next/image";

import FAQAccordion from "../../../components/FAQAccordion";
import RestorePeace from "../../../components/RestoringPeace";
import SideBarBox from "../../../components/SideBarBox";
import UncertainTo from "../../../components/UncertaintyTo";
import GetHelpNow from "../../../components/GetHelpNow";
import JsonLd from "../../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs/commercial/water-restoration-faq`;

const title = "Commercial Water Damage FAQs | Spokane & Coeur d’Alene";

const description =
  "Get answers about commercial water damage restoration, drying equipment, wet flooring, sewage cleanup, insurance, and recovery in Spokane and Coeur d’Alene.";

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
        url: `${siteUrl}/commercialwater.jpg`,
        width: 1200,
        height: 630,
        alt: "Commercial water damage restoration services from ServiceMaster by Compass",
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
    images: [`${siteUrl}/commercialwater.jpg`],
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
    question: "How long will it take my property to dry?",
    answer:
      "Drying time is determined by several factors, including the location, duration, and source of the water; the types of affected building materials; weather conditions; and how quickly emergency services begin.<br><br>Through consistent monitoring and evaluation, we can determine when the drying process is complete. Carpet may feel dry to the touch while padding and subfloors remain wet underneath. Although every property is different, drying may take between three and five days or longer, depending on the conditions.",
  },
  {
    question: "How do I know when my property is completely dry?",
    answer:
      "Testing with specialized moisture-detection equipment is the proper way to determine whether affected materials are completely dry. Touch alone can be a misleading indicator.",
  },
  {
    question: "Will turning up the heat help dry things out?",
    answer:
      "Not necessarily. Our technicians will adjust the temperature to support the proper drying conditions. Please do not change the temperature setting or shut off the HVAC system, as doing so may prolong the drying process.",
  },
  {
    question:
      "My wood floors are wet and buckling. Will they have to be replaced?",
    answer:
      "Wood flooring must be evaluated throughout the drying process. We use specialized drying systems and dehumidifiers to create conditions that allow wood floors to dry more efficiently and potentially return to their original shape.<br><br>Because hardwood flooring and urethane finishes are dense, drying may take longer. If you have filed an insurance claim, your adjuster will work with you to make the final decision about whether the floors should be refinished or replaced.",
  },
  {
    question: "Can you restore my water-damaged furniture?",
    answer:
      "The extent of the damage and the construction of the furniture will determine whether it can be restored. Furniture must be dried before the damage can be properly assessed.<br><br>Items that cannot be salvaged will be documented. If anything must be discarded, we will ask you to sign a customer release form before taking action.",
  },
  {
    question: "Will there be lingering odors after water restoration services?",
    answer:
      "It is not unusual to notice odors during the drying process. Increased heat and humidity may intensify odors coming from damp building materials or previous spills and accidents.<br><br>These normal drying odors should not be confused with mold. As drying continues and humidity levels decrease, the odors will often fade. Deodorizers may also be used to minimize them.",
  },
  {
    question: "Does everything need to be moved out during restoration?",
    answer:
      "Not usually. If furniture, equipment, inventory, or other items must be moved, we will let you know in advance and explain the next steps.",
  },
  {
    question: "My ceilings are wet. What needs to be done?",
    answer:
      "Our technicians will evaluate the moisture content and determine the severity of the damage. A portion of the ceiling may need to be removed to improve ventilation and access trapped moisture. Wet insulation may also present a hazard and may need to be removed.",
  },
  {
    question: "Should I open the windows to help the drying process?",
    answer:
      "Opening windows is not always recommended. Outdoor temperature and humidity conditions can interfere with the controlled drying environment. Your technician will determine whether outside air will help or hinder the process.",
  },
  {
    question: "May I walk through the area during the drying process?",
    answer:
      "We strongly recommend keeping foot traffic in affected areas to a minimum. Your technician can identify which areas are safe to enter and whether any additional precautions are necessary.",
  },
  {
    question: "Can my carpet be restored, or will it need to be replaced?",
    answer:
      "<strong>Several conditions may prevent carpet from being salvaged:</strong><br><br>• Delamination, which occurs when the backing separates from the carpet fibers<br>• Loss of adhesion caused by prolonged water exposure or the age of the carpet<br>• Permanent staining<br>• Damage to the flooring beneath the carpet<br>• Sewage contamination<br>• Water trapped beneath nonporous flooring<br><br>If carpet covers hardwood flooring, it may need to be removed to allow the wood underneath to dry properly.",
  },
  {
    question: "Why did the technician leave wet carpet on my stairs?",
    answer:
      "Carpet on stairs is often left in place for safety reasons. Exposed tack strips and staples can be dangerous, especially on steps.<br><br>However, carpet may need to be removed from stairs when sewage contamination is present or when removal is necessary to protect hardwood steps. If the carpet is unsalvageable, it may be removed when replacement carpet is installed.",
  },
  {
    question: "How will you match my carpet pad?",
    answer:
      "A sample of the existing carpet pad may be brought to our office for matching. When available, an identical pad will be used. If the original pad is unavailable, we will provide one with a similar quality, thickness, and density. The replacement may differ slightly in color.",
  },
  {
    question: "What will you do with my area rugs?",
    answer:
      "Area rugs may be transported to our facility for specialized care. They must be dried carefully to minimize color bleeding and discoloration. Depending on their condition and materials, the rugs will be dried, cleaned, and returned.",
  },
  {
    question: "Why are air movers and dehumidifiers used?",
    answer:
      "Water can be absorbed into drywall, baseboards, subflooring, wood, and other building materials. High-velocity air movers accelerate the release of that moisture into the air, while dehumidifiers remove excess moisture from the environment.<br><br>Together, this equipment helps protect the property and creates conditions for efficient drying. Please do not turn off or move drying equipment without contacting ServiceMaster Restore.",
  },
  {
    question: "Who is responsible for monitoring the drying equipment?",
    answer:
      "Our water damage mitigation specialists will place and monitor the equipment to achieve efficient drying results. Please make sure that no one turns off or moves the equipment. Notify our office immediately if the power goes out or any equipment stops operating.",
  },
  {
    question: "What will it cost to run the equipment?",
    answer:
      "The cost will depend on the type and number of machines being used, local electrical rates, and the length of the drying process. As a general estimate, operating each piece of equipment may cost around $1 per day, but actual costs can vary.",
  },
  {
    question: "What happens if sewage contaminated the property?",
    answer:
      "Hard, nonporous surfaces may be cleaned and sanitized. Items that cannot be safely sanitized may need to be discarded.<br><br>Porous materials such as drywall, ceiling tiles, insulation, particleboard, and paneling that have been directly affected by sewage will typically need to be removed during emergency service.",
  },
  {
    question: "Who is responsible for paying for the service?",
    answer:
      "Before work begins, the responsible parties will need to sign an authorization for payment. If the work is part of a covered insurance claim, ServiceMaster Restore may collect the deductible from you and bill the remaining approved amount to your insurance provider.<br><br>If the claim is denied, the loss is not covered, or you choose not to file a claim, you will be responsible for payment according to the terms of the service agreement.",
  },
];

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
      url: `${siteUrl}/commercialwater.jpg`,
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
        name: "Commercial Water Damage FAQ",
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
        text: item.answer
          .replace(/<br\s*\/?>/gi, " ")
          .replace(/<[^>]+>/g, "")
          .replace(/•/g, ""),
      },
    })),
  },
];

export default function CommercialWaterRestorationFaqPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/commercialwater.jpg"
          alt="Commercial water damage restoration and structural drying services"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Commercial Water Damage Restoration FAQs</h1>

            <p>
              Turn to us for answers to your commercial water damage restoration
              questions.
            </p>

            <FAQAccordion items={faqItems} />

            <GetHelpNow text="If you still have questions about our commercial water restoration services, do not hesitate to call us at" />
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
