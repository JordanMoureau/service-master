"use client";

import SideBarBox from "../../components/SideBarBox";
import UncertainTo from "../../components/UncertaintyTo";

import RestorePeace from "../../components/RestoringPeace";

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

export default function CommercialSpecialtyServices() {
  return (
    <div>
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Commercial Specialty Services in Spokane"
        />
      </div>
      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Commercial Specialty Services in Spokane, WA</h1>
            <h2>Protect Your Business with Our Expert Services</h2>

            <p>
              From natural disasters to unexpected vandalism, these unforeseen
              events can disrupt your business and cause stress. That’s where
              <a href="/" className="underline-link">
                {" "}
                ServiceMaster by Compass’s
              </a>{" "}
              comprehensive specialty services come into play. With over six
              decades of expertise, we are committed to restoring your peace of
              mind and ensuring your business can continue operating smoothly,
              no matter the circumstances.
            </p>

            <p>
              As a local provider of commercial disaster restoration, we take
              pride in helping Spokane’s business community recover quickly and
              efficiently. We go beyond standard restoration services, offering
              a wide range of specialty solutions tailored to your unique needs.
              Our goal is simple: to minimize downtime and keep your business
              running when the unexpected happens.
            </p>

            <h3>Here’s an overview of our commercial specialty services:</h3>
            <ul>
              <li className="arrow-list">
                <strong>Vandalism Cleanup:</strong> When your property is
                targeted by vandals, we provide rapid cleanup services to remove
                graffiti, repair damages, and restore the professional
                appearance of your business.
              </li>
              <li className="arrow-list">
                <strong>Reconstruction Services:</strong> Our team manages the
                entire reconstruction process, from assessing the damage to
                completing repairs, ensuring your facility is restored to its
                pre-loss condition.
              </li>
              <li className="arrow-list">
                <strong>Tarping and Boardup Services:</strong> To protect your
                property from further damage after a fire, storm, or accident,
                we offer emergency tarping and board-up services to secure
                exposed areas.
              </li>
              <li className="arrow-list">
                <strong>Packout and Content Management:</strong> We carefully
                pack, inventory, and store your business’s valuable assets
                during restoration, ensuring everything is protected and
                accounted for during the recovery process.
              </li>
              <li className="arrow-list">
                <strong>Post-Loss Recovery:</strong> From cleaning up debris to
                managing logistics, our post-loss recovery services focus on
                getting your business back to normal quickly after a disaster.
              </li>
              <li className="arrow-list">
                <strong>Decontamination Services:</strong> Our advanced
                decontamination services eliminate harmful pathogens and
                contaminants, providing a clean and safe environment for your
                employees and customers.
              </li>
            </ul>

            <h3>Your Partner in Commercial Recovery</h3>
            <p>
              At ServiceMaster by Compass, we are more than a service provider –
              we are a partner in your business’s recovery and resilience.
              Whether you’re facing vandalism, a natural disaster, or need
              routine decontamination, we bring the expertise, speed, and care
              needed to restore your property and protect your bottom line.
            </p>

            <h3>Why Spokane Businesses Trust Us</h3>
            <p>
              As a part of the Spokane community, we understand the local
              challenges and take pride in offering reliable, responsive service
              when you need it most.{" "}
              <strong>
                We’re available 24/7, 365 days a year to help our neighbors.
              </strong>{" "}
              Our commitment to quality, customer service, and fast response
              times make us the top choice for commercial restoration and
              specialty services in the area.
            </p>

            <div className="black-box">
              <h2>
                For specialty services that will restore your business ASAP,
                call{" "}
                <a href="tel:5096467488" className="underline-link">
                  (509) 646-7488
                </a>{" "}
                or{" "}
                <a href="/contact" className="underline-link">
                  contact us online
                </a>
                .
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
