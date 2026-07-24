import Image from "next/image";
import Link from "next/link";

import UncertainTo from "../../components/UncertaintyTo";
import GetHelpNow from "../../components/GetHelpNow";
import JsonLd from "../../components/JsonLd";

const siteUrl = "https://smcfireandwater.com";
const canonical = `${siteUrl}/why-us/about-us`;

const title =
  "About ServiceMaster by Compass | Spokane & Coeur d’Alene Restoration";

const description =
  "Learn about ServiceMaster by Compass, providing 24/7 residential and commercial water, fire, smoke, mold, and disaster restoration across Spokane and Coeur d’Alene.";

export const metadata = {
  title,
  description,

  alternates: {
    canonical,
  },

  openGraph: {
    title: "About ServiceMaster by Compass | Local Restoration Experts",
    description,
    url: canonical,
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: `${siteUrl}/aboutus.jpg`,
        width: 1200,
        height: 630,
        alt: "ServiceMaster by Compass restoration professionals",
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
    images: [`${siteUrl}/aboutus.jpg`],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
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
      url: `${siteUrl}/aboutus.jpg`,
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
        name: "Why Us",
        item: `${siteUrl}/why-us`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About Us",
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "ServiceMaster by Compass",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
    sameAs: [
      "https://www.youtube.com/channel/UCxhfBr5uexZ5FxWWnOtHEkQ",
      "https://www.facebook.com/p/ServiceMaster-by-Compass-100063756032122/",
      "https://www.linkedin.com/company/servicemaster-fire-water-restoration-by-compass",
      "https://www.instagram.com/servicemaster_by_compass",
      "https://g.co/kgs/PCuFHgp",
      "https://yelp.com/biz/servicemaster-fire-and-water-restoration-by-compass-spokane",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Spokane",
        containedInPlace: {
          "@type": "State",
          name: "Washington",
        },
      },
      {
        "@type": "City",
        name: "Spokane Valley",
        containedInPlace: {
          "@type": "State",
          name: "Washington",
        },
      },
      {
        "@type": "City",
        name: "Coeur d’Alene",
        containedInPlace: {
          "@type": "State",
          name: "Idaho",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#restoration-service`,
    name: "Residential and Commercial Restoration Services",
    serviceType: "Property Damage Restoration",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Restoration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Damage Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fire and Smoke Damage Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mold Remediation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Weather Damage Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Odor Removal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Specialty Restoration Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Pre-Loss Planning",
          },
        },
      ],
    },
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />

      <div className="top-image">
        <Image
          src="/aboutus.jpg"
          alt="ServiceMaster by Compass restoration professionals"
          width={1920}
          height={600}
          priority
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>About ServiceMaster Restore</h1>

            <h2>Residential and Commercial Restoration Services</h2>

            <p>
              Since its founding in 1929 by Marion E. Wade, a former minor
              league baseball player, ServiceMaster has stood by its word and
              its customers. Today, ServiceMaster Restore is committed to
              helping communities rebuild after disasters, helping businesses
              return to work, and helping neighbors restore their homes to
              pre-loss condition.
            </p>

            <p>
              Whether you are dealing with a burst pipe affecting one home or a
              natural disaster affecting an entire community, we are by your
              side <strong>24/7/365</strong> to help restore your property and
              your peace of mind.
            </p>

            <div className="black-box">
              <h2>
                Did your property suffer damage, and you are not sure what to do
                next? We do.{" "}
                <Link href="/contact">Contact ServiceMaster by Compass</Link> to
                get the help you need.
              </h2>
            </div>

            <h2>Local Restoration Service Backed by a National Network</h2>

            <p>
              When disaster strikes, it hits close to home. ServiceMaster
              Restore includes locally owned franchises whose team members live
              in the communities they serve. We are committed to helping make
              our neighborhoods whole again after the worst happens.
            </p>

            <h3>We help you move from crisis through resolution by:</h3>

            <ul>
              <li className="arrow-list">
                Tailoring our resources and expertise to your property and
                situation
              </li>
              <li className="arrow-list">
                Providing a team that works with you from assessment and
                mitigation through restoration
              </li>
              <li className="arrow-list">
                Drawing on decades of cleaning and restoration experience
              </li>
              <li className="arrow-list">
                Helping you navigate the unknown while restoring your property
                and peace of mind
              </li>
            </ul>

            <h2>Our Residential and Commercial Restoration Services</h2>

            <p>
              As a full-service restoration company, we offer solutions for a
              wide range of property damage scenarios.
            </p>

            <h3>Our residential services include:</h3>

            <ul>
              <li className="arrow-list">
                <Link href="/residential/water-damage">
                  Water Damage Restoration
                </Link>
              </li>
              <li className="arrow-list">
                <Link href="/residential">
                  Fire and Smoke Damage Restoration
                </Link>
              </li>
              <li className="arrow-list">
                <Link href="/residential/mold">Mold Remediation</Link>
              </li>
              <li className="arrow-list">
                <Link href="/residential/weather">
                  Weather Damage Restoration
                </Link>
              </li>
              <li className="arrow-list">
                <Link href="/residential/odor">Odor Removal</Link>
              </li>
              <li className="arrow-list">
                <Link href="/residential/specialty-services">
                  Specialty Restoration Services
                </Link>
              </li>
            </ul>

            <h3>Our commercial services include:</h3>

            <ul>
              <li className="arrow-list">
                <Link href="/commercial/pre-loss-planning">
                  Pre-Loss Planning
                </Link>
              </li>
              <li className="arrow-list">
                <Link href="/commercial">Water Damage Restoration</Link>
              </li>
              <li className="arrow-list">
                <Link href="/commercial">
                  Fire and Smoke Damage Restoration
                </Link>
              </li>
              <li className="arrow-list">
                <Link href="/commercial">Mold Remediation</Link>
              </li>
              <li className="arrow-list">
                <Link href="/commercial/weather">
                  Weather Damage Restoration
                </Link>
              </li>
              <li className="arrow-list">
                <Link href="/commercial">Odor Removal</Link>
              </li>
              <li className="arrow-list">
                <Link href="/commercial">Specialty Restoration Services</Link>
              </li>
              <li className="arrow-list">
                <Link href="/commercial">Ancillary Services</Link>
              </li>
              <li className="arrow-list">
                <Link href="/commercial">Priority Response</Link>
              </li>
            </ul>

            <p>
              We understand the stress and disruption these events can cause. We
              work quickly to help return your property to its pre-loss
              condition.
            </p>

            <div className="yellow-box">
              No matter the challenge, we are here to help. Call{" "}
              <a href="tel:+15095355440">(509) 535-5440</a> or{" "}
              <Link href="/contact">contact our restoration team online</Link>.
              We are available 24 hours a day, 365 days a year.
            </div>

            <h2>We Work with Insurance Providers</h2>

            <p>
              At ServiceMaster Restore, our professionals work with homeowners,{" "}
              <Link href="/insurance" className="underline-link">
                insurance professionals
              </Link>
              , and business principals to navigate the uncertainty following
              water, fire, smoke, and other property damage.
            </p>

            <p>
              Our team can help document damage, communicate the restoration
              scope, and provide information required during the insurance
              claims process. Coverage decisions remain with your insurance
              carrier and depend on the terms of your policy.
            </p>

            <h2>Strength Through Experience and Support</h2>

            <p>
              ServiceMaster Restore combines the attention of a local
              restoration company with the training, processes, and resources of
              a national restoration network.
            </p>

            <h2>An Industry Resource for Property Restoration</h2>

            <p>
              Our restoration professionals have experience handling a wide
              range of disaster scenarios, from individual plumbing failures to
              severe storms, fires, and large-scale property losses.
            </p>

            <p>
              ServiceMaster Restore teams use established processes, ongoing
              training, specialized equipment, and documented restoration
              practices to help properties recover safely and efficiently.
            </p>

            <h2>Quality Restoration Standards</h2>

            <p>
              The ServiceMaster Restore Quality Restoration Vendor network
              supports consistent service expectations, communication,
              documentation, safety, and restoration practices across
              participating locations.
            </p>

            <h3>Participating teams are expected to:</h3>

            <ul>
              <li className="arrow-list">
                Provide responsive communication throughout the restoration
                process
              </li>
              <li className="arrow-list">
                Use responsible estimating and billing practices
              </li>
              <li className="arrow-list">
                Complete ongoing training in restoration methods, products, and
                technologies
              </li>
              <li className="arrow-list">
                Follow established ServiceMaster Restore processes and service
                requirements
              </li>
              <li className="arrow-list">
                Maintain applicable liability and workers’ compensation coverage
              </li>
              <li className="arrow-list">
                Address customer-service concerns promptly and professionally
              </li>
              <li className="arrow-list">
                Follow appropriate safety and environmental practices
              </li>
            </ul>

            <h2>Part of the ServiceMaster Network</h2>

            <p>
              ServiceMaster Restore provides residential and commercial disaster
              restoration services through a network of independently owned
              franchises and other service locations.
            </p>

            <p>
              ServiceMaster by Compass is the local restoration team serving
              Spokane, Spokane Valley, Coeur d’Alene, and surrounding
              communities.
            </p>

            <h2>Don’t Know What to Do Next? We Do.</h2>

            <ul>
              <li className="arrow-list">
                We are ready to help restore your home or business after
                property damage.
              </li>
              <li className="arrow-list">
                Our trained and equipped professionals respond to emergency
                restoration needs 24/7/365.
              </li>
              <li className="arrow-list">
                We are committed to providing clear communication and
                professional service throughout your recovery.
              </li>
            </ul>

            <div className="italic-highlight">
              “If I had an hour to spare, I would have enough time to tell you
              how wonderful ServiceMaster Restore has been throughout this
              entire process. The crew of guys they brought were wonderful. I
              thank God for your incredibly competent and caring staff.”
            </div>

            <GetHelpNow text="When disaster strikes, every minute that passes can make the problem worse. Give ServiceMaster Restore a call today at" />
          </div>

          <aside className="column-two" aria-label="Restoration assistance">
            <UncertainTo />
          </aside>
        </div>
      </div>
    </main>
  );
}
