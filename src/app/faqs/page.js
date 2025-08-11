"use client";

import RestorePeace from "../components/RestoringPeace";
import SideBarBox from "../components/SideBarBox";
import GetHelpNow from "../components/GetHelpNow";

const Links = ["/faqs/residential", "/faqs/commercial"];

const List = ["FAQs - Residential", "FAQs - Commercial"];

export default function Faqs() {
  return (
    <div>
      <div className="top-image">
        <img src="/sub-banner.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Frequently Asked Questions</h1>
            <h2> ServiceMaster Restore Has the Answers</h2>

            <p>
              {" "}
              When your home or business sustains damage, whether it's from a
              storm, a fire, or mold, you undoubtedly have many thoughts and
              questions running through your head. The team at ServiceMaster
              Restore wants to be there for you in every way possible, from
              providing the restoration services you need to giving you the
              peace of mind you deserve by answering any questions you may have.
              With over six decades of experience, we have seen a lot and talked
              to many home and business owners. We understand how they feel and
              what they are going through. That's why we've compiled a list of
              the common questions we receive, along with our answers.{" "}
            </p>

            <p>
              {" "}
              We've broken our questions down by category. Explore the FAQ pages
              listed to the right for additional information on each of our
              restoration services. If you still have lingering questions or
              concerns, don't hesitate to reach out to our team. We are always
              here for your during these uncertain times.
            </p>

            <GetHelpNow
              text={
                "Our team is standing by to assist you with all your needs. Give us a call today at"
              }
            />
          </div>

          <div className="column-two">
            <SideBarBox title={"FAQS"} links={Links} list={List} />
          </div>
        </div>
      </div>
      <RestorePeace />
    </div>
  );
}
