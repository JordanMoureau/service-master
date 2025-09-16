"use client";
import RestorePeace from "../../components/RestoringPeace";
import UncertainTo from "../../components/UncertaintyTo";
import SideBarBox from "../../components/SideBarBox";
import GetHelpNow from "../../components/GetHelpNow";

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

export default function InsuranceResidential() {
  return (
    <div>
      <div className="top-image">
        <img src="/residentialins.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>
              Benefits & Services for Your Residential Insurance Policyholders
            </h1>
            <h2>Here to Assist with Any Home Disaster Restoration</h2>
            <p>
              When the unexpected strikes, the experts at ServiceMaster Restore®
              are here to help you get your policyholders’ lives back to normal.
              Whether the problem is water, fire, mold, or a combination of all
              three, we solve residential disasters quickly.
            </p>

            <p>
              Our <a className="underline-link">restoration experts</a>{" "}
              understand that suffering a loss may be a first for your
              policyholders. That’s why we guide your client throughout the
              process and keep them – and you – informed every step of the way
              with advanced real-time technology.
            </p>

            <h3> Benefits of Partnering with ServiceMaster Restore</h3>
            <p>
              When you refer your customers to us, they receive quick Disaster
              Restoration responses in their time of need. In fact, we’ll arrive
              at their location within four hours or less to help mitigate loss
              and begin the restoration process as fast as possible. Our quick
              response helps reduce the severity of the claim and provides your
              customers with fast, professional service.
            </p>

            <p>
              As a full-service disaster restoration provider, we immediately
              dispatch the appropriate resources and oversee communication
              throughout the restoration process. Our emergency call center is
              ready to answer your call 24 hours a day, 7 days a week, 365 days
              a year.
            </p>
            <h3>Localized Expertise Backed by a National Network</h3>
            <p>
              While ServiceMaster Restore is a national network, we live and
              work in the same neighborhoods as our customers. You benefit from
              the scale and experience of a national company combined with the
              personalized service and guidance of a locally owned business.
            </p>

            <p>
              No matter the issue, we provide industry-leading claims management
              to make the process as smooth as possible for both the
              policyholder and insurance carrier.
            </p>
            <h3>High-Quality Customer Service with MasterMoments℠</h3>
            <p>
              Whether it’s damage from water, fire, or mold, ServiceMaster
              Restore has insurance agents covered. Developed to ensure
              remarkable customer service, MasterMoments℠ is a three-step
              process designed to deliver a better experience for both
              policyholders and insurance providers. It includes:
            </p>

            <ul>
              <li className="arrow-list">
                Walking the policyholder through our Emergency Recovery Guides
                to explain and set expectations regarding the claim
              </li>
              <li className="arrow-list">
                Calling the agent within 24-hours to communicate the
                policyholder’s situation and claim status
              </li>
              <li className="arrow-list">
                Calling the claim representative within 24-hours to relay the
                scope of the damage, emergency services provided and any
                important claim information
              </li>
            </ul>

            <h3>Keeping Everyone Informed with Real-Time Updates</h3>
            <p>
              We offer real-time mitigation claims management in fully mobile
              environments. Our cloud-based system provides timely information
              and updates to insurance carriers and policyholders as their
              claims proceed. It fully integrates with key estimating software
              and meets industry and data security standards.
            </p>

            <GetHelpNow
              text={
                "Don’t hesitate to reach out to our experts - we are standing by to take your call at"
              }
            />
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
