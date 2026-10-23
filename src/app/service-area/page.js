import JsonLd from "../components/JsonLd";
import RestorePeace from "../components/RestoringPeace";
import UncertainTo from "../components/UncertaintyTo";
import SideBarBox from "../components/SideBarBox";

const root = "https://smcfireandwater.com";
const cities = [
  {
    name: "Spokane, Washington",
    href: "/service-area/service-master-spokane",
    detail:
      "Water extraction, pipe leaks, flooding, and commercial restoration in Spokane.",
  },
  {
    name: "Coeur d’Alene, Idaho",
    href: "/service-area/service-master-cda",
    detail:
      "Water damage cleanup and drying for homes and businesses in Coeur d’Alene.",
  },
  {
    name: "Hayden, Idaho",
    href: "/service-area/service-master-hayden",
    detail:
      "Restoration support after plumbing leaks, floods, and other water emergencies in Hayden.",
  },
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
export const metadata = {
  title: "Restoration Service Areas | Spokane, Coeur d’Alene & Hayden",
  description:
    "ServiceMaster by Compass provides 24/7 water damage restoration, flood cleanup and property restoration across Spokane, Coeur d’Alene and Hayden.",
  alternates: { canonical: `${root}/service-area` },
  openGraph: {
    title: "Restoration Service Areas | ServiceMaster by Compass",
    description:
      "Water damage and property restoration in Spokane and North Idaho.",
    url: `${root}/service-area`,
    siteName: "ServiceMaster by Compass",
    images: [{ url: `${root}/sub-banner.jpg`, width: 1200, height: 630 }],
  },
};
const schema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${root}/service-area#webpage`,
    url: `${root}/service-area`,
    name: "Restoration Service Areas",
    isPartOf: { "@id": `${root}/#website` },
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
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: cities.map((city, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: city.name,
      url: `${root}${city.href}`,
    })),
  },
];
export default function ServiceArea() {
  return (
    <div>
      <JsonLd data={schema} />
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="ServiceMaster by Compass restoration service areas"
        />
      </div>
      <div className="home-container">
        <div className="home-section">
          <main className="column-one">
            <h1>
              Water Damage Restoration Service Areas in Spokane and North Idaho
            </h1>
            <p>
              When a pipe bursts, a basement floods, or a storm brings water
              inside, getting the right help matters. ServiceMaster by Compass
              provides property restoration services across Spokane, Washington,
              and neighboring North Idaho communities, including Coeur d’Alene
              and Hayden.
            </p>
            <p>
              Our{" "}
              <a className="underline-link" href="/residential/water-damage">
                residential water damage restoration services
              </a>{" "}
              address water removal, drying, and recovery after leaks and
              flooding. We also support local businesses with{" "}
              <a className="underline-link" href="/commercial/water-damage">
                commercial water damage restoration
              </a>
              .
            </p>
            <div className="outline-box">
              Need emergency restoration assistance? Call{" "}
              <a className="underline-link" href="tel:5095355440">
                (509) 535-5440
              </a>{" "}
              or{" "}
              <a className="underline-link" href="/contact">
                contact our team
              </a>
              .
            </div>
            <h2>Explore Our Local Service Areas</h2>
            {cities.map((city) => (
              <section key={city.href}>
                <h3>
                  <a className="underline-link" href={city.href}>
                    {city.name}
                  </a>
                </h3>
                <p>
                  {city.detail} See our{" "}
                  <a className="underline-link" href={city.href}>
                    {city.name} service area page
                  </a>{" "}
                  for local restoration information.
                </p>
              </section>
            ))}
            <h2>Water Damage Services Available Across Our Region</h2>
            <p>
              Different emergencies call for different restoration approaches. A
              broken supply line may require{" "}
              <a
                className="underline-link"
                href="/residential/water-damage/burst-pipe-damage"
              >
                burst pipe cleanup
              </a>
              , while widespread standing water may require{" "}
              <a
                className="underline-link"
                href="/residential/water-damage/flood-damage"
              >
                flood damage restoration
              </a>
              . When wastewater enters a property, our{" "}
              <a
                className="underline-link"
                href="/residential/water-damage/sewage-backup"
              >
                sewage backup cleanup services
              </a>{" "}
              address contamination concerns.
            </p>
            <p>
              After a fire, water used during firefighting can leave additional
              damage; see our{" "}
              <a
                className="underline-link"
                href="/residential/water-damage/flooding-from-fire"
              >
                water damage after fire services
              </a>
              . For moisture-related concerns following a leak, learn about{" "}
              <a className="underline-link" href="/residential/mold">
                mold remediation
              </a>
              .
            </p>
            <h2>Restoration for Homes and Businesses</h2>
            <p>
              Water damage does not always happen alone. Our broader services
              include{" "}
              <a className="underline-link" href="/residential/fire-and-smoke">
                fire and smoke restoration
              </a>{" "}
              and{" "}
              <a className="underline-link" href="/residential/weather">
                weather damage restoration
              </a>
              . Explore{" "}
              <a className="underline-link" href="/residential">
                all residential restoration services
              </a>{" "}
              or{" "}
              <a className="underline-link" href="/commercial">
                commercial restoration services
              </a>
              .
            </p>
            <div className="black-box">
              For restoration services in Spokane, Coeur d’Alene or Hayden, call{" "}
              <a className="underline-link" href="tel:5095355440">
                (509) 535-5440
              </a>{" "}
              or{" "}
              <a className="underline-link" href="/contact">
                request assistance online
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
