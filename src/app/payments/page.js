"use client";

import RestorePeace from "@/app/components/RestoringPeace";
import SideBarBox from "@/app/components/SideBarBox";
import UncertainTo from "@/app/components/UncertaintyTo";

const Links = [
  "/commercial/services",
  "/residential/services",
  "/insurance/professionals",
];

export default function PaymentFinancingOptions() {
  return (
    <div>
      <div className="top-image">
        <img
          src="/sub-banner.jpg"
          alt="Payment and financing options ServiceMaster"
        />
      </div>
      <div className="home-container bg-white">
        <div className="home-section">
          <div className="column-one">
            <h1>Payment & Financing Options</h1>
            <p>
              At ServiceMaster Restore, we know that unexpected disasters can
              create financial stress. That’s why we offer flexible payment and
              financing options to make the restoration process as smooth as
              possible. Whether you’re facing water damage, fire damage, or need
              mold remediation, we’re here to help you recover both physically
              and financially.
            </p>

            <h2>Payment Options</h2>
            <p>We accept a variety of convenient payment methods, including:</p>
            <ul>
              <li className="arrow-list">Credit cards</li>
              <li className="arrow-list">Checks</li>
              <li className="arrow-list">
                In-house financing (available at select locations)
              </li>
              <li className="arrow-list">
                Third-party financing (ask your local ServiceMaster Restore for
                details)
              </li>
            </ul>

            <h2>Insurance Support</h2>
            <p>
              We work with all major insurance carriers and can guide you
              through the claims process. Our team understands how to coordinate
              directly with your insurer to help reduce stress and avoid delays.
            </p>

            <h2>Flexible Financing Solutions</h2>
            <p>
              If insurance doesn’t cover the full cost of restoration, or if you
              prefer not to go through insurance, ask us about financing.
              Options vary by location.
            </p>

            <h2>Trusted Experience, National Reach</h2>
            <p>
              With over 65 years of experience and locations across the country,
              we’re a trusted name in restoration. We offer 24/7 emergency
              response and personalized service backed by a national network.
              Whether you’re a homeowner or a business owner, we have the tools,
              training, and resources to help you recover faster.
            </p>

            <h2>Industries We Serve</h2>
            <ul>
              <li className="arrow-list">Residential homes</li>
              <li className="arrow-list">Multi-family properties</li>
              <li className="arrow-list">Commercial offices</li>
              <li className="arrow-list">Healthcare facilities</li>
              <li className="arrow-list">Education institutions</li>
              <li className="arrow-list">Industrial spaces</li>
              <li className="arrow-list">And more</li>
            </ul>

            <h2>Ready to Get Started?</h2>
            <p>
              Let us take the worry off your plate. Contact your local
              ServiceMaster Restore today to learn more about payment options
              and request a free estimate.
            </p>

            <div className="outline-box">
              <p>
                <a className="underline-link">Call now</a> or{" "}
                <a className="underline-link">find your nearest location</a> to
                get started. We’re here 24/7 when you need us most.
              </p>
            </div>
          </div>

          <div className="column-two">
            <UncertainTo />
          </div>
        </div>
      </div>
      <RestorePeace />
    </div>
  );
}
