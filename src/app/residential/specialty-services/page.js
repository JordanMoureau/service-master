"use client";

import RestorePeace from "@/app/components/RestoringPeace";
import SideBarBox from "@/app/components/SideBarBox";
import UncertainTo from "@/app/components/UncertaintyTo";

const Links = [
  "/residential/water-damage",
  "/residential/fire-and-smoke",
  "/residential/mold",
  "/residential/specialty-services",
];

const List = [
  "Water Damage",
  "Fire And Smoke",
  "Mold Damage",
  "Specialty Services",
];

export default function ResidentialSpecialtyServices() {
  return (
    <div>
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Specialty home restoration services Spokane"
        />
      </div>
      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Residential Specialty Restoration Services in Spokane, WA</h1>
            <h2>COMPREHENSIVE RESTORATION SOLUTIONS FOR YOUR HOME</h2>

            <p>
              Disasters can strike at any time, causing significant damage to
              your property. Located in Spokane, WA,{" "}
              <a className="underline-link" href="/">
                ServiceMaster by Compass
              </a>{" "}
              specializes in providing top-notch specialty restoration services
              to homeowners in the area. Our team of certified professionals is
              dedicated to restoring your property to its pre-loss condition
              quickly and efficiently.
            </p>

            <h3>Why Choose ServiceMaster?</h3>
            <p>
              Choosing our experts for your specialty restoration needs comes
              with several benefits:
            </p>

            <ul>
              <li className="arrow-list">
                <strong>Experienced Professionals:</strong> Our team of
                certified technicians is backed by a brand with over 65 years of
                experience in the restoration industry, ensuring high-quality
                service
              </li>
              <li className="arrow-list">
                <strong>24/7 Emergency Services:</strong> Disasters can happen
                at any time, which is why{" "}
                <strong>we offer 24/7 emergency services</strong> to promptly
                respond to you
              </li>
              <li className="arrow-list">
                <strong>Advanced Equipment:</strong> We use state-of-the-art
                equipment and techniques to ensure efficient and effective
                restoration
              </li>
              <li className="arrow-list">
                <strong>Comprehensive Services:</strong> From initial assessment
                to final restoration, we handle every aspect of the restoration
                process
              </li>
              <li className="arrow-list">
                <strong>Customer Satisfaction:</strong> Our top priority is
                customer satisfaction, and we strive to exceed your expectations
                with every project
              </li>
            </ul>

            <div className="black-box">
              <h2>
                DO YOU NEED SPECIALTY RESTORATION SERVICES FOR YOUR HOME IN
                SPOKANE? GIVE US A CALL AT{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                OR{" "}
                <a className="underline-link" href="/contact">
                  CONTACT US ONLINE
                </a>{" "}
                TO GET STARTED.
              </h2>
            </div>

            <h2>OUR SPECIALTY RESTORATION SERVICES</h2>
            <p>We offer the following specialty restoration services:</p>

            <ul>
              <li className="arrow-list">
                <strong>Trauma and Biohazard Cleanup:</strong> We offer
                compassionate and professional trauma cleanup services,
                including biohazard removal and sanitization, to help you
                through difficult times.
              </li>
              <li className="arrow-list">
                <strong>Hoarding Cleanup:</strong> Our hoarding cleanup services
                are designed to help individuals and families dealing with
                hoarding situations, providing thorough cleaning and
                organization.
              </li>
              <li className="arrow-list">
                <strong>Impact Damage:</strong> When sudden impact from storms
                or accidents damages your home, we quickly stabilize and restore
                your property to ensure minimal disruption to your daily life.
              </li>
              <li className="arrow-list">
                <strong>Reconstruction:</strong> Our expert reconstruction
                services seamlessly bring your home back to its original
                condition, using high-quality materials and skilled
                craftsmanship to ensure long-lasting results.
              </li>
              <li className="arrow-list">
                <strong>Air Duct Cleaning:</strong> Clean air ducts are crucial
                for maintaining a healthy indoor environment; our thorough
                cleaning services remove dust, allergens, and contaminants,
                improving your home's air quality and efficiency.
              </li>
              <li className="arrow-list">
                <strong>Tarping And Boardup:</strong> In the wake of unexpected
                damage, our tarping and boardup services protect your home from
                further exposure to the elements, safeguarding your property
                until permanent repairs can be made.
              </li>
              <li className="arrow-list">
                <strong>Packout And Content Management:</strong> We meticulously
                manage the packout and storage of your belongings, providing
                detailed inventory and careful handling to protect your
                valuables during the restoration process.
              </li>
            </ul>

            <div className="black-box">
              <h2>
                FOR SPECIALTY SERVICES THAT WILL RESTORE YOUR HOME ASAP, CALL{" "}
                <a className="underline-link" href="tel:5096467488">
                  (509) 646-7488
                </a>{" "}
                OR{" "}
                <a className="underline-link" href="/contact">
                  CONTACT US ONLINE
                </a>
                .
              </h2>
            </div>

            <h2>FREQUENTLY ASKED QUESTIONS</h2>

            <h3>What should I do immediately after a disaster?</h3>
            <p>
              After a disaster, your safety is the most important concern.
              Ensure that everyone is safe and contact emergency services if
              necessary. Once it is safe to do so, reach out to us for immediate
              assistance with your restoration needs.
            </p>

            <h3>Do you work with insurance companies?</h3>
            <p>
              Yes, we work with all major insurance companies and can assist you
              with the claims process to ensure a smooth and hassle-free
              experience.
            </p>

            <h3>How long does the restoration process take?</h3>
            <p>
              This depends on the extent of the damage and the specific services
              required. Our team will provide you with a detailed timeline and
              keep you informed throughout the process.
            </p>
          </div>

          <div className="column-two">
            <SideBarBox title={"Residential"} links={Links} list={List} />
            <UncertainTo />
          </div>
        </div>
      </div>
      <RestorePeace />
    </div>
  );
}
