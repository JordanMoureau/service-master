import Image from "next/image";
import Link from "next/link";

import RestorePeace from "../../components/RestoringPeace";
import UncertainTo from "../../components/UncertaintyTo";
import SideBarBox from "../../components/SideBarBox";
import GetHelpNow from "../../components/GetHelpNow";
import JsonLd from "../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/insurance/residential`;

const title =
  "Residential Insurance Restoration Services | Spokane & Coeur d’Alene";

const description =
  "Learn how ServiceMaster by Compass supports insurance professionals and residential policyholders with 24/7 water, fire, smoke, and mold restoration services.";

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
        url: `${siteUrl}/residentialins.jpg`,
        width: 1200,
        height: 630,
        alt: "Residential insurance restoration services from ServiceMaster by Compass",
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
    images: [`${siteUrl}/residentialins.jpg`],
  },
};

const links = [
  "/insurance/residential",
  "/insurance/commercial",
  "/insurance/education",
];

const list = [
  "Residential Benefits and Services",
  "Commercial Benefits and Services",
  "Continuing Education Classes",
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
      url: `${siteUrl}/residentialins.jpg`,
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
        name: "Insurance Professionals",
        item: `${siteUrl}/insurance`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Residential Benefits and Services",
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Residential Insurance Restoration Support",
    serviceType: "Residential Property Damage Restoration",
    description,
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Spokane",
      },
      {
        "@type": "City",
        name: "Spokane Valley",
      },
      {
        "@type": "City",
        name: "Coeur d’Alene",
      },
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "Insurance agents, claims representatives, adjusters, and residential policyholders",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential Restoration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Water Damage Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Fire and Smoke Damage Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Mold Remediation",
          },
        },
      ],
    },
  },
];

export default function InsuranceResidentialPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/residentialins.jpg"
          alt="Residential insurance restoration services for damaged homes"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>
              Benefits and Services for Residential Insurance Policyholders
            </h1>

            <h2>Here to Assist After Home Property Damage</h2>

            <p>
              When the unexpected happens, the experts at ServiceMaster Restore
              are here to help your policyholders begin returning their homes
              and lives to normal. Whether the damage involves water, fire,
              smoke, mold, or several related problems, our team responds
              quickly to assess the loss and begin restoration.
            </p>

            <p>
              Our{" "}
              <Link href="/why-us/about-us" className="underline-link">
                restoration professionals
              </Link>{" "}
              understand that property damage may be a new and overwhelming
              experience for your policyholders. We guide them through the
              restoration process while keeping both the policyholder and
              insurance professionals informed.
            </p>

            <h2>Benefits of Partnering with ServiceMaster Restore</h2>

            <p>
              When you refer policyholders to our team, they receive a prompt
              response during a difficult and time-sensitive situation. We
              dispatch the appropriate restoration resources, evaluate the
              damage, and begin mitigation as quickly as conditions allow.
            </p>

            <p>
              A fast response may help limit additional damage, reduce
              disruption, and establish a clearer restoration plan for the
              policyholder and insurance carrier.
            </p>

            <p>
              As a full-service disaster restoration provider, we coordinate
              communication throughout the restoration process. Our emergency
              response team is available 24 hours a day, 7 days a week, 365 days
              a year.
            </p>

            <h2>Local Expertise Backed by a National Network</h2>

            <p>
              ServiceMaster Restore is part of a national restoration network,
              while ServiceMaster by Compass is locally owned and operated. Our
              team lives and works in the same communities as the customers and
              insurance professionals we serve.
            </p>

            <p>
              Insurance partners benefit from the systems, training, and
              resources of a national company combined with the communication
              and personal attention of a local restoration business.
            </p>

            <h2>Support for the Claims Process</h2>

            <p>
              We provide documentation and project communication designed to
              help policyholders, agents, adjusters, and claims representatives
              understand the restoration scope and current project status.
            </p>

            <p>
              Insurance coverage and claim decisions remain the responsibility
              of the carrier and are determined by the applicable policy.
            </p>

            <h2>Customer Service Through MasterMoments℠</h2>

            <p>
              MasterMoments℠ is a ServiceMaster Restore communication process
              designed to create a better experience for policyholders and
              insurance professionals. Depending on the project and claim, the
              process may include:
            </p>

            <ul>
              <li className="arrow-list">
                Walking the policyholder through recovery information and
                setting expectations for the restoration process
              </li>
              <li className="arrow-list">
                Communicating with the insurance agent about the policyholder’s
                situation and project status
              </li>
              <li className="arrow-list">
                Relaying the scope of damage, emergency services performed, and
                other relevant information to the claims representative
              </li>
            </ul>

            <h2>Keeping Everyone Informed with Project Updates</h2>

            <p>
              Our claims-management and documentation systems help organize
              project information in a mobile environment. Available information
              may include photos, estimates, mitigation records, drying data,
              contents information, and status updates.
            </p>

            <p>
              These tools support communication between restoration
              professionals, policyholders, and insurance carriers throughout
              the project.
            </p>

            <GetHelpNow text="Our residential restoration experts are standing by to take your call at" />
          </div>

          <aside
            className="column-two"
            aria-label="Insurance professional resources"
          >
            <SideBarBox title="Insurance" links={links} list={list} />

            <UncertainTo />
          </aside>
        </div>
      </div>

      <RestorePeace />
    </main>
  );
}
