import JsonLd from "../components/JsonLd";
import RestorePeace from "../components/RestoringPeace";
import SideBarBox from "../components/SideBarBox";
import UncertainTo from "../components/UncertaintyTo";

const root = "https://smcfireandwater.com";
const areas = [
  { name: "Spokane, WA", href: "/service-area/service-master-spokane" },
  { name: "Coeur d’Alene, ID", href: "/service-area/service-master-cda" },
  { name: "Hayden, ID", href: "/service-area/service-master-hayden" },
];
const Links = [
  "/service-area",
  "/service-area/service-master-spokane",
  "/service-area/service-master-cda",
  "/service-area/service-master-hayden",
];

const List = [
  "All Service Areas",
  "Spokane, WA",
  "Coeur d'Alene, ID",
  "Hayden, ID",
];
export function buildMetadata({ city, state, slug }) {
  const url = `${root}/service-area/${slug}`;
  const title = `Restoration Services in ${city}, ${state} | ServiceMaster by Compass`;
  const description = `24/7 water damage restoration in ${city}, ${state}. Water extraction, burst pipe cleanup, flood damage, sewage backups and commercial restoration.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "ServiceMaster by Compass",
      type: "website",
      images: [
        {
          url: `${root}/sub-banner.jpg`,
          width: 1200,
          height: 630,
          alt: `Restoration services in ${city}`,
        },
      ],
    },
    robots: { index: true, follow: true },
  };
}
function schemas({ city, state, slug, faq, answer }) {
  const url = `${root}/service-area/${slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: `Water Damage Restoration in ${city}, ${state}`,
      isPartOf: { "@id": `${root}/#website` },
      about: { "@id": `${root}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      serviceType: "Water damage restoration",
      provider: { "@id": `${root}/#organization` },
      areaServed: {
        "@type": "City",
        name: city,
        address: {
          "@type": "PostalAddress",
          addressLocality: city,
          addressRegion: state,
          addressCountry: "US",
        },
      },
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: root },
        {
          "@type": "ListItem",
          position: 2,
          name: "Service Areas",
          item: `${root}/service-area`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${city}, ${state}`,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: faq,
          acceptedAnswer: { "@type": "Answer", text: answer },
        },
      ],
    },
  ];
}
export default function CityServiceArea({
  city,
  state,
  slug,
  intro,
  context,
  commercial,
  faq,
  answer,
}) {
  return (
    <div>
      <JsonLd data={schemas({ city, state, slug, faq, answer })} />
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt={`Property restoration in ${city}, ${state}`}
        />
      </div>
      <div className="home-container">
        <div className="home-section">
          <main className="column-one">
            <h1>
              Water Damage Restoration in {city}, {state}
            </h1>
            <p>{intro}</p>
            <p>
              When water affects your home, our{" "}
              <a className="underline-link" href="/residential/water-damage">
                residential water damage restoration team
              </a>{" "}
              can help with water removal, moisture assessment, structural
              drying, and next steps toward recovery.
            </p>
            <div className="outline-box">
              Need help with water damage in {city}? Call{" "}
              <a className="underline-link" href="tel:5095355440">
                (509) 535-5440
              </a>{" "}
              or{" "}
              <a className="underline-link" href="/contact">
                contact ServiceMaster by Compass
              </a>
              .
            </div>
            <h2>Common Causes of Water Damage in {city}</h2>
            <p>{context}</p>
            <h3>Burst Pipes and Hidden Leaks</h3>
            <p>
              Even a small plumbing failure can saturate drywall, subfloors, and
              insulation. Our{" "}
              <a
                className="underline-link"
                href="/residential/water-damage/burst-pipe-damage"
              >
                burst pipe damage cleanup services
              </a>{" "}
              address water intrusion after plumbing emergencies.
            </p>
            <h3>Flooding and Standing Water</h3>
            <p>
              Floodwater and indoor flooding can affect multiple rooms and
              building materials. Learn about our{" "}
              <a
                className="underline-link"
                href="/residential/water-damage/flood-damage"
              >
                flood damage restoration process
              </a>
              , including extraction and drying.
            </p>
            <h3>Sewage Backups</h3>
            <p>
              Wastewater requires special care because it may contain harmful
              contaminants. Explore our{" "}
              <a
                className="underline-link"
                href="/residential/water-damage/sewage-backup"
              >
                sewage backup cleanup services
              </a>{" "}
              rather than attempting to handle contaminated water yourself.
            </p>
            <h3>Water Damage Following a Fire</h3>
            <p>
              Water used to extinguish a fire can create additional damage after
              the flames are out. Our{" "}
              <a
                className="underline-link"
                href="/residential/water-damage/flooding-from-fire"
              >
                post-fire water damage services
              </a>{" "}
              address that part of the recovery process.
            </p>
            <h2>Commercial Water Damage Restoration in {city}</h2>
            <p>
              {commercial} Learn more about our{" "}
              <a className="underline-link" href="/commercial/water-damage">
                commercial water damage restoration services
              </a>
              .
            </p>
            <h2>More Than Water Damage Cleanup</h2>
            <p>
              Water intrusion may be accompanied by other problems. Depending on
              the circumstances, property owners may also need{" "}
              <a className="underline-link" href="/residential/mold">
                mold remediation
              </a>
              ,{" "}
              <a className="underline-link" href="/residential/weather">
                storm damage restoration
              </a>
              , or{" "}
              <a className="underline-link" href="/residential/fire-and-smoke">
                fire and smoke restoration
              </a>
              .
            </p>
            <h2>Frequently Asked Questions</h2>
            <h3>{faq}</h3>
            <p>{answer}</p>
            <h2>
              Restoration Services Throughout the Spokane–North Idaho Area
            </h2>
            <p>
              ServiceMaster by Compass serves communities across the region.
              Browse our{" "}
              <a className="underline-link" href="/service-area">
                full service area
              </a>{" "}
              or find your city below.
            </p>
            <ul className="content">
              {areas
                .filter((area) => !area.href.endsWith(slug))
                .map((area) => (
                  <li className="arrow-list" key={area.href}>
                    <a className="underline-link" href={area.href}>
                      {area.name} restoration services
                    </a>
                  </li>
                ))}
            </ul>
            <div className="black-box">
              For restoration assistance in {city}, call{" "}
              <a className="underline-link" href="tel:5095355440">
                (509) 535-5440
              </a>{" "}
              or{" "}
              <a className="underline-link" href="/contact">
                reach out online
              </a>
              .
            </div>
          </main>
          <div className="column-two">
            <SideBarBox title={"Service Area"} links={Links} list={List} />

            <UncertainTo />
          </div>
        </div>
      </div>
      <RestorePeace />
    </div>
  );
}
