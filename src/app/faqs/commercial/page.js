import Image from "next/image";
import Link from "next/link";

import RestorePeace from "../../components/RestoringPeace";
import SideBarBox from "../../components/SideBarBox";
import GetHelpNow from "../../components/GetHelpNow";
import UncertainTo from "../../components/UncertaintyTo";
import JsonLd from "../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs/commercial`;

const title = "Commercial Restoration FAQs | Spokane & Coeur d’Alene";

const description =
  "Find answers to common questions about commercial water damage, fire restoration, mold remediation, and air duct cleaning in Spokane and Coeur d’Alene.";

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
        url: `${siteUrl}/commercialfaqs.jpg`,
        width: 1200,
        height: 630,
        alt: "Commercial property restoration services from ServiceMaster by Compass",
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
    images: [`${siteUrl}/commercialfaqs.jpg`],
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

const faqList = [
  {
    title: "Mold Remediation FAQ",
    link: "/faqs/commercial/mold-remediation-faq",
    description:
      "Answers about identifying, removing, and preventing mold in commercial properties.",
  },
  {
    title: "Water Damage FAQ",
    link: "/faqs/commercial/water-restoration-faq",
    description:
      "Answers about emergency water extraction, drying, and commercial property recovery.",
  },
  {
    title: "Air Duct Cleaning FAQ",
    link: "/faqs/commercial/air-duct-faq",
    description:
      "Answers about commercial air duct cleaning, indoor air quality, and HVAC system care.",
  },
  {
    title: "Fire Restoration FAQ",
    link: "/faqs/commercial/fire-restoration-faq",
    description:
      "Answers about commercial fire damage, smoke cleanup, and property restoration.",
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
      url: `${siteUrl}/commercialfaqs.jpg`,
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
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Commercial Restoration FAQ Categories",
    numberOfItems: faqList.length,
    itemListElement: faqList.map((faq, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: faq.title,
      description: faq.description,
      url: `${siteUrl}${faq.link}`,
    })),
  },
];

export default function CommercialFaqsPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/commercialfaqs.jpg"
          alt="Commercial property restoration services from ServiceMaster by Compass"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>
              Frequently Asked Questions About Commercial Restoration Services
            </h1>

            <p>
              Starting a business from scratch is a dream many entrepreneurs can
              only hope to realize. But you did it. Now, your livelihood is in
              jeopardy due to an unforeseen disaster that has taken away your
              sense of security and certainty.
            </p>

            <p>
              At ServiceMaster Restore, we know how challenging it can be to
              pick up the pieces of a thriving company because we have supported
              many business owners and property managers after property damage.
              Through our years of experience working with commercial customers,
              we have developed a clear understanding of the questions property
              owners commonly ask.
            </p>

            <p>
              To help you move through the restoration process without waiting
              for answers, we have compiled some of our most frequently asked
              questions for you to review.
            </p>

            <p>
              Whether you have experienced an unexpected fire or discovered mold
              inside your office, we use advanced tools and proven methods to
              support a successful restoration project. Our compassionate,
              professional restoration experts will walk you through the process
              and help you navigate your recovery 24 hours a day, 7 days a week,
              365 days a year.
            </p>

            <p>
              Our goal is to lighten your workload, restore certainty, and help
              you get your business operating again as quickly as possible.
              Review the service categories below to find the information you
              need. Some questions cannot be fully answered on a webpage, so
              please contact our team whenever you need additional guidance.
            </p>

            <GetHelpNow text="Our team is standing by to assist you with all your commercial restoration needs. Give us a call today at" />

            <p>
              Let us help you reopen your doors so you can get back to serving
              your customers and the local community.
            </p>

            <div className="faq-boxes">
              {faqList.map((faq) => (
                <section key={faq.link} className="faq-box">
                  <h2>Commercial {faq.title}</h2>

                  <div className="arrow-row">
                    <span className="arrow-line" aria-hidden="true" />

                    <Link
                      href={faq.link}
                      className="btn"
                      aria-label={`Read the commercial ${faq.title}`}
                    >
                      Read FAQs
                    </Link>
                  </div>
                </section>
              ))}
            </div>

            <GetHelpNow text="Our team is standing by to assist you with all your commercial restoration needs. Give us a call today at" />
          </div>

          <aside className="column-two" aria-label="Commercial FAQ categories">
            <SideBarBox title="Commercial FAQs" links={links} list={list} />

            <UncertainTo />
          </aside>
        </div>
      </div>

      <RestorePeace />
    </main>
  );
}
