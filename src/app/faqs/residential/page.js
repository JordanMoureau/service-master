import RestorePeace from "../../components/RestoringPeace";
import SideBarBox from "../../components/SideBarBox";
import GetHelpNow from "../../components/GetHelpNow";
import UncertainTo from "../../components/UncertaintyTo";

const Links = [
  "/faqs/residential/water-damage-faq",
  "/faqs/residential/mold-remediation-faq",
  "/faqs/residential/reconstruction-services-faq",
  "/faqs/residential/hoarding-faq",
  "/faqs/residential/fire-damage-faq",
  "/faqs/residential/air-duct-cleaning-faq",
];

const List = [
  "Water Damage FAQ",
  "Mold Remediation FAQ",
  "Reconstruction Services FAQ",
  "Hoarding FAQ",
  "Fire Damage FAQ",
  "Air Duct Cleaning FAQ",
];
const faqList = [
  {
    title: "water damage FAQ",
    link: "/faqs/residential/water-damage-faq",
  },
  {
    title: "mold remediation faq",
    link: "/faqs/residential/mold-remediation-faq",
  },
  {
    title: "hoarding faq",
    link: "/faqs/residential/hoarding-faq",
  },
  {
    title: "reconstruction services faq",
    link: "/faqs/residential/reconstruction-services-faq",
  },
  {
    title: "air duct cleaning faq",
    link: "/faqs/residential/air-duct-cleaning-faq",
  },
  {
    title: "fire damage & content management faq",
    link: "/faqs/residential/fire-damage-faq",
  },
];

export default function ResidentialFaqs() {
  return (
    <div>
      <div className="top-image">
        <img src="/sub-banner.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>FAQs | Residential Restoration Services</h1>
            <h2>Have Questions About Home Restoration? We Have Answers!</h2>
            <p>
              Depending on what restoration services you are seeking, your
              situation and needs can vary greatly. We encourage you to review
              our <strong>frequently asked questions (FAQs)</strong> list so you
              can make a prompt decision regarding the specific offerings you
              require. We know you don’t have time to wait for answers, and we
              hope our FAQs list expedites the process.
            </p>
            <p>
              To help you find your answer faster, we’ve broken our FAQs into
              sections around our services. If you have a question related to
              <a className="underline-link"> fire damage</a>,{" "}
              <a className="underline-link">water damage</a>, or anything else
              at your home, you should have no trouble locating the answer you
              need.{" "}
            </p>{" "}
            <p>
              We have little doubt you’ll find what you’re looking for here.
              However, if you have a more complex issue that requires a
              conversation with one of our specialists, don’t hesitate to
              <a href="/contact" className="underline-link">
                contact your local ServiceMaster Restore!
              </a>
            </p>
            <div className="faq-boxes">
              {faqList.map((faq, index) => (
                <div key={index} className="faq-box">
                  <h2>RESIDENTIAL {faq.title.toUpperCase()}</h2>
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
            <SideBarBox title={"RESIDENTIAL FAQS"} links={Links} list={List} />
            <UncertainTo />
          </div>
        </div>
      </div>
      <RestorePeace />
    </div>
  );
}
