"use client";
import RestorePeace from "@/app/components/RestoringPeace";
import UncertainTo from "@/app/components/UncertaintyTo";
import SideBarBox from "@/app/components/SideBarBox";
import GetHelpNow from "@/app/components/GetHelpNow";

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

export default function InsuranceEducation() {
  return (
    <div>
      <div className="top-image">
        <img src="/insce.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>
              Continuing Education (CE) Courses for Insurance Professionals
            </h1>
            <h2>Preparing You to Fully Assist Your Policyholders</h2>
            <p>
              As an insurance professional, you're often the first contact for a
              policyholder who has experienced a disaster. The more you know
              about the disaster mitigation process and recovery, the more you
              can guide your client in taking the right steps to control the
              damage, and therefore control costs.
            </p>

            <p>
              With Continuing Education (CE) course options from ServiceMaster
              Restore, you and your staff can be better equipped to help your
              policyholders by understanding the latest disaster restoration
              techniques, procedures, and best practices.
            </p>

            <div className="outline-box">
              <h2>
                {" "}
                reach out to us today at or{" "}
                <a
                  className="underline-link"
                  href="https://www.servicemasterrestore.com/locations/"
                >
                  go online To learn more
                </a>{" "}
                about our CE Classes for insurance porfessionals.
              </h2>
            </div>

            <h3>
              Continuing Education (CE) Classes Designed to Help Improve
              Customer Service
            </h3>

            <p>
              We have developed curricula that emphasize the cost-saving
              benefits of quick response and expert action in a variety of
              critical areas. In addition to helping you understand the effects
              of a disaster and the steps involved in restoring the structure
              and the contents within it, these courses give you the knowledge
              needed to put your policyholders at ease.
            </p>

            <p>
              Browse the available insurance Continuing Education (CE) classes
              below.
            </p>

            <h3>Water-Related Courses</h3>

            <strong>Water Damage Mitigation</strong>

            <p>Through this course, you’ll learn:</p>

            <ul>
              <li className="arrow-list">
                How water can damage carpet, wood floors, and other building
                materials
              </li>
              <li className="arrow-list">
                How much time can pass until damage occurs
              </li>
              <li className="arrow-list">
                What steps can be taken to reduce or minimize the damage
              </li>
              <li className="arrow-list">The water removal process</li>
              <li className="arrow-list">
                The principles of drying and dehumidification
              </li>

              <li className="arrow-list">
                Information regarding mold growth and the mold mitigation
                process
              </li>
              <li className="arrow-list">
                The use of antimicrobials during water damage clean-up and
                restoration
              </li>
              <li className="arrow-list">Odor control techniques</li>
            </ul>

            <strong>Subrogation reporting on mitigation claims</strong>

            <p>
              This course is designed to help you control claims costs through
              subrogation investigation and reporting, plus teach you the value
              of mitigation first responders in achieving this objective.
            </p>

            <h3>Mold-Related Courses</h3>
            <strong>Mold Remediation in Homes</strong>
            <p>
              This program introduces the science of mold and explores the
              potentially harmful effects of mold on building materials and
              occupants. Through this course, you’ll learn:
            </p>
            <ul>
              <li className="arrow-list">How mold grows</li>
              <li className="arrow-list">How mold spreads</li>
              <li className="arrow-list">
                What actions should be taken to remove mold in a safe and
                reasonable manner
              </li>
              <li className="arrow-list">
                Procedures such as containment, negative air and the proper use
                of personal protective equipment (PPE)
              </li>
            </ul>

            <strong>Mold remediation removal and containment</strong>
            <p>Through this course, you’ll learn:</p>
            <ul>
              <li className="arrow-list">Mold detection processes</li>
              <li className="arrow-list">
                Mold removal and containment processes
              </li>
              <li className="arrow-list">
                The source of mold and growth requirements
              </li>
              <li className="arrow-list">
                Health effects associated with exposure
              </li>
              <li className="arrow-list">Removal myths</li>
              <li className="arrow-list">
                Proper versus improper clean-up methods
              </li>
              <li className="arrow-list">
                Containment and safety best practices
              </li>
            </ul>

            <h3>Fire-Related & Smoke-Related Courses</h3>
            <strong>Mitigating a Smoke and Odor Loss</strong>
            <p>Through this course, you’ll learn:</p>

            <ul>
              <li className="arrow-list">
                How smoke and odor flow throughout a home
              </li>
              <li className="arrow-list">
                The damages smoke can cause in certain stages, including
                seconds, minutes, hours, and days after a disaster
              </li>
              <li className="arrow-list">
                What should be done about smoke and odor damage
              </li>
              <li className="arrow-list">
                Proper smoke mitigation steps that can help reduce loss
              </li>
            </ul>

            <h3>Odor-Related Courses</h3>
            <strong>Odor mitigation</strong>
            <p>
              Odor is often associated with pet contamination, fire, smoke,
              water, and mold issues. Given this, insurance professionals who
              are informed about odor mitigation can better support their
              customers during the claims process. Policyholders can benefit
              from the insurance professionals' expanded knowledge of odor,
              which in many instances can reduce costs or additional claims
              expenses, expedite the claims process, and provide...
            </p>

            <h3>Packout-Related Courses</h3>
            <strong>Mitigating personal property packout claims</strong>
            <p>
              This course demonstrates how technology is enabling restoration
              professionals to manage and track packout inventory, movement, and
              restoration progress better than ever before, giving the homeowner
              or business manager a sense of security throughout the process.
              The course covers the tools and technology of evaluating,
              restoring, and tracking inventory from start to finish.
            </p>

            <h3>Furniture-Related Courses</h3>
            <strong>
              Reducing severities through an understanding of furniture damage
              and restoration
            </strong>
            <p>
              Through this course, you’ll learn the various causes and types of
              damage that can occur to fine furniture and wood surfaces in a
              property loss situation.
            </p>

            <h3>Legal-Related Courses</h3>
            <strong>
              Ethics: If you don’t live it, you don’t believe it V 2.0
            </strong>
            <p>
              This course is designed to provide a practical look at ethical
              decision-making. Instead of relying on a "gut feeling," this
              process takes the decision-maker through several filters, which
              ensure that all parties affected by the decision are considered.
            </p>

            <h3>Biohazard-Related Courses</h3>
            <strong>Trauma and biohazard losses (Selective states)</strong>
            <p>
              What can the customer expect from a quality restoration firm in
              dealing with trauma and biohazard losses? Understanding the unique
              losses that are classified as Trauma and Biohazard cleaning is the
              first step in understanding how to respond to the customers'
              needs. How these types of losses are handled greatly impact
              customer retention for the insurance company.
            </p>

            <h3>Hoarding-Related Courses</h3>
            <strong>Hoarding (selective states)</strong>
            <p>
              This course covers why hoarding is important to insurance
              companies, adjusters, and professionals. It is designed to help
              you:
            </p>
            <ul>
              <li className="arrow-list">Understand hoarders</li>
              <li className="arrow-list">Identify a hoarder</li>
              <li className="arrow-list">
                Learn how to handle a loss properly when a hoarder is involved.
                This course also covers the impact on the claims process and
                claim cost as well as concerns that arise when a loss of this
                type is encountered.
              </li>
            </ul>

            <h3>Business-Related Courses</h3>
            <strong>Surviving a disaster in your business</strong>
            <p>
              This is a three-hour presentation that focuses on what happens
              when a disaster occurs in a business and the importance of
              pre-loss planning. The class provides instructions and hands-on
              scenarios to assist insurance professionals in putting the right
              pieces together to create a plan. Participants will discuss and
              develop five key components of a plan, including:
            </p>
            <ul>
              <li className="arrow-list">
                Assessing business threats and risk levels
              </li>
              <li className="arrow-list">
                Determining what a Disaster Planning Team looks like
              </li>
              <li className="arrow-list">
                The importance of insurance in the plan
              </li>
              <li className="arrow-list">
                What continuity looks like for the business
              </li>
              <li className="arrow-list">Whether the plan is effective</li>
            </ul>
            <p>
              Not all courses are approved for all states. ServiceMaster Restore
              is an approved CE provider in 48 states.
            </p>

            <div className="side-arrow-box">
              <h1>
                Find your location to learn more about local continuing
                education classes for insurance professionals.
              </h1>

              <div className="bottom-flex">
                <a
                  href="http://servicemasterrestore.com/locations/"
                  className="btn"
                >
                  Find Your Location
                </a>

                <div className="line"></div>
              </div>
            </div>
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
