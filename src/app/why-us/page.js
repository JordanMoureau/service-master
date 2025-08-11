"use client";

import GetHelpNow from "../components/GetHelpNow";
import SideBarBox from "../components/SideBarBox";
import UncertainTo from "../components/UncertaintyTo";

const Links = [
  "/why-us/about-us",
  "/why-us/meet-the-team",
  "/why-us/testimonials",
  "https://www.servicemasterrestore.com/contact-corporate/",
];

const List = ["About Us", "Meet The Team", "Testimonials", "Contact Corporate"];

export default function WhyUs() {
  return (
    <div>
      <div className="top-image">
        <img src="/why-us.jpg" />
      </div>
      <div className="home-container">
        <div className="home-section">
          <div className="column-one">
            <h1>Why ServiceMaster Restore?</h1>
            <h2>
              Because We’re Committed to Guiding You from Crisis to Resolution
            </h2>
            <p>
              For more than 65 years, ServiceMaster Restore® has held strong to
              our core value of providing restoration services with the utmost
              integrity and understanding. We invest in our customer
              relationships, and work directly and collaboratively with our
              customers to provide the optimal solution. Available 24/7 every
              day of the year, the experts at ServiceMaster Restore work to get
              the job done right and stay by your side until you’re satisfied
              with the results.
            </p>

            <ul>
              <li className="arrow-list">
                <strong>We are supportive.</strong> We understand that disasters
                are a time of uncertainty. Since we’ve experienced it all
                before, we’re proud to help guide our customers through these
                unsettling times, providing support and guidance from beginning
                to end, to help customers navigate the solution that's right for
                them.
              </li>
              <li className="arrow-list">
                <strong>We are genuine.</strong> We provide the care,
                understanding, and integrity our customers deserve.
              </li>
              <li className="arrow-list">
                <strong>We are experts.</strong> In fact, we wrote the playbook,
                continually set the industry standards, and know how to do it
                best.
              </li>
              <li className="arrow-list">
                <strong>We are committed.</strong> We have an unwavering
                commitment to working with our customers throughout the process,
                do what we say we'll do, and follow up to ensure satisfaction.
              </li>
              <li className="arrow-list">
                <strong>We are accessible.</strong> We’re available 24/7 every
                day of the year to help our customers through the worst, and to
                ease any confusion and provide understanding throughout every
                step of the process.
              </li>
            </ul>
            <h3>Comprehensive Training & Certification</h3>
            <p>
              Being the best in the business starts with having highly-trained
              professionals. In our 20,000 square feet state-of-the-art training
              facility located in Memphis, Tennessee, we provide comprehensive
              training for all our employees, as well as ongoing training for
              both franchise owners and their staff.
            </p>
            <h3>Greater Preparedness Through Our Disaster Operations Center</h3>
            <p>
              Our Disaster Operations Center (DOC) tracks weather trends and
              potentially catastrophic events that may severely impact homes or
              businesses across a wide geographic area. Thanks to our national
              footprint and more than 850 locations, ServiceMaster Restore can
              respond to disasters of any size quickly and efficiently.
            </p>
            <h3>Ensuring Customer Satisfaction</h3>
            <p>
              At ServiceMaster Restore, our commitment to customer satisfaction
              goes beyond just providing industry-leading standards. We have
              developed several programs to enhance the overall experience of
              our customers and ensure their complete satisfaction with our
              restoration services. These programs are designed to address
              specific needs and expectations, offering additional support and
              peace of mind throughout the restoration process. Here are some of
              the programs we have implemented:
            </p>

            <ol start="1">
              <li>
                <strong>Customer Satisfaction Surveys: </strong>We value
                feedback from our customers and actively seek their input to
                continually improve our services. After the restoration process
                is complete, we may conduct customer satisfaction surveys to
                gather feedback on their experience. This feedback helps us
                identify areas of improvement and address any concerns or issues
                promptly.
              </li>
              <li>
                <strong>Quality Assurance Inspections: </strong>To maintain the
                highest standards of service, we perform quality assurance
                inspections during and after the restoration process. These
                inspections ensure that our work meets our rigorous standards
                and that the customer's expectations are met or exceeded. If any
                deficiencies are identified, we take immediate corrective
                actions to rectify the situation.
              </li>
              <li>
                <strong>Follow-up Communication:</strong> We believe in
                maintaining open lines of communication with our customers.
                After the restoration is completed, we may follow up with our
                customers to ensure their satisfaction and address any further
                questions or concerns they may have. This proactive approach
                demonstrates our commitment to their well-being and provides an
                opportunity for additional assistance, if needed.
              </li>
              <li>
                <strong>Warranty Programs: </strong>Depending on the nature of
                the restoration work, we may offer warranty programs to provide
                added protection and peace of mind for our customers. These
                warranties outline the scope of coverage and specify the
                duration for which our work is guaranteed. By offering
                warranties, we stand behind the quality of our services and
                reassure our customers that we will take responsibility for any
                issues that may arise within the specified warranty period.
              </li>
              <li>
                <strong>Ongoing Support: </strong>We understand that the
                restoration process can be overwhelming for our customers. To
                ease their concerns, we provide ongoing support throughout the
                restoration journey. Our team of experts is available to answer
                questions, provide guidance, and offer assistance even after the
                project is completed. We strive to build lasting relationships
                with our customers and ensure that they feel supported every
                step of the way.
              </li>
            </ol>

            <p>
              These programs and initiatives are a testament to our dedication
              to customer satisfaction. By going above and beyond industry
              standards, we aim to exceed our customers' expectations and
              provide them with the best possible experience during their
              restoration journey. Our commitment to excellence and
              customer-centric approach set us apart in the restoration industry
              and reinforce our mission to help customers restore their lives
              and properties with confidence and peace of mind.
            </p>

            <h3>Tell ServiceMaster</h3>
            <p>
              Designed to measure customer satisfaction and improve customer
              loyalty, ServiceMaster Restore uses the Tell ServiceMaster program
              to survey customers at the end of every job, improve our service,
              train our employees based on customer feedback, and ensure that
              our customers are satisfied with the work we performed.
            </p>

            <h3>Service Level Agreements (SLAs)</h3>
            <p>
              At ServiceMaster Restore, we measure our success through customer
              satisfaction. Our service level agreements (SLAs) are monitored in
              real-time to determine any adjustments or corrections necessary to
              ensure we provide the best solutions for our customers. We
              consistently maintain industry-leading Net Promoter Score (NPS)
              ratings reflecting our unrivaled service.
            </p>

            <p>
              Don’t just take our word for it. Visit our Consumer Affairs page
              to see our customer reviews.
            </p>

            <h3>Don't Know What to Do Next? We Do.</h3>

            <ul>
              <li className="arrow-list">
                We’re ready to restore your home or business after any disaster.
              </li>
              <li className="arrow-list">
                Our trained and well-equipped experts respond to your emergency
                needs, 24/7/365.
              </li>
              <li className="arrow-list">
                With you as our priority, we say what we do and do what we say.
              </li>
            </ul>

            <GetHelpNow
              text={
                "Request a quote today for your home or business restoration service. Call us at"
              }
            />
          </div>

          <div className="column-two">
            <SideBarBox title={"Why Us"} links={Links} list={List} />

            <UncertainTo />
          </div>
        </div>
      </div>
    </div>
  );
}
