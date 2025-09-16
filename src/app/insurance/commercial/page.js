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

export default function CommercialBenefitsServices() {
  return (
    <div>
      <div className="top-image">
        <img src="/commercialins.jpg" />
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
              losses and the harder it becomes to recover. That's why
              ServiceMaster Restore is committed to providing rapid response and
              reliable restoration services for your policyholders.
            </p>

            <p>
              Our team of experts is available <strong>24/7, 365 days</strong> a
              year to respond swiftly to any urgent restoration and repair
              needs. Whether it's water damage, fire damage, mold remediation,
              or any other disaster, we have the knowledge, skills, and
              resources to address the situation promptly and effectively.{" "}
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
              restoration services that exceed your policyholders' expectations.
              Trust us to be there for your commercial policyholders when they
              need us most, helping them navigate the restoration process with
              confidence and get back in business as soon as possible.
            </p>

            <strong>
              Our commercial restoration services for your customers include:
            </strong>

            <ul>
              <li className="arrow-list">
                <a className="underline-link">Reconstruction services</a>
              </li>
              <li className="arrow-list">
                <a className="underline-link">Content restoration</a>
              </li>
              <li className="arrow-list">Mobilization</li>
              <li className="arrow-list">Building and site stabilization</li>
              <li className="arrow-list">
                <a className="underline-link">Pre-loss planning</a>
              </li>
            </ul>

            <GetHelpNow
              text={
                "Give us a call today to learn more about ou commercila insurance policyholder benefits"
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
