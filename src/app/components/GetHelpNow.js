"use client";

export default function GetHelpNow({ text }) {
  return (
    <div className="get-help-box">
      <div className="clip-box">
        <div className="get1"></div>
        <h1>
          {text}{" "}
          <a href="tel:(509) 646-7488" className="underline-link">
            (509) 646-7488
          </a>
        </h1>
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
