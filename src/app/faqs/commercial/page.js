"use client";

import RestorePeace from "../../components/RestoringPeace";
import SideBarBox from "../../components/SideBarBox";
import GetHelpNow from "../../components/GetHelpNow";
import UncertainTo from "../../components/UncertaintyTo";

const Links = [
  "/faqs/commercial/water-restoration-faq",
  "/faqs/commercial/mold-remediation-faq",
  "/faqs/commercial/fire-restoration-faq",
  "/faqs/commercial/air-duct-faq",
];

const List = [
  "Water Damage FAQ",
  "Mold Remediation FAQ",
  "Fire Damage FAQ",
  "Air Duct Cleaning FAQ",
];

const faqList = [
  {
    title: "mold remediation faq",
    link: "/faqs/commercial/mold-remediation-faq",
  },
  {
    title: "water damage FAQ",
    link: "/faqs/commercial/water-restoration-faq",
  },
  {
    title: "air duct cleaning faq",
    link: "/faqs/commercial/air-duct-faq",
  },
  {
    title: "fire restoration faq",
    link: "/faqs/commercial/fire-restoration-faq",
  },
];

export default function CommercialFaqs() {
  return (
    <div>
      <div className="top-image">
        <img src="/commercialfaqs.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>
              Frequently Asked Questions About Commercial Restoration Services
            </h1>

            <p>
              Starting a business from scratch is a dream many entrepreneurs can
              only hope to realize. But you did it. Now, your livelihood is in
              jeopardy due to an unforeseen disaster that’s stolen your security
              and assurance.
            </p>

            <p>
              At ServiceMaster Restore, we know how challenging it can be to
              pick up the pieces of a thriving company because we’ve supported
              many business owners and property managers after property damage.
              As a result, we’ve had years working with commercial customers
              across the country and have a good idea of some of the commonly
              asked questions. To expedite the restoration process, so you don’t
              have to wait around for an answer, we’ve compiled some frequently
              asked questions (FAQs) for you to review.
            </p>
            <p>
              Whether you’ve just experienced an unexpected fire or discovered
              mold inside your office, we use state-of-the-art tools and methods
              to support a successful restoration project. Our compassionate and
              professional restoration experts will walk you through the
              process, helping you navigate virtually everything 24 hours a day,
              7 days a week, 365 days a year to get your business up and
              operating again. We aim to lighten your load as much as possible
              and bring back some much-needed certainty to the situation.
            </p>
            <p>
              We want to make things easier and lead you to a resolution as
              quickly as possible. We encourage you to review our list of FAQs
              below that we’ve broken into service categories, so you can find
              what you’re looking for easily and promptly. We know there are
              some questions that a webpage just can’t answer for you. In that
              case, we want to hear directly from you.
            </p>

            <GetHelpNow
              text={
                "Our team is standing by to assist you with all your needs. Give us a call today at"
              }
            />

            <p>
              Let us support you in getting your business doors open so you can
              get back to serving the local community.
            </p>

            <div className="faq-boxes">
              {faqList.map((faq, index) => (
                <div key={index} className="faq-box">
                  <h2>Commercial {faq.title.toUpperCase()}</h2>
                  <div className="arrow-row">
                    <span className="arrow-line"></span>
                    <a href={faq.link} className="btn">
                      READ FAQS
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <GetHelpNow
              text={
                "Our team is standing by to assist you with all your needs. Give us a call today at"
              }
            />
          </div>

          <div className="column-two">
            <SideBarBox title={"Commercial FAQs"} links={Links} list={List} />
            <UncertainTo />
          </div>
        </div>
      </div>
      <RestorePeace />
    </div>
  );
}
