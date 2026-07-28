import Image from "next/image";

import RestorePeace from "../../components/RestoringPeace";
import SideBarBox from "../../components/SideBarBox";
import GetHelpNow from "../../components/GetHelpNow";
import UncertainTo from "../../components/UncertaintyTo";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/faqs/residential`;

const title = "Residential Restoration FAQs | Spokane & Coeur d’Alene";

const description =
  "Find answers about residential water damage, mold remediation, fire damage, reconstruction, hoarding cleanup, and air duct cleaning services.";

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
        alt: "Residential restoration services in Spokane and Coeur d’Alene",
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

const faqList = [
  {
    title: "water damage FAQ",
    link: "/faqs/residential/water-damage-faq",
  },
  {
    title: "mold remediation faq",
    link: "/faqs/residential/mold-remediation-faq",
  },
  {
    title: "hoarding faq",
    link: "/faqs/residential/hoarding-faq",
  },
  {
    title: "reconstruction services faq",
    link: "/faqs/residential/reconstruction-services-faq",
  },
  {
    title: "air duct cleaning faq",
    link: "/faqs/residential/air-duct-cleaning-faq",
  },
  {
    title: "fire damage & content management faq",
    link: "/faqs/residential/fire-damage-faq",
  },
];

export default function ResidentialFaqs() {
  return (
    <main>
      <div className="top-image">
        <Image
          src="/sub-banner.jpg"
          alt="Residential restoration services in Spokane and Coeur d’Alene"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Residential Restoration FAQs</h1>

            <h2>Have Questions About Home Restoration? We Have Answers!</h2>

            <p>
              Depending on what restoration services you are seeking, your
              situation and needs can vary greatly. We encourage you to review
              our <strong>frequently asked questions (FAQs)</strong> list so you
              can make a prompt decision regarding the specific offerings you
              require. We know you don’t have time to wait for answers, and we
              hope our FAQs list expedites the process.
            </p>

            <p>
              To help you find your answer faster, we’ve broken our FAQs into
              sections around our services. If you have a question related to{" "}
              <a
                href="/faqs/residential/fire-damage-faq"
                className="underline-link"
              >
                fire damage
              </a>
              ,{" "}
              <a
                href="/faqs/residential/water-damage-faq"
                className="underline-link"
              >
                water damage
              </a>
              , or anything else at your home, you should have no trouble
              locating the answer you need.
            </p>

            <p>
              We have little doubt you’ll find what you’re looking for here.
              However, if you have a more complex issue that requires a
              conversation with one of our specialists, don’t hesitate to{" "}
              <a href="/contact" className="underline-link">
                contact your local ServiceMaster Restore!
              </a>
            </p>

            <div className="faq-boxes">
              {faqList.map((faq) => (
                <div key={faq.link} className="faq-box">
                  <h2>RESIDENTIAL {faq.title.toUpperCase()}</h2>

                  <div className="arrow-row">
                    <span className="arrow-line"></span>

                    <a href={faq.link} className="btn">
                      READ FAQS
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <GetHelpNow text="Our team is standing by to assist you with all your needs. Give us a call today at" />
          </div>

          <aside
            className="column-two"
            aria-label="Residential restoration FAQ categories"
          >
            <SideBarBox title="RESIDENTIAL FAQS" links={links} list={list} />
            <UncertainTo />
          </aside>
        </div>
      </div>

      <RestorePeace />
    </main>
  );
}
