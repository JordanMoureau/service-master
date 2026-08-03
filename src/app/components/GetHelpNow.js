"use client";

export default function GetHelpNow({ text }) {
  return (
    <div className="get-help-box">
      <div className="clip-box">
        <div className="get1"></div>
        <h2 className="extra">
          {text}{" "}
          <a href="tel:(509) 535-5440" className="underline-link">
            (509) 535-5440
          </a>
        </h2>
      </div>

      <div className="bottom-flex">
        <a href="/contact" className="btn">
          Get help now
        </a>

        <div className="get2-box">
          <div className="get2"></div>
        </div>
      </div>
    </div>
  );
}
