import RestorePeace from "../components/RestoringPeace";
import UncertainTo from "../components/UncertaintyTo";
import SideBarBox from "../components/SideBarBox";
// imports

import JsonLd from "../components/JsonLd";

// --- SEO + JSON-LD ---
const canonical = "https://smcfireandwater.com/insurance";
const title =
  "Insurance Professional Benefits | ServiceMaster by Compass | Spokane & Coeur d’Alene";
const description =
  "Partner with ServiceMaster by Compass for faster, higher-satisfaction claims: 24/7 mitigation, IICRC-certified teams, clear policyholder communication, and proven water, fire & mold restoration in Spokane, Spokane Valley & Coeur d’Alene.";

// app/insurance/page.tsx

export const metadata = {
  title:
    "Insurance Professional Benefits | ServiceMaster by Compass | Spokane & Coeur d’Alene",
  description:
    "Partner with ServiceMaster by Compass for faster, higher-satisfaction claims: 24/7 mitigation, IICRC-certified teams, clear policyholder communication, and proven water, fire & mold restoration in Spokane, Spokane Valley & Coeur d’Alene.",
  keywords: [
    "insurance claims restoration Spokane",
    "water damage clean up Spokane Valley WA",
    "fire damage restoration Spokane WA",
    "mold remediation and removal Spokane WA",
    "mold removal services Coeur d’Alene ID",
    "emergency flood cleanup Coeur d’Alene ID",
    "fire damage restoration service near me Spokane",
    "restoration mold removal CDA Idaho",
  ],
  alternates: { canonical: "https://smcfireandwater.com/insurance" },
  openGraph: {
    title:
      "Insurance Professional Benefits — ServiceMaster by Compass | Spokane & CDA",
    description:
      "24/7 mitigation, streamlined claims communication, and IICRC-certified restoration for policyholders.",
    url: "https://smcfireandwater.com/insurance",
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/insurance.jpg",
        width: 1200,
        height: 630,
        alt: "Insurance partner benefits with ServiceMaster by Compass",
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
      "Insurance Professional Benefits | ServiceMaster by Compass | Spokane & Coeur d’Alene",
    description:
      "Faster claims, happier policyholders. 24/7 mitigation & restoration with certified teams.",
    images: ["https://smcfireandwater.com/insurance.jpg"],
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
      "insurance claims restoration Spokane",
      "water damage clean up Spokane Valley WA",
      "fire damage restoration Spokane WA",
      "mold remediation and removal Spokane WA",
      "mold removal services Coeur d’Alene ID",
      "emergency flood cleanup Coeur d’Alene ID",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://smcfireandwater.com/insurance#webpage",
    url: canonical,
    name: "Insurance Professional Benefits",
    isPartOf: { "@id": "https://smcfireandwater.com/#website" },
    description: description,
    breadcrumb: { "@id": "https://smcfireandwater.com/insurance#breadcrumb" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/insurance.jpg",
      width: 1200,
      height: 630,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://smcfireandwater.com/insurance#breadcrumb",
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
        name: "Insurance Professional Benefits",
        item: canonical,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Insurance Resources",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://smcfireandwater.com/insurance/residential-benefits-and-services",
        name: "Residential Benefits & Services",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://smcfireandwater.com/insurance/commercial-benefits-and-services",
        name: "Commercial Benefits & Services",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://smcfireandwater.com/insurance/education",
        name: "Continuing Education (CE) Classes",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Insurance Carrier Partnership — Disaster Restoration",
    provider: { "@id": "https://smcfireandwater.com/#organization" },
    areaServed: ["Spokane WA", "Spokane Valley WA", "Coeur d’Alene ID"],
    description:
      "24/7 mitigation and restoration for policyholders with clear claims communication, IICRC-certified teams, and rapid on-site response.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Restoration for Policyholders",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Water Damage Clean Up" },
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
          itemOffered: { "@type": "Service", name: "Storm / Weather Damage" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Contents & Documents" },
        },
      ],
    },
  },
  // Optional FAQ schema mapped to on-page content
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can your team respond for a policyholder?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide 24/7/365 emergency response and mobilize quickly to be on-site to begin mitigation and protect contents and structure.",
        },
      },
      {
        "@type": "Question",
        name: "What benefits do insurance professionals get by partnering with ServiceMaster by Compass?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consistent communication, clear next steps for policyholders, IICRC-certified crews, and a streamlined claims experience designed to improve customer satisfaction.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer continuing education (CE) for agents and adjusters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide CE classes and resources to help insurance professionals stay current on mitigation and restoration best practices.",
        },
      },
    ],
  },
];

const Links = [
  "/insurance/residential",
  "/insurance/commercial",
  "/insurance/education",
];

const List = [
  "Residential Benefits And Services",
  "Commercial Benefits And Services",
  "Continuing Education Classes",
];

export default function Insurance() {
  return (
    <div>
      <JsonLd data={jsonLd} />
      <div className="top-image">
        <img src="/insurance.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Insurance Professional Benefits</h1>
            <h2>Assisting Home & Business Owners with Their Restorations</h2>
            <p>
              Damage to your policyholder's home or business can be quite a
              stressful experience. ServiceMaster Restore® is here to help them
              get back to normal as quickly as possible. We are a{" "}
              <a href="/residential/" className="underline-link">
                residential
              </a>{" "}
              and{" "}
              <a href="/commercial/" className="underline-link">
                commercial restoration company
              </a>{" "}
              that offers a network of experienced Disaster Restoration
              professionals who are fully prepared to assist with damages caused
              by{" "}
              <a href="/residential/fire-and-smoke/" className="underline-link">
                fire and smoke
              </a>
              ,{" "}
              <a href="/residential/water-damage/ " className="underline-link">
                floods
              </a>
              , and other disasters. With over 65 years of industry experience,
              you can count on us to provide your policyholder with the peace of
              mind they need.
            </p>

            <p>
              <strong>Learn more about our:&nbsp;</strong>
            </p>

            <ul>
              <li className="arrow-list">
                <a
                  className="underline-link"
                  href="https://www.servicemasterrestore.com/servicemaster-of-kalamazoo/insurance/continuing-education-classes/"
                  target="_blank"
                  aria-describedby="audioeye_new_window_message"
                >
                  Continuing Education (CE) classes
                </a>
              </li>
              <li className="arrow-list">
                <a className="underline-link" href="/insurance/">
                  Commercial benefits and services
                </a>
              </li>
              <li className="arrow-list">
                <a className="underline-link" href="/insurance">
                  Residential benefits and services
                </a>
              </li>
            </ul>

            <p>
              <strong>
                Click below to register and get access to our Industry Training
                Media Center.
              </strong>
            </p>

            <p>
              When we are contacted, we immediately take action to assist our
              clients. We are always on-site within two to four hours to help
              minimize the damages to your{" "}
              <a href="/insurance">policyholder’s property</a>, including
              protecting valuable electronics, furniture, documents, and data
              from further damage.
            </p>

            <a className="btn">Industry Training media center</a>

            <p>
              When we are contacted, we immediately take action to assist our
              clients. We are always on-site within two to four hours to help
              minimize the damages to your{" "}
              <a href="/insurance">policyholder’s property</a>, including
              protecting valuable electronics, furniture, documents, and data
              from further damage.
            </p>

            <h2>
              YOU’RE KNOWN FOR GOING ABOVE AND BEYOND FOR YOUR POLICYHOLDERS –
              SO ARE WE.
            </h2>

            <div class="outline-box">
              How can you stay at the top of your game as an insurance agent?
              It’s simple – choose the right champion. Get a 1-up on your
              customer satisfaction scores when you recommend{" "}
              <a href="/" className="underline-link">
                ServiceMaster Restore
              </a>
              . Give us a call today at{" "}
              <a className="underline-link" href="tel:5095355440">
                (509) 535-5440
              </a>{" "}
              .
            </div>

            <p>
              ServiceMaster Restore provides something very important to
              insurance carriers, and it’s something no other disaster
              restoration company can match.{" "}
              <strong>It’s genuine partnership</strong>. As an insurance
              professional, you know your recommendations of restoration
              companies are critical to customer satisfaction. When you{" "}
              <a href="/">recommend ServiceMaster Restore</a> you can rest
              assured that you’ve recommended a company focused on delivering
              the highest level of customer satisfaction.
            </p>

            <h4>BASED ON A RECENT J.D. POWER RESEARCH STUDY:</h4>
            <p>
              According to a recent J.D. Power Research Study, customers are
              more satisfied with their insurance carrier when they recommend a
              restoration company, instead of having to find one on their own.
              The study recorded that customers who were recommended a company,
              reported a score that was 29 points above the average.
            </p>

            <img
              src="/recomendgraph.png"
              alt="spokane restoration recomendations by insurer"
            />
            <p>
              It also showed that recommending ServiceMaster Restore
              specifically, provides proven increased customer satisfaction
              scores. Policyholders who were recommended ServiceMaster Restore
              reported a score 22 points higher than other companies.
            </p>
            <p>
              Furthermore, the study shows an increase of 230 satisfaction
              points when policyholders feel they have a clear understanding of
              each step in the claims process.
            </p>
            <img
              src="/recomendgraphtwo.png"
              alt="spokane restoration recomendations by servicemaster by compass"
            />

            <p>
              *The J.D. Power U.S. Property Claims Satisfaction Study is a
              syndicated benchmarking study profiling the experiences of
              customers from the largest insurance providers throughout the
              United States. This research details the importance and impact of
              the overall customer experience on satisfaction and explores
              customers’ commitment to their insurance provider.
            </p>

            <h2>WHY RECOMMEND SERVICEMASTER RESTORE?</h2>
            <p>
              We value and put great emphasis on the importance of{" "}
              <a href="/insurance/education/" className="underline-link">
                Comprehensive Training &amp; Certification
              </a>{" "}
              for all our employees, as well as ongoing training for both
              franchise owners and their staff. Our staff is trained to make
              sure all critical information is captured upon intake, so the
              claimant doesn’t have to repeat it.
            </p>

            <img
              src="/recomendgraphthree.png"
              alt="spokane restoration service master by compass partner program"
            />

            <p>
              We provide industry-leading claims management for both the
              policyholder and the insurance carrier. It is important that
              customers have a clear understanding what the next steps are in
              the claims process. From the first notification of loss, all the
              way until the final settlement, we take care of your
              policyholders. We have guides that help policyholders every step
              of the restoration process, to guarantee consistent, clear
              communication and understanding of what happens next. Your
              policyholders are never in the dark with us.
            </p>
            <p>
              We use the latest technology to ensure your claimant knows exactly
              what to do each step of the way.{" "}
              <strong>
                We are IICRC certified. At ServiceMaster Restore, we measure our
                success through customer satisfaction.
              </strong>{" "}
              Our service level agreements are monitored in real-time to
              determine any adjustments or corrections necessary to ensure we
              provide the best solutions for our customers.
            </p>
            <p>
              Take the first step toward improving your customer satisfaction
              today, by becoming a part of the industry’s only carrier
              satisfaction-focused restoration program.
            </p>
          </div>

          <div className="column-two">
            <SideBarBox title={"Insurance"} links={Links} list={List} />

            <UncertainTo />
          </div>
        </div>
      </div>

      <RestorePeace />
    </div>
  );
}
