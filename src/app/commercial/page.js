"use client";

import SideBarBox from "../components/SideBarBox";
import UncertainTo from "../components/UncertaintyTo";

import RestorePeace from "../components/RestoringPeace";
// imports
import { NextSeo } from "next-seo";
import JsonLd from "../components/JsonLd";

// --- SEO + JSON-LD ---
const canonical = "https://smcfireandwater.com/commercial";
const title = "Commercial Restoration Services | Spokane WA & Coeur d’Alene ID";
const description =
  "24/7 commercial restoration for water, fire & smoke, mold, storm damage, odor removal, and pre-loss planning. Serving Spokane, Spokane Valley & Coeur d’Alene with IICRC-certified teams and rapid response.";

const seo = {
  title,
  description,
  canonical,
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "fire damage restoration companies Spokane WA, water damage clean up Spokane Valley WA, mold remediation and removal Spokane WA, mold abatement service Coeur d’Alene ID, mold removal services Coeur d’Alene ID, emergency flood cleanup Coeur d’Alene ID, fire damage restoration service near me Spokane, restoration mold removal CDA Idaho, commercial restoration Spokane",
    },
  ],
  openGraph: {
    url: canonical,
    siteName: "ServiceMaster by Compass",
    type: "article",
    title:
      "Commercial Restoration — Water, Fire, Mold & Storm | Spokane WA & Coeur d’Alene ID",
    description,
    images: [
      {
        url: "https://smcfireandwater.com/sub-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Restoration Services — ServiceMaster by Compass",
      },
    ],
  },
  twitter: { cardType: "summary_large_image" },
  robotsProps: {
    nosnippet: false,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};

// JSON-LD
const jsonLd = [
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
      "commercial water damage restoration",
      "commercial fire damage restoration",
      "commercial mold remediation",
      "pre-loss planning",
      "odor removal services",
      "storm and weather damage restoration",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://smcfireandwater.com/commercial#webpage",
    url: canonical,
    name: "Commercial Restoration Services",
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    description: description,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/sub-banner.jpg",
      width: 1200,
      height: 630,
    },
    breadcrumb: { "@id": "https://smcfireandwater.com/commercial#breadcrumb" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://smcfireandwater.com/commercial#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smcfireandwater.com/",
      },
      { "@type": "ListItem", position: 2, name: "Commercial", item: canonical },
    ],
  },
  // Directory of commercial sub-services (helps topical discovery)
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Commercial Services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://smcfireandwater.com/commercial/fire-and-smoke",
        name: "Fire & Smoke",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://smcfireandwater.com/commercial/water-damage",
        name: "Water Damage",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://smcfireandwater.com/commercial/mold",
        name: "Mold Damage",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://smcfireandwater.com/commercial/weather",
        name: "Weather / Storm",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://smcfireandwater.com/commercial/odor",
        name: "Odor Removal",
      },
      {
        "@type": "ListItem",
        position: 6,
        url: "https://smcfireandwater.com/commercial/specialty-services",
        name: "Specialty Services",
      },
      {
        "@type": "ListItem",
        position: 7,
        url: "https://smcfireandwater.com/commercial/pre-loss-planning",
        name: "Pre-Loss Planning",
      },
    ],
  },
  // Service entity with offers
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Restoration",
    provider: { "@id": "https://smcfireandwater.com/#organization" },
    areaServed: ["Spokane WA", "Spokane Valley WA", "Coeur d’Alene ID"],
    description:
      "24/7 commercial mitigation and restoration for water, fire & smoke, mold, storm, odor, specialty needs, and pre-loss planning.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Restoration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Damage Mitigation & Drying",
          },
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
          itemOffered: {
            "@type": "Service",
            name: "Storm / Weather Damage Cleanup",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Odor Removal & Deodorization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Specialty / Contents Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Pre-Loss Planning" },
        },
      ],
    },
  },
];

const Links = [
  "/commercial/fire-and-smoke",
  "/commercial/mold",
  "/commercial/odor",
  "/commercial/specialty-services",
  "/commercial/pre-loss-planning",
  "/commercial/water-damage",
  "/commercial/weather",
];

const List = [
  "Fire And Smoke",
  "Mold Damage",
  "Odor Removal",
  "Specialty Services",
  "Pre-Loss Planning",
  "Water Damage",
  "Weather",
];

export default function Commerical() {
  return (
    <div>
      <NextSeo {...seo} />
      <JsonLd data={jsonLd} />
      <div className="top-image">
        <img src="/sub-banner.jpg" />
      </div>
      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Commercial Restoration Services in Spokane, WA</h1>
            <h3>Reduce Losses After Fires, Floods, and Other Disasters</h3>
            <p>
              Businesses in Spokane face a unique set of restoration challenges.
              The city's ongoing freeze-thaw cycle, coupled with a booming
              population, puts extra strain on the infrastructure of commercial
              properties. This can lead to everything from aesthetic degradation
              to severe structural defects that require substantial repairs.
            </p>

            <p>
              Having a reliable partner can make all the difference in such a
              challenging environment. That's where{" "}
              <a href="/" className="underline-link">
                ServiceMaster by Compass
              </a>{" "}
              comes in. With our comprehensive suite of commercial restoration
              services, we're committed to you overcome these challenges and
              thrive.
            </p>

            <p>
              Whether it's fire or water damage, severe weather incidents, mold
              infestations, or the need for pre-loss planning,{" "}
              <strong>
                we have the expertise and resources to support businesses
                through it all.
              </strong>
            </p>

            <div className="outline-box">
              Restore your commercial property to its former glory with our
              expert restoration services in Spokane.{" "}
              <a href="/contact" className="underline-link">
                Reach out to us online
              </a>{" "}
              or call <a className="underline-link">(509) 646-7488</a> to get
              started.
            </div>

            <h2>
              Understanding the Unique Restoration Needs of Commercial
              Facilities
            </h2>

            <p>
              Supporting the unique restoration needs of commercial facilities
              can be complex and extensive. From dealing with the immediate
              aftermath of a disaster to restoring business operations, every
              aspect requires specialized knowledge and expertise.
            </p>

            <h2>Emergency Water Damage Solutions in Spokane</h2>
            <p>
              Addressing water damage fast is critical to securing the structure
              of your building.
            </p>
            <p>
              You need prompt action by an experienced{" "}
              <a>water damage restoration</a>
              team. Water mitigation & restoration makes all the difference in
              mitigating structural damage to property.
            </p>

            <p>
              In addition, the scale of commercial projects can be significantly
              larger than residential ones, demanding more resources and a
              coordinated approach. Luckily, we understand these challenges. We
              have a{" "}
              <a href="/why-us" className="underline-link">
                <strong>dedicated team of professionals</strong>
              </a>{" "}
              equipped with the latest technology and training to handle almost
              any size or type of commercial restoration project.
            </p>

            <h2>
              <a href="commercial/fire-damage" className="underline-link">
                {" "}
                Expert Commercial Fire Damage Restoration in Spokane
              </a>
            </h2>
            <p>
              Wildfires in Spokane can wreak havoc on your business, burning
              thousands of acres and inflicting smoke damage across vast areas.
              The aftermath of these fires can be overwhelming, as you may be
              facing the daunting task of repairing and restoring your property.
              But you don't have to face these challenges alone. We’re here to
              help.
            </p>

            <p>
              We offer comprehensive fire damage restoration services designed
              to return your business to its pre-loss condition as quickly and
              efficiently as possible. Our highly trained professionals are
              experienced in handling all aspects of fire damage restoration,
              including smoke and soot removal.
            </p>

            <h2>
              <a href="commercial/fire-damage" className="underline-link">
                {" "}
                Reliable Commercial Water Damage Restoration Services
              </a>
            </h2>

            <p>
              From flooding to melting snow and ice, Spokane faces various water
              damage threats. The result can be overwhelming, with damages
              ranging from structural issues to mold growth, not to mention the
              potential loss of essential documents and inventory.
              Understandably, this could lead to significant downtime and loss
              of revenue.
            </p>

            <p>
              With our professional and comprehensive water damage restoration
              services, we aim to mitigate the damage and get your business back
              to its pre-loss condition as swiftly as possible. Our team of
              experts specializes in water extraction, drying, dehumidification,
              and mold remediation, ensuring a thorough and effective
              restoration process.
            </p>

            <h2>
              <a href="commercial/fire-damage" className="underline-link">
                {" "}
                Comprehensive Severe Weather Damage Restoration
              </a>
            </h2>

            <p>
              Severe weather events like snowstorms and wildfires can wreak
              havoc on businesses. These disastrous occurrences can cause
              significant structural damage to your property and disrupt
              operations. ServiceMaster by Compass is here to shoulder the
              burden.
            </p>

            <p>
              Equipped with extensive experience and professional training, our
              team provides comprehensive storm damage restoration services
              designed to bring your business back to its pre-loss condition.
              Our services include debris removal, water extraction, drying, and
              mold remediation, ensuring a thorough and effective restoration
              process.
            </p>

            <h2>Effective Mold Removal Services for Spokane Businesses</h2>
            <p>
              Left unchecked, mold can cause significant structural damage and
              pose serious health risks to your employees and customers.
              Luckily, we specialize in comprehensive mold remediation services
              designed to restore your business effectively and efficiently to
              its pre-loss condition. With our experienced team and proven
              methodologies, we eliminate mold at its source, ensuring a safe
              and healthy environment for all.
            </p>

            <h2>
              <a href="commercial/fire-damage" className="underline-link">
                {" "}
                Proactive Pre-Loss Planning for Spokane Businesses
              </a>
            </h2>

            <p>
              In the face of a potential disaster, preparedness is critical.
              This is where ServiceMaster by Compass steps in with our pre-loss
              planning services for your business. With our pre-loss planning,
              we help you mitigate these risks by creating a comprehensive and
              customized disaster response plan tailored to your business's
              unique needs. Wouldn't you want to minimize downtime and ensure a
              speedy recovery if disaster strikes? Let us help you prepare.
            </p>

            <h2>Your Trusted Partner for Commercial Restoration in Spokane</h2>

            <p>
              We understand that every minute counts when a disaster strikes.
              That’s why our highly trained professionals are available 24/7 to
              respond to your needs. With us, you have a partner who understands
              these threats and has the expertise to handle them effectively.
            </p>

            <ul className="content">
              <li className="arrow-list">
                <span>
                  <strong>24/7 Availability</strong>: At ServiceMaster by
                  Compass, we understand that emergencies don't wait for
                  convenient times. That's why our commercial restoration
                  services are available 24/7, 365 days a year. You can count on
                  us to be there when you need us the most, providing prompt and
                  reliable assistance.
                </span>
              </li>
              <li className="arrow-list">
                <span>
                  <strong>Expertise and Experience</strong>: With ServiceMaster
                  by Compass, you benefit from our extensive expertise and
                  experience in the field of commercial restoration. Our team is
                  highly skilled and knowledgeable, ensuring that every job is
                  done right the first time. You can trust our professionals to
                  handle your restoration needs with precision and care.
                </span>
              </li>
              <li className="arrow-list">
                <span>
                  <strong>Comprehensive Services</strong>: When you choose our
                  Spokane team, you gain access to a wide range of comprehensive
                  services designed to meet all your commercial restoration
                  requirements. From water damage restoration to fire damage
                  recovery, we offer solutions tailored to your specific needs,
                  providing a one-stop shop for all your restoration needs.
                </span>
              </li>
              <li className="arrow-list">
                <span>
                  <strong>State-of-the-Art Equipment</strong>: We believe in
                  delivering top-notch results, which is why we utilize
                  state-of-the-art equipment and advanced techniques in our
                  restoration processes. Our cutting-edge tools and technology
                  enable us to deliver efficient and effective solutions,
                  ensuring that your commercial property is restored to its
                  pre-loss condition.
                </span>
              </li>
            </ul>

            <p>
              We'll work with you every step of the way, providing the support,
              resources, and reassurance you need to navigate through these
              challenging situations. When you choose us, you're not just
              getting a service provider, you're gaining a partner committed to
              your success.
            </p>

            <div className="black-box">
              <a>Contact us online</a> or call <a>(509) 646-7488</a> today for
              commercial restoration services in Spokane.
            </div>
          </div>

          <div className="column-two">
            <SideBarBox title={"Commercial"} links={Links} list={List} />

            <UncertainTo />
          </div>
        </div>
      </div>
      <RestorePeace />
    </div>
  );
}
