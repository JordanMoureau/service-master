export default function AreYou() {
  return (
    <div className="we-can-help">
      <div className="inner">
        <h1>Are you currently dealing with water damage in your home?</h1>
        <ul>
          <li className="arrow-list">Is it getting worse by the minute?</li>
          <li className="arrow-list">Is your property damaged or destroyed?</li>
          <li className="arrow-list">
            Are you not sure where you're going to sleep tonight?
          </li>
          <li className="arrow-list">Is your insurance putting you on hold?</li>
          <li className="arrow-list">Are you not sure where to start?</li>
        </ul>

        <div className="button-box">
          <a className="btn" href="tel:(509) 646- 7488">
            We can help.
          </a>
        </div>
        <h2>
          Call us Now at{" "}
          <a className="underline" href="tel:(509) 646- 7488">
            (509) 646- 7488
          </a>{" "}
          to speak to a disaster response professional. We will explain exactly
          what to do and have a pro to your home within a few hours.
        </h2>
      </div>
      {/* contact form goes here */}
    </div>
  );
}
