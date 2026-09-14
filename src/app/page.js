import Image from "next/image";

import KnowUsPanel from "./components/KnowUsPanel";
import HomeGrid from "./components/HomeGrid";
import ServiceAreaMap from "./components/ServiceAreaMap";
import HomeContact from "./components/HomeContact";
import AccredCarousel from "./components/AcredCarousel";
import HomeSideBar from "./components/HomeSideBar";
import Hero from "./components/Hero";
import GetHelpNow from "./components/GetHelpNow";
import SMCPopup from "./components/HomePopUp";

// app/page.tsx (Home)

export const metadata = {
  title: "Comprehensive Restoration Services | ServiceMaster by Compass",
  description:
    "Emergency water damage & restoration in Spokane & Coeur d’Alene. Fast response, certified technicians, and clear guidance from first call to full recovery.",
  alternates: {
    canonical: "https://smcfireandwater.com/",
  },

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
      <SMCPopup />
      <KnowUsPanel />

      <Hero />

      <section className="lower-hero">
        <HomeGrid />
      </section>

      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h2 className="extra">
              Top-Rated Disaster Restoration in Spokane, WA
            </h2>

            <h2>Trusted Spokane Restoration Services Near You</h2>

            <p>
              ServiceMaster by Compass is a full-service disaster restoration
              contractor serving Spokane, Coeur d'Alene, and surrounding
              communities. Founded by Fred Anderson and Steve Young, we are here
              to help when water, fire, mold, or other property damage disrupts
              your home or business.
            </p>

            <p>
              We are a preferred contractor for{" "}
              <a href="/residential/water-damage">water damage restoration</a>{" "}
              and fire restoration throughout the Spokane area, working with
              national insurance companies and local agencies. ServiceMaster by
              Compass provides high-quality, guaranteed restoration services
              from emergency response through recovery.
            </p>

            <p>
              Our team of{" "}
              <a href="/residential">local damage restoration experts</a>{" "}
              approaches every job with pride, efficiency, and care. We have
              extensive experience across restoration and construction, helping
              property owners move from damage assessment through repairs.
            </p>

            <div className="outline-box">
              Get in touch with one of the most trusted restoration companies
              near you today! Give us a call at{" "}
              <a className="underline-link" href="tel:5095355440">
                (509) 535-5440
              </a>{" "}
              or <a href="/contact">contact us</a> online!
            </div>

            <h2>
              Comprehensive Restoration Services in Spokane & Coeur d'Alene
            </h2>

            <strong>
              Our <a href="/residential">residential restoration services</a>{" "}
              include:
            </strong>

            <ul>
              <li className="arrow-list">
                <a href="/residential/water-damage">Water damage restoration</a>
              </li>

              <li className="arrow-list">
                <a href="/residential">Fire & smoke damage restoration</a>
              </li>

              <li className="arrow-list">
                <a href="/residential/mold">Mold remediation</a>
              </li>

              <li className="arrow-list">
                <a href="/residential/weather">Weather damage restoration</a>
              </li>

              <li className="arrow-list">
                <a href="/residential/odor">Odor removal</a>
              </li>

              <li className="arrow-list">
                <a href="/residential/specialty-services">
                  Specialty restoration services
                </a>
              </li>
            </ul>

            <strong>
              Our <a href="/commercial">commercial restoration services</a>{" "}
              include:
            </strong>

            <ul>
              <li className="arrow-list">
                <a href="/commercial/pre-loss-planning">Pre-loss planning</a>
              </li>

              <li className="arrow-list">
                <a href="/commercial/water-damage">
                  Commercial water damage restoration
                </a>
              </li>

              <li className="arrow-list">
                <a href="/commercial">Fire & smoke damage restoration</a>
              </li>

              <li className="arrow-list">
                <a href="/commercial/mold">Mold damage restoration</a>
              </li>

              <li className="arrow-list">
                <a href="/commercial/weather">Weather damage restoration</a>
              </li>

              <li className="arrow-list">
                <a href="/commercial">Specialty restoration services</a>
              </li>
            </ul>

            <h2>
              Emergency Water Damage & Flood Cleanup in Spokane & Coeur d'Alene
            </h2>

            <p>
              Addressing water damage quickly is critical to protecting the
              structure of your home or building. Standing water and hidden
              moisture can spread into flooring, walls, insulation, and other
              building materials, increasing the risk of additional damage.
            </p>

            <p>
              You need prompt action from an experienced{" "}
              <a href="/residential/water-damage">
                water damage restoration team
              </a>
              . Professional water extraction, drying, mitigation, and
              restoration can make all the difference in limiting structural
              damage to your property.
            </p>

            <p>
              Whether you're dealing with flooding, a burst pipe, an appliance
              leak, storm damage, or another water emergency, our Spokane and
              Coeur d'Alene restoration team has the equipment and experience
              needed to begin the drying process quickly. Learn more about our{" "}
              <a href="/residential/water-damage">
                residential water damage and flood restoration services
              </a>{" "}
              or our{" "}
              <a href="/commercial/water-damage">
                commercial water damage restoration services
              </a>
              .
            </p>

            <div className="black-box">
              Have water or flood damage? Our emergency restoration team is
              ready to help get your property back to normal. Call{" "}
              <a href="tel:5095355440">(509) 535-5440</a> to get started!
            </div>

            <h2>Expert Fire Damage Repair in Spokane</h2>

            <p>
              Our{" "}
              <a href="/residential">Spokane fire restoration professionals</a>{" "}
              have extensive training and experience. Trust us to assess the
              scope of smoke and fire damage in your home or business and
              develop a plan for restoration.
            </p>

            <p>
              The effects of fire and smoke damage are complex and can extend
              far beyond the immediately burned area. They can be devastating to
              a home or commercial property, making professional cleanup and
              restoration an important part of the recovery process.
            </p>

            <h2>Professional Mold Remediation Services in Spokane</h2>

            <p>
              Spokane mold removal is often a difficult process, particularly
              when excess moisture is hidden inside walls, ceilings, or other
              building materials. ServiceMaster by Compass has the expertise and
              technology for the job. <strong>Mold mitigation</strong> is
              serious business. Leave professional{" "}
              <a href="/residential/mold">mold remediation</a> to our
              experienced team.
            </p>

            <p>
              Mold is often connected to leaks, flooding, and unresolved
              moisture problems. If your property has recently experienced water
              damage, our{" "}
              <a href="/residential/water-damage">
                water damage restoration services
              </a>{" "}
              can help remove excess water and dry affected materials before
              additional problems develop.
            </p>

            <div className="outline-box">
              If you've experienced a disaster, call us at{" "}
              <a href="tel:5095355440">(509) 535-5440</a> or{" "}
              <a href="/contact">contact our disaster restoration experts</a>{" "}
              online now!
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
              No one is ever prepared for property damage. Emotions run high and
              lives are disrupted. When a disaster turns your world upside down,
              turn to ServiceMaster by Compass. We restore property after{" "}
              <a href="/residential/water-damage">water damage and flooding</a>,
              fire damage, <a href="/residential/mold">mold</a>,{" "}
              <a href="/residential/weather">severe weather</a>, vandalism, and
              other structural damage.
            </p>

            <p>
              Our <strong>disaster restoration</strong> technicians are here
              with sound advice and a calm, quick response. Many of our local
              customers contact us for{" "}
              <a href="/residential/water-damage">
                water damage restoration in Spokane
              </a>{" "}
              and the surrounding Inland Northwest.
            </p>

            <div className="yellow-box">
              Give our team a call at{" "}
              <a href="tel:5095355440">(509) 535-5440</a> or{" "}
              <a href="/contact">contact us</a> online to schedule water
              removal, drying, and mitigation services today!
            </div>

            <p>
              For{" "}
              <a href="/residential/water-damage">
                water and flood restoration near Spokane, WA
              </a>
              , call us today at{" "}
              <a className="underline-link" href="tel:5095355440">
                (509) 535-5440
              </a>{" "}
              or{" "}
              <a className="underline-link" href="/contact">
                request a disaster restoration estimate online
              </a>
              .
            </p>

            <p>
              Commercial property owners can also turn to our{" "}
              <a href="/commercial/water-damage">
                commercial water damage restoration team
              </a>{" "}
              for water extraction, drying, dehumidification, and restoration
              after leaks, flooding, storms, and other water emergencies.
            </p>

            <p>
              We work together with private homeowners, property managers,
              Realtors, insurance agents, and adjusters throughout the
              restoration process.
            </p>

            <p>
              For property owners navigating an insurance claim, our team can
              provide restoration documentation and coordinate with insurance
              professionals as the work progresses. Learn more about the{" "}
              <a href="/insurance">insurance restoration process</a>.
            </p>

            <p>
              We work to make sure the property is completely restored to your
              satisfaction while keeping you informed about the work taking
              place.
            </p>

            <p>
              ServiceMaster by Compass restores your property toward its
              pre-loss condition. From emergency mitigation through final
              repairs, our goal is to help you put your home or business back in
              order.
            </p>

            <h3>
              Get the benefit of a Spokane restoration company that offers:
            </h3>

            <ul>
              <li className="arrow-list">
                Extensive certifications and comprehensive training
              </li>

              <li className="arrow-list">
                <a href="/contact/direct-form">
                  24/7 emergency restoration response
                </a>
              </li>

              <li className="arrow-list">
                Guidance through the entire process, including insurance claims
              </li>

              <li className="arrow-list">
                <a href="/residential/water-damage">
                  Professional water extraction and structural drying
                </a>
              </li>

              <li className="arrow-list">
                Residential and{" "}
                <a href="/commercial">commercial restoration services</a>
              </li>
            </ul>

            <p>
              Have questions about the restoration process? Visit our{" "}
              <a href="/faqs/residential">residential restoration FAQs</a> or
              our <a href="/faqs/commercial">commercial restoration FAQs</a>.
              For questions specifically related to business flooding or water
              damage, see our{" "}
              <a href="/faqs/commercial/water-restoration-faq">
                commercial water damage FAQs
              </a>
              .
            </p>

            <h3>We also serve the surrounding cities:</h3>

            <ul>
              <li className="arrow-list">Airway Heights</li>
              <li className="arrow-list">Athol</li>
              <li className="arrow-list">Bayview</li>
              <li className="arrow-list">Cataldo</li>
              <li className="arrow-list">Chattaroy</li>
              <li className="arrow-list">Cheney</li>
              <li className="arrow-list">Coeur d'Alene</li>
              <li className="arrow-list">Colbert</li>
              <li className="arrow-list">Deer Park</li>
              <li className="arrow-list">Fairchild Air Force Base</li>
            </ul>

            <p>
              From Spokane and Spokane Valley to Coeur d'Alene and communities
              across the Inland Northwest, ServiceMaster by Compass provides
              emergency restoration services for homes and businesses affected
              by water, fire, mold, storms, and other property damage.
            </p>

            <div className="outline-box">
              <p>
                <strong>FOR 24/7 EMERGENCY RESTORATION SERVICES, DIAL</strong>
                <br />
                <a className="underline-link" href="tel:5095355440">
                  (509) 535-5440
                </a>{" "}
                OR{" "}
                <a className="underline-link" href="/contact/direct-form">
                  REQUEST EMERGENCY RESTORATION HELP
                </a>{" "}
                ONLINE TODAY!
              </p>
            </div>

            <GetHelpNow text={"We're Committed to customer satisfaction"} />
          </div>

          <div className="aside">
            <Image
              src="/homebodyimage.jpg"
              alt="Spokane homeowners dealing with water damage in their home"
              width={500}
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
