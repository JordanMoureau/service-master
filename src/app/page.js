import Image from "next/image";

import KnowUsPanel from "./components/KnowUsPanel";
import HomeGrid from "./components/HomeGrid";
import ServiceAreaMap from "./components/ServiceAreaMap";
import HomeContact from "./components/HomeContact";
import AccredCarousel from "./components/AcredCarousel";
import HomeSideBar from "./components/HomeSideBar";
import Hero from "./components/Hero";
import GetHelpNow from "./components/GetHelpNow";

// app/page.tsx (Home)

export const metadata = {
  title:
    "Disaster Restoration Spokane WA | Water, Fire & Mold | ServiceMaster by Compass",
  description:
    "Top-rated restoration in Spokane, Spokane Valley & Coeur d’Alene. 24/7 water damage cleanup, fire & smoke restoration, and mold remediation by ServiceMaster by Compass.",
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
    canonical: "https://smcfireandwater.com/",
  },
  openGraph: {
    title:
      "Disaster Restoration in Spokane — Water, Fire & Mold | ServiceMaster by Compass",
    description:
      "24/7 emergency restoration for homes & businesses in Spokane, Spokane Valley & Coeur d’Alene. Water removal & drying, fire & smoke cleanup, mold remediation.",
    url: "https://smcfireandwater.com/",
    siteName: "ServiceMaster by Compass",
    images: [
      {
        url: "https://smcfireandwater.com/homebodyimage.jpg",
        width: 1200,
        height: 630,
        alt: "ServiceMaster by Compass — Spokane disaster restoration",
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
    title:
      "Disaster Restoration Spokane WA | Water, Fire & Mold | ServiceMaster by Compass",
    description:
      "24/7 water, fire & mold restoration in Spokane, Spokane Valley & Coeur d’Alene.",
    images: ["https://smcfireandwater.com/homebodyimage.jpg"],
  },
};

export default function Home() {
  return (
    <div>
      <KnowUsPanel />

      <Hero />

      <section className="lower-hero">
        <HomeGrid />
      </section>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Top-Rated Disaster Restoration in Spokane, WA</h1>
            <h2>Trusted Spokane Restoration Services Near You</h2>
            <p>
              ServiceMaster by Compass is a full-service disaster restoration
              contractor. Founded by Fred Anderson and Steve Young, we are here
              to help.
            </p>

            <p>
              We are the preferred contractor for water and fire restoration in
              Spokane area by all national insurance companies and local
              agencies. ServiceMaster by Compass provides top quality,
              guaranteed restoration services.
            </p>

            <p>
              Our team of <a>local damage restoration experts</a> does this with
              pride, efficiency, and convenience to our valued customers. We
              have extensive experience in every field of construction.
            </p>

            <div className="outline-box">
              Get in touch with the best restoration company near you today!
              Give us a call at<a>(509) 646-7488</a> or <a>contact us</a>{" "}
              online!
            </div>

            <h2>Comprehensive Restoration Services in Spokane</h2>

            <strong>Our residential restoration services include:</strong>

            <ul>
              <li className="arrow-list">Water damage</li>
              <li className="arrow-list">Fire & smoke damage</li>
              <li className="arrow-list">Mold</li>
              <li className="arrow-list">Weather damage</li>
              <li className="arrow-list">Odor damage</li>
              <li className="arrow-list">Specialty services</li>
            </ul>

            <strong>
              Our <a>commercial restoration</a> services include:
            </strong>

            <ul>
              <li className="arrow-list">Pre-loss planning</li>
              <li className="arrow-list">Water damage</li>
              <li className="arrow-list">Fire & smoke damage</li>
              <li className="arrow-list">Mold damage</li>
              <li className="arrow-list">Weather damage</li>
              <li className="arrow-list">Specialty services</li>
            </ul>

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

            <div className="black-box">
              Need help from one of the most trusted restoration companies near
              you? We can help get your home back to normal - call{" "}
              <a>(509) 646-7488</a> to get started!
            </div>

            <h2>Expert Fire Damage Repair in Spokane</h2>
            <p>
              Our <a>Spokane fire restoration</a> professionals have extensive
              training and experience. Trust us to assess the scope of smoke and
              fire damage in your home or business.
            </p>

            <p>
              The effects of fire and smoke damage are complex. They are often
              devastating to your personal home or commercial property.
            </p>

            <h2>Professional Mold Remediation Services in Spokane</h2>
            <p>
              Spokane mold removal is often a difficult process. But
              ServiceMaster by Compass has the expertise and technology for the
              job. <strong>Mold mitigation</strong> is serious business. Leave
              the <a> mold remediation</a> job to us.
            </p>

            <div className="outline-box">
              If you've experienced a disaster, Call us at <a>(509) 646-7488</a>{" "}
              or <a>contact our disaster restoration experts</a> online now!
            </div>
          </div>

          <div className="aside">
            <HomeSideBar />
          </div>
        </div>

        {/* end section one */}

        <div className="home-section">
          <div className="column-one">
            <h2>Damage Restoration Services in Spokane & Coeur d'Alene</h2>
            <p>
              No one is ever prepared for it. Emotions run high, lives are
              disrupted. When a disaster turns your world upside down, turn to
              ServiceMaster by Compass. We restore property after water damage,
              fire damage, mold, wind, vandalism, or other structural damage.
            </p>
            <p>
              Our <strong>disaster restoration</strong> technicians are here
              with sound advice and a calm, quick response. Many of our local
              customers <a>contact us</a> for{" "}
              <strong>water and fire restoration in Spokane, Wa.</strong>
            </p>

            <div className="yellow-box">
              Give our team a call at <a>(509) 646-7488</a> or <a>contact us</a>{" "}
              online to schedule water removal & mitigation services today!
            </div>

            <p>
              For Water and Fire Restoration near Spokane, WA call us today at
              <a className="underline-link" href="tel:5096467488">
                (509) 646-7488
              </a>{" "}
              or
              <a className="underline-link" href="/contact">
                request a disaster restoration estimate online
              </a>
              .
            </p>

            <p>
              We work together with Private Homeowners, Property Managers,
              Realtors, Insurance Agents and Adjusters.
            </p>

            <p>
              We will make sure the property is completely restored to your
              total satisfaction.
            </p>

            <p>
              ServiceMaster by Compass restores your property to its pre-loss
              condition. We help you put your life back in order.
            </p>

            <h3>
              Get the benefit of a Spokane restoration company that offers:
            </h3>

            <ul>
              <li className="arrow-list">
                Extensive certifications and comprehensive training
              </li>
              <li className="arrow-list">24/7 emergency availability</li>
              <li className="arrow-list">
                Guidance through the entire process, including insurance claims
              </li>
            </ul>

            <h3>We also serve the surrounding cities:</h3>

            <ul>
              <li className="arrow-list">Airway Heights</li>
              <li className="arrow-list">Athol</li>
              <li className="arrow-list">Bayview</li>
              <li className="arrow-list">Cataldo</li>
              <li className="arrow-list">Chattaroy</li>
              <li className="arrow-list">Cheney</li>
              <li className="arrow-list">Coeur D Alene</li>
              <li className="arrow-list">Colbert</li>
              <li className="arrow-list">Deer Park</li>
              <li className="arrow-list">Fairchild Air Force Base</li>
            </ul>

            <div className="outline-box">
              <p>
                <strong>FOR 24/7 EMERGENCY RESTORATION SERVICES, DIAL</strong>
                <br />
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                OR
                <a className="underline-link" href="/contact">
                  CONTACT OUR EXPERTS
                </a>{" "}
                ONLINE TODAY!
              </p>
            </div>

            <GetHelpNow text={"We're Committed to customer satisfaction"} />
          </div>

          <div className="aside">
            <Image
              src="/homebodyimage.jpg"
              alt="spokane couple dealing with water damage in their home"
              width={500} // or whatever width/height you want
              height={300}
            />
          </div>
        </div>
      </div>

      <div className="black-box-home">
        <h2>
          We know disaster comes with questions. We're here <br />
          for you.
        </h2>
        <button className="btn">
          <a href="/faqs">read our FAQS</a>
        </button>
      </div>

      <ServiceAreaMap />
      <HomeContact />
      <AccredCarousel />
    </div>
  );
}
