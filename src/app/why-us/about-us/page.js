"use client";

import UncertainTo from "../../components/UncertaintyTo";
import GetHelpNow from "../../components/GetHelpNow";
// imports

import JsonLd from "../../components/JsonLd";

// --- SEO + JSON-LD ---
const canonical = "https://smcfireandwater.com/why-us/about-us";
const title =
  "About ServiceMaster by Compass | Spokane & Coeur d’Alene Restoration";
const description =
  "Locally owned, nationally backed. ServiceMaster by Compass provides 24/7 water damage cleanup, fire & smoke restoration, and mold remediation across Spokane, Spokane Valley & Coeur d’Alene.";

// app/why-us/about-us/page.tsx

export const metadata = {
  title: "About ServiceMaster by Compass | Spokane & Coeur d’Alene Restoration",
  description:
    "Locally owned, nationally backed. ServiceMaster by Compass provides 24/7 water damage cleanup, fire & smoke restoration, and mold remediation across Spokane, Spokane Valley & Coeur d’Alene.",
  keywords: [
    "mold remediation and removal Spokane WA",
    "mold removal services Coeur d’Alene ID",
    "fire damage restoration Spokane WA",
    "mold abatement service Coeur d’Alene ID",
    "water damage clean up Spokane Valley WA",
    "fire damage restoration service near me Spokane",
    "restoration mold removal CDA Idaho",
    "fire damage restoration companies Spokane WA",
    "emergency flood cleanup Coeur d’Alene ID",
  ],
  alternates: {
    canonical: "https://smcfireandwater.com/why-us/about-us",
  },
  openGraph: {
    title: "About ServiceMaster by Compass — Local Experts, National Support",
    description:
      "24/7 restoration for water, fire & smoke, and mold in Spokane, Spokane Valley & Coeur d’Alene.",
    url: "https://smcfireandwater.com/why-us/about-us",
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/aboutus.jpg",
        width: 1200,
        height: 630,
        alt: "About ServiceMaster by Compass Spokane & Coeur D'Alene",
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
    title:
      "About ServiceMaster by Compass | Spokane & Coeur d’Alene Restoration",
    description:
      "Locally owned, nationally backed restoration pros. 24/7 water, fire & mold services.",
    images: ["https://smcfireandwater.com/aboutus.jpg"],
  },
};

// JSON-LD
const jsonLd = [
  // AboutPage
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "About ServiceMaster by Compass",
    description,
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/aboutus.jpg",
      width: 1200,
      height: 630,
    },
    breadcrumb: { "@id": `${canonical}#breadcrumb` },
    about: { "@id": "https://smcfireandwater.com/#organization" },
  },
  // Breadcrumbs
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smcfireandwater.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Why Us",
        item: "https://smcfireandwater.com/why-us",
      },
      { "@type": "ListItem", position: 3, name: "About Us", item: canonical },
    ],
  },
  // Organization (entity hub)
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://smcfireandwater.com/#organization",
    name: "ServiceMaster by Compass",
    url: "https://smcfireandwater.com",
    logo: "https://smcfireandwater.com/logo.png",
    sameAs: [
      "https://www.youtube.com/channel/UCxhfBr5uexZ5FxWWnOtHEkQ",
      "https://www.facebook.com/p/ServiceMaster-by-Compass-100063756032122/",
      "https://www.linkedin.com/company/servicemaster-fire-water-restoration-by-compass",
      "https://www.instagram.com/servicemaster_by_compass",
      "https://g.co/kgs/PCuFHgp",
      "https://yelp.com/biz/servicemaster-fire-and-water-restoration-by-compass-spokane",
    ],
    areaServed: [
      { "@type": "Place", name: "Spokane, WA" },
      { "@type": "Place", name: "Spokane Valley, WA" },
      { "@type": "Place", name: "Coeur d’Alene, ID" },
    ],
    knowsAbout: [
      "water damage clean up Spokane Valley WA",
      "fire damage restoration Spokane WA",
      "mold remediation and removal Spokane WA",
      "mold removal services Coeur d’Alene ID",
      "mold abatement service Coeur d’Alene ID",
      "emergency flood cleanup Coeur d’Alene ID",
    ],
  },
  // Service entity + catalog (maps to bullets on page)
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Residential & Commercial Restoration",
    provider: { "@id": "https://smcfireandwater.com/#organization" },
    areaServed: ["Spokane WA", "Spokane Valley WA", "Coeur d’Alene ID"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Restoration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Water Damage Restoration" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fire & Smoke Damage Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mold Remediation & Removal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Weather / Storm Damage" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Odor Removal" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Specialty & Contents Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pre-Loss Planning (Commercial)",
          },
        },
      ],
    },
  },
];

export default function AboutUs() {
  return (
    <div>
      <JsonLd data={jsonLd} />
      <div className="top-image">
        <img src="/aboutus.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>About ServiceMaster Restore</h1>
            <h2>Residential & Commercial Restoration Services</h2>
            <p>
              Since its founding in 1929 by Marion E. Wade, a former minor
              league baseball player, ServiceMaster has stood by its word and
              its customers. As a result, it has grown into a world-class
              company composed of a family of brands that provides residential
              and commercial services to 5 million customers in the past year
              alone. Today, ServiceMaster Restore is committed to helping our
              communities rebuild after a disaster, helping businesses get back
              to work, and helping our neighbors restore their homes to pre-loss
              conditions. Whether dealing with a burst pipe that impacts one
              home or a natural disaster that impacts the entire community,
              we’re by your side <strong>24/7/365</strong> to restore your
              property and your peace of mind.
            </p>

            <div className="black-box">
              <h2>
                Did your property suffer loss and aren't sure what to do next?
                We do. <a>Contact your local ServiceMaster Restore company</a>{" "}
                to get the help you need.
              </h2>
            </div>

            <h2>Local Restoration Service Backed by a National Network</h2>

            <p>
              When disaster strikes, it hits close to home. Our nationwide
              company has locally-owned franchises that employ team members who
              live in the very communities we serve. We’re committed to helping
              make our neighborhoods whole again after the worst happens.
            </p>

            <h3>We can help you navigate from crisis through resolution by:</h3>

            <ul>
              <li className="arrow-list">
                Tailoring our vast resources and expertise to assist in any
                situation
              </li>
              <li className="arrow-list">
                Providing a team that works shoulder-to-shoulder from assessment
                and mitigation through restoration
              </li>
              <li className="arrow-list">
                Leveraging our 65+ years of experience
              </li>
              <li className="arrow-list">
                Anticipating and navigating the unknown to confidently restore
                your property and peace of mind
              </li>
            </ul>

            <h2>Our Residential & Commercial Restoration Services</h2>
            <p>
              As a trusted restoration company, we offer a wide range of
              services to address various property damage scenarios.
            </p>

            <h3>Some of our residential services include:</h3>

            <ul>
              <li className="arrow-list">
                <a href="/residential/water-damage">Water Damage Restoration</a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">
                  Fire & Smoke Damage Restoration
                </a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">Mold Remediation</a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">Weather Damage</a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">Odor Damage</a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">Specialty Services</a>
              </li>
            </ul>

            <h3>Some of our commercial services include:</h3>

            <ul>
              <li className="arrow-list">
                <a href="/residential/water-damage">Pre-Loss Planning</a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">Water Damage Restoration</a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">
                  Fire & Smoke Damage Restoration
                </a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">Mold Remediation</a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">Weather Damage</a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">Odor Damage</a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">Specialty Services</a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">Ancillary Services</a>
              </li>
              <li className="arrow-list">
                <a href="/residential/water-damage">Priority Response</a>
              </li>
            </ul>

            <p>
              We understand the stress and disruption these events can cause. We
              work quickly to bring your property back to it's pre-loss
              condition.
            </p>

            <div className="yellow-box">
              No matter the challenge, we're here to help. Contact us at{" "}
              <a>(509) 646-7488</a> or{" "}
              <a>reach out to a ServiceMaster Restore location in your area</a>.
              We're available 24/7, 365 days a year.
            </div>

            <h2>We Partner with Insurance Providers</h2>

            <p>
              At ServiceMaster Restore, our professionals work with homeowners,
              <a className="underline-link">insurance professionals</a>, and
              business principles to navigate the uncertainty following water or
              fire damage. We have agreements with some of the largest property
              insurers in the United States and can help homeowners navigate
              through the insurance claims process with ease. Our claims
              management department provides industry-leading services to help
              make the process as smooth as possible for both the homeowner and
              the insurance partner.
            </p>

            <h2>Our Stats Prove There’s Strength In Numbers</h2>
            <h3>ServiceMaster Restore currently has:</h3>

            <ul>
              <li className="arrow-list">
                More than 800 locations throughout the United States
              </li>
              <li className="arrow-list">
                Additional locations in 14 countries around the world
              </li>
              <li className="arrow-list">
                Over $1 billion in annual customer revenue
              </li>
              <li className="arrow-list">
                One of the highest customer satisfaction scores in the industry
              </li>
              <li className="arrow-list">
                Over 65 years of cleaning and restoration experience
              </li>
            </ul>

            <h2>The Industry’s Go-To Advisor</h2>
            <p>
              With over 65 years of experience, our expert staff has the proven
              guidance and expertise to assist in a wide range of disaster
              restoration scenarios. We’ve even established standards that are
              now accepted and expected across the industry. From destructive
              hurricanes to raging wildfires, the professionals at ServiceMaster
              Restore have the knowledge, processes, and equipment necessary to
              get the job done right.
            </p>

            <h2>Developing Superior Industry Standards</h2>
            <p>
              Established in 1991, the ServiceMaster Restore Quality Restoration
              Vendor (QRV) Network is an internal standards program that we
              developed to provide superior standards to the industry. Our
              program has now evolved into industry-accepted and expected best
              practices, as referred to in Service Level Agreements (SLAs) and
              Key Performance Indicators (KPIs).
            </p>
            <p>
              ServiceMaster Restore closely monitors all members of the QRV
              network to ensure complete adherence to the following
              requirements.
            </p>

            <h3> Each member:</h3>

            <ul>
              <li className="arrow-list">
                Demonstrates the ability to deliver every aspect of the
                ServiceMaster Restore service guarantees, including
                accessibility, response time, communications capabilities,
                quality results, and conscientious safety controls
              </li>
              <li className="arrow-list">
                Employs integrity in estimating and billing practices
              </li>
              <li className="arrow-list">
                Completes and maintains ongoing employee training programs that
                keep ServiceMaster Restore on the cutting edge of effective
                restoration techniques, products, and technologies
              </li>
              <li className="arrow-list">
                Uses the proven ServiceMaster Restore equipment, processes, and
                products
              </li>
              <li className="arrow-list">
                Performs all services in compliance with ServiceMaster Restore
                specifications
              </li>

              <li className="arrow-list">
                Meets or exceeds the ServiceMaster Restore requirements for
                General Liability Insurance and Workers’ Compensation Insurance
              </li>
              <li className="arrow-list">
                Resolves customer service issues swiftly and professionally
              </li>
              <li className="arrow-list">
                Commits to the ServiceMaster Restore principles of environmental
                stewardship
              </li>
            </ul>

            <h2>A ServiceMaster Company</h2>
            <p>
              ServiceMaster Restore is among the ServiceMaster family of brands
              that provide residential and commercial services, including home
              service contracts, furniture repair, home inspections, residential
              and commercial cleaning, and disaster restoration. These services
              are provided through a network of company-owned and franchised
              service centers and business units, operating under the following
              brands:
            </p>

            <ul>
              <li className="arrow-list">
                <a href="/" className="underline-link bold">
                  Merry Maids
                </a>
                : Residential cleaning services with over 40 years of experience
              </li>
              <li className="arrow-list">
                <a href="/" className="underline-link bold">
                  ServiceMaster Clean
                </a>
                : Residential and commercial cleaning services
              </li>
              <li className="arrow-list">
                <a href="/" className="underline-link bold">
                  ServiceMaster Restore
                </a>
                : Residential and commercial disaster restoration services with
                over 65 years of experience
              </li>
              <li className="arrow-list">
                <a href="/" className="underline-link bold">
                  ServiceMaster Recovery Management® (SRM)
                </a>
                : Commercial disaster restoration services for just about every
                industry and equipped for large-scale losses as well as everyday
                small-scale problems
              </li>

              <li className="arrow-list">
                <a href="/" className="underline-link bold">
                  Two Men and a Truck®
                </a>
                : Full-service moving company which offers customers
                comprehensive home and business relocation, packing and
                unpacking, and junk removal services
              </li>
            </ul>

            <h2>Don’t Know What To Do Next? We Do.</h2>
            <ul>
              <li className="arrow-list">
                We’re ready to restore your home or place of business after any
                disaster.
              </li>
              <li className="arrow-list">
                Our trained and well-equipped experts respond to your emergency
                needs, 24/7/365.
              </li>
              <li className="arrow-list">
                With you as our priority, we’re committed to delivering an
                exceptional customer experience.
              </li>
            </ul>

            <div className="italic-highlight">
              “If I had an hour to spare, I would have enough time to tell you
              how wonderful ServiceMaster Restore has been throughout this
              entire process. The crew of guys they brought were wonderful. I
              thank God for your incredibly competent and caring staff.”
            </div>

            <GetHelpNow
              text={
                "When disaster strikes, every minute that goes by makes the problem worse. Don’t delay. Give ServiceMaster Restore a call today at"
              }
            />
          </div>
          <div className="column-two">
            <UncertainTo />
          </div>
        </div>
      </div>
    </div>
  );
}
