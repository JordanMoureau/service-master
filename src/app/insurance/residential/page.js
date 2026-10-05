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
              and lives to normal. Whether the damage involves{" "}
              <Link href="/residential/water-damage" className="underline-link">
                water damage
              </Link>
              , fire, smoke, mold, or several related problems, our team
              responds quickly to assess the loss and begin restoration.
            </p>

            <p>
              Residential water losses can take many forms. A{" "}
              <Link
                href="/residential/water-damage/burst-pipe-damage"
                className="underline-link"
              >
                burst pipe
              </Link>{" "}
              may release water rapidly through walls, ceilings, and flooring,
              while{" "}
              <Link
                href="/residential/water-damage/flood-damage"
                className="underline-link"
              >
                flood damage
              </Link>{" "}
              can affect basements, crawl spaces, and multiple building
              materials at once. Identifying the source and extent of the loss
              helps establish the restoration scope early in the claim.
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
              That is especially important when the loss involves contaminated
              water. A{" "}
              <Link
                href="/residential/water-damage/sewage-backup"
                className="underline-link"
              >
                sewage backup
              </Link>{" "}
              can require specialized extraction, cleaning, sanitization, and
              removal of affected porous materials. These conditions often
              create a different restoration scope than a clean-water plumbing
              leak.
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
              For{" "}
              <Link href="/residential/water-damage" className="underline-link">
                residential water damage claims
              </Link>
              , documentation may include the source of the loss, affected rooms
              and materials, water extraction records, moisture readings, drying
              progress, photographs, and repair recommendations.
            </p>

            <p>
              Different sources of water loss may also create very different
              claims.{" "}
              <Link
                href="/residential/water-damage/burst-pipe-damage"
                className="underline-link"
              >
                Burst pipe damage
              </Link>{" "}
              can spread through several levels of a home before the water is
              shut off, while{" "}
              <Link
                href="/residential/water-damage/flood-damage"
                className="underline-link"
              >
                residential flooding
              </Link>{" "}
              may affect foundations, subflooring, drywall, insulation, and
              contents across a larger area.
            </p>

            <p>
              Fire losses can also involve significant water damage from
              firefighting efforts or sprinkler systems. When that happens, our{" "}
              <Link
                href="/residential/water-damage/flooding-from-fire"
                className="underline-link"
              >
                fire-related water damage restoration
              </Link>{" "}
              process addresses standing water, saturated materials, and hidden
              moisture alongside the fire and smoke restoration work.
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
                Communicating with the insurance agent about the
                policyholder&apos;s situation and project status
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
              These records can be especially useful when documenting{" "}
              <Link
                href="/residential/water-damage/burst-pipe-damage"
                className="underline-link"
              >
                burst pipe losses
              </Link>
              ,{" "}
              <Link
                href="/residential/water-damage/flood-damage"
                className="underline-link"
              >
                flooding
              </Link>
              ,{" "}
              <Link
                href="/residential/water-damage/sewage-backup"
                className="underline-link"
              >
                sewage backup damage
              </Link>
              , and other water-related claims where moisture can migrate beyond
              the immediately visible area.
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
