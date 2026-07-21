import RestorePeace from "../../components/RestoringPeace";
import UncertainTo from "../../components/UncertaintyTo";
import SideBarBox from "../../components/SideBarBox";
import GetHelpNow from "../../components/GetHelpNow";

const canonical = "https://smcfireandwater.com/insurance/commercial";

const title =
  "Commercial Insurance Restoration Services | ServiceMaster by Compass";

const description =
  "Help commercial insurance policyholders recover quickly with 24/7 water, fire, mold, reconstruction, contents restoration, and large-loss services in Spokane and Coeur d’Alene.";

export const metadata = {
  title,
  description,

  keywords: [
    "commercial insurance restoration services",
    "commercial property damage restoration",
    "insurance restoration Spokane WA",
    "commercial water damage restoration Spokane",
    "commercial fire damage restoration Spokane",
    "commercial mold remediation Spokane",
    "large loss restoration Spokane",
    "commercial restoration Coeur d’Alene",
    "insurance policyholder restoration services",
    "ServiceMaster by Compass commercial restoration",
  ],

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
        url: "https://smcfireandwater.com/commercialins.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial insurance restoration services",
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
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://smcfireandwater.com/commercialins.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: {
      "@id": "https://smcfireandwater.com/#website",
    },
    about: {
      "@id": `${canonical}#service`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/commercialins.jpg",
      width: 1200,
      height: 630,
    },
    breadcrumb: {
      "@id": `${canonical}#breadcrumb`,
    },
  },

  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Commercial Insurance Restoration Services",
    description,
    url: canonical,
    serviceType: [
      "Commercial water damage restoration",
      "Commercial fire damage restoration",
      "Commercial mold remediation",
      "Commercial reconstruction",
      "Contents restoration",
      "Large-loss restoration",
      "Building stabilization",
      "Pre-loss planning",
    ],
    provider: {
      "@id": "https://smcfireandwater.com/#organization",
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
      {
        "@type": "City",
        name: "Post Falls",
      },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Commercial insurance carriers, adjusters, agents, and policyholders",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: canonical,
      availableLanguage: "English",
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
        item: "https://smcfireandwater.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insurance",
        item: "https://smcfireandwater.com/insurance",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Commercial Benefits and Services",
        item: canonical,
      },
    ],
  },

  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://smcfireandwater.com/#organization",
    name: "ServiceMaster by Compass",
    url: "https://smcfireandwater.com",
    logo: {
      "@type": "ImageObject",
      url: "https://smcfireandwater.com/logo.png",
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
        "@type": "Place",
        name: "Spokane, WA",
      },
      {
        "@type": "Place",
        name: "Spokane Valley, WA",
      },
      {
        "@type": "Place",
        name: "Coeur d’Alene, ID",
      },
      {
        "@type": "Place",
        name: "Post Falls, ID",
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

export default function CommercialBenefitsServices() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="top-image">
        <img
          src="/commercialins.jpg"
          alt="Commercial property restoration and insurance services"
        />
      </div>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>
              Benefits & Services for Your Commercial Insurance Policyholders
            </h1>

            <h2>Helping Business Owners Quickly Recover</h2>

            <p>
              When it comes to commercial disasters, time is of the essence. The
              longer a business remains disrupted, the greater the financial
              losses and the harder it becomes to recover. That&apos;s why
              ServiceMaster Restore is committed to providing rapid response and
              reliable restoration services for your policyholders.
            </p>

            <p>
              Our team of experts is available <strong>24/7, 365 days</strong> a
              year to respond swiftly to any urgent restoration and repair
              needs. Whether it&apos;s water damage, fire damage, mold
              remediation, or any other disaster, we have the knowledge, skills,
              and resources to address the situation promptly and effectively.
            </p>

            <p>
              By partnering with ServiceMaster Restore, you can ensure that your
              commercial policyholders receive the following benefits:
            </p>

            <ol>
              <li>
                <strong>Quick Response:</strong> Our immediate response team
                will arrive at the scene within hours, ready to assess the
                damage and develop a restoration plan. We understand that time
                is of the essence and strive to minimize downtime for
                businesses.
              </li>

              <li>
                <strong>Comprehensive Restoration Services:</strong> With over
                65 years of experience in the industry, we have a deep
                understanding of the diverse range of restoration services that
                businesses may require. From reconstruction services to content
                restoration, mobilization, building and site stabilization, and
                pre-loss planning, we offer a comprehensive suite of solutions
                tailored to meet the specific needs of each business.
              </li>

              <li>
                <strong>Expert Guidance:</strong> Our restoration experts will
                work closely with your policyholders, providing guidance and
                support throughout the entire restoration process. We will
                ensure clear communication, keeping all parties informed about
                progress and necessary steps.
              </li>

              <li>
                <strong>Large Loss Capabilities:</strong> In the event of a
                significant loss, our experts are equipped to handle large loss
                claims and restoration. We have the resources and expertise to
                manage complex projects efficiently, ensuring that businesses
                can recover from substantial damages as quickly as possible.
              </li>
            </ol>

            <p>
              At ServiceMaster Restore, we understand the importance of
              minimizing downtime and getting businesses back on track swiftly.
              Our goal is to provide reliable, efficient, and professional
              restoration services that exceed your policyholders&apos;
              expectations. Trust us to be there for your commercial
              policyholders when they need us most, helping them navigate the
              restoration process with confidence and get back in business as
              soon as possible.
            </p>

            <strong>
              Our commercial restoration services for your customers include:
            </strong>

            <ul>
              <li className="arrow-list">
                <span className="underline-link">Reconstruction services</span>
              </li>

              <li className="arrow-list">
                <span className="underline-link">Content restoration</span>
              </li>

              <li className="arrow-list">Mobilization</li>

              <li className="arrow-list">Building and site stabilization</li>

              <li className="arrow-list">
                <span className="underline-link">Pre-loss planning</span>
              </li>
            </ul>

            <GetHelpNow text="Give us a call today to learn more about our commercial insurance policyholder benefits." />
          </div>

          <div className="column-two">
            <SideBarBox title="Insurance" links={Links} list={List} />

            <UncertainTo />
          </div>
        </div>
      </div>

      <RestorePeace />
    </div>
  );
}
