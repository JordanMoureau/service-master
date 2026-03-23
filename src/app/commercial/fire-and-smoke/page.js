import SideBarBox from "../../components/SideBarBox";
import UncertainTo from "../../components/UncertaintyTo";

import RestorePeace from "../../components/RestoringPeace";

const Links = [
  "/commercial/fire-and-smoke",
  "/commercial/mold",
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

export const metadata = {
  title:
    "Commercial Fire & Smoke Damage Restoration in Spokane, WA | ServiceMaster by Compass",
  description:
    "Commercial fire and smoke damage restoration in Spokane, WA. 24/7 emergency fire cleanup, smoke and soot removal, odor elimination, reconstruction, and insurance claim assistance. Call (509) 646-7488.",
  keywords: [
    "commercial fire damage restoration",
    "commercial smoke damage restoration",
    "commercial fire restoration Spokane",
    "commercial smoke cleanup Spokane",
    "emergency fire damage repair commercial",
    "commercial soot removal services",
    "commercial smoke odor removal",
    "fire and smoke cleanup for businesses",
    "commercial fire damage repair Spokane",
    "commercial fire insurance claim assistance",
    "commercial reconstruction after fire",
    "Spokane commercial restoration services",
    "ServiceMaster fire damage Spokane",
  ],
  alternates: {
    canonical: "https://smcfireandwater.com/commercial/fire-and-smoke",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smcfireandwater.com/commercial/fire-and-smoke",
    siteName: "ServiceMaster by Compass",
    title:
      "Commercial Fire & Smoke Damage Restoration in Spokane, WA | ServiceMaster by Compass",
    description:
      "24/7 commercial fire and smoke damage restoration in Spokane. Emergency cleanup, soot removal, odor elimination, reconstruction, and insurance coordination.",
    images: [
      {
        url: "https://smcfireandwater.com/fire-and-smoke.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial fire and smoke damage restoration in Spokane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Commercial Fire & Smoke Damage Restoration in Spokane, WA | ServiceMaster by Compass",
    description:
      "Emergency commercial fire and smoke damage restoration in Spokane. Cleanup, odor removal, reconstruction, and insurance help.",
    images: ["https://smcfireandwater.com/fire-and-smoke.jpg"],
  },
};

export default function CommercialFireAndSmoke() {
  return (
    <div>
      <div className="top-image">
        <img
          src="/fire-and-smoke.jpg"
          alt="Fire and smoke damage restoration in Spokane"
        />
      </div>
      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Commercial Fire and Smoke Damage Restoration in Spokane</h1>
            <h3>
              Comprehensive Recovery Solutions for Residential and Commercial
              Properties
            </h3>

            <h3>Emergency Fire Damage Repair</h3>
            <p>
              When fire strikes, the aftermath can be overwhelming and
              devastating. At ServiceMaster by Compass, we understand the
              urgency of addressing fire damage, which is why we offer{" "}
              <strong>emergency fire damage repair</strong> services. Our team
              is available 24/7 to respond to your call, providing immediate
              assistance to secure your property and begin the restoration
              process. Our emergency services include:
            </p>
            <ul>
              <li className="arrow-list">
                Board-up and tarping services to protect exposed areas
              </li>
              <li className="arrow-list">
                Structural stabilization and safety assessments
              </li>
              <li className="arrow-list">
                Immediate soot and smoke removal to prevent further damage
              </li>
            </ul>

            <div className="outline-box yellow">
              <h2>
                Dial{" "}
                <a href="tel:5096467488" className="underline-link">
                  (509) 646-7488
                </a>{" "}
                or{" "}
                <a href="/contact" className="underline-link">
                  contact us
                </a>{" "}
                online for commercial fire restoration in Spokane today!
              </h2>
            </div>

            <h3>Fire Damage Restoration Services</h3>
            <p>
              Restoring your property after a fire requires expertise and a
              comprehensive approach. Our{" "}
              <strong>fire damage restoration services</strong> are designed to
              bring your property back to its pre-loss condition. We handle
              every aspect of the restoration, including:
            </p>
            <ul>
              <li className="arrow-list">
                Complete assessment of fire and smoke damage
              </li>
              <li className="arrow-list">
                Removal of damaged materials and debris
              </li>
              <li className="arrow-list">
                Thorough cleaning, sanitization, and soot removal
              </li>
              <li className="arrow-list">Reconstruction of affected areas</li>
              <li className="arrow-list">
                Coordination with insurance companies for claims processing
              </li>
            </ul>

            <h3>Smoke Damage Cleanup Process</h3>
            <p>
              Smoke can infiltrate every nook and cranny of your property,
              leaving behind odors and residue that are difficult to remove. Our{" "}
              <strong>smoke damage cleanup process</strong> includes:
            </p>
            <ol>
              <li>Assessment of smoke and soot spread</li>
              <li>
                Use of advanced air filtration devices to remove particulates
                from the air
              </li>
              <li>
                Application of specialized cleaning agents to break down smoke
                residues
              </li>
              <li>Deodorization of affected areas to neutralize odors</li>
              <li>Sealing of surfaces to prevent odor permeation</li>
            </ol>

            <h3>Soot Removal Techniques</h3>
            <p>
              Soot can cause significant damage to surfaces and belongings if
              not addressed promptly. Our{" "}
              <strong>soot removal techniques</strong> employ the latest in
              cleaning technology and methods, including:
            </p>
            <ul>
              <li className="arrow-list">
                HEPA vacuuming for loose soot particles
              </li>
              <li className="arrow-list">
                Dry sponging to gently remove soot without smearing
              </li>
              <li className="arrow-list">
                Wet cleaning for washable items affected by soot
              </li>
              <li className="arrow-list">
                Chemical sponges for delicate surfaces
              </li>
              <li className="arrow-list">
                Ultrasonic cleaning for intricate items
              </li>
            </ul>

            <h3>Professional Smoke Odor Elimination</h3>
            <p>
              Eliminating the smell of smoke requires more than just surface
              cleaning. Our <strong>professional smoke odor elimination</strong>{" "}
              services ensure that your property is free of any lingering odors.
              We use advanced deodorization techniques, such as:
            </p>
            <ul>
              <li className="arrow-list">
                Ozone treatment to break down odor molecules
              </li>
              <li className="arrow-list">
                Thermal fogging to penetrate deep into affected materials
              </li>
              <li className="arrow-list">
                Hydroxyl generators for safe and effective odor removal
              </li>
              <li className="arrow-list">
                Sealants to lock in any remaining odors
              </li>
            </ul>

            <h3>Preventing Fire and Smoke Damage</h3>
            <p>
              While our team at ServiceMaster by Compass is equipped to handle
              fire and smoke damage restoration, we also understand the
              importance of preventing these disasters from occurring in the
              first place. Here are some tips to help protect your property:
            </p>
            <ul>
              <li className="arrow-list">
                Install smoke detectors on every level of your home or business
              </li>
              <li className="arrow-list">
                Regularly inspect and maintain your electrical systems
              </li>
              <li className="arrow-list">
                Keep flammable materials away from heat sources
              </li>
              <li className="arrow-list">
                Have your heating systems, chimneys, and fireplaces inspected
                annually
              </li>
              <li className="arrow-list">
                Develop and practice a fire escape plan with your family or
                employees
              </li>
            </ul>

            <h3>Restoring Fire Damaged Property</h3>
            <p>
              <strong>Restoring fire damaged property</strong> is a task that
              requires meticulous planning and execution. Our team works
              tirelessly to ensure that every detail is addressed, from
              structural repairs to the restoration of personal items. We aim to
              restore not only your property but also your peace of mind.
            </p>

            <h3>Fire Damage Insurance Claim Assistance</h3>
            <p>
              Dealing with insurance companies after a fire can be complicated
              and stressful. ServiceMaster by Compass offers{" "}
              <strong>fire damage insurance claim assistance</strong> to help
              you navigate the claims process. Our team works directly with your
              insurance company to ensure that all necessary documentation is
              provided and that you receive the coverage you’re entitled to.
            </p>

            <h3>Post-Fire Cleanup and Safety Tips</h3>
            <p>
              After a fire, safety is the top priority. Here are some{" "}
              <strong>post-fire cleanup and safety tips</strong> to consider:
            </p>
            <ul>
              <li className="arrow-list">
                Do not enter the property until it has been declared safe by
                authorities
              </li>
              <li className="arrow-list">
                Wear protective gear when handling fire-damaged items
              </li>
              <li className="arrow-list">
                Discard any food, beverages, or medicines exposed to heat,
                smoke, or soot
              </li>
              <li className="arrow-list">
                Avoid using electrical appliances until they have been checked
                for safety
              </li>
              <li className="arrow-list">
                Document all damage with photos and detailed notes for insurance
                purposes
              </li>
            </ul>

            <p>
              ServiceMaster by Compass is dedicated to providing support and
              guidance throughout the entire post-fire recovery process.
            </p>

            <div className="outline-box yellow">
              <h2>
                <a href="/contact" className="underline-link">
                  Contact ServiceMaster by Compass
                </a>{" "}
                for expert fire and smoke damage restoration services. Our team
                is ready to help you reclaim your property and your life after a
                fire.
              </h2>
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
