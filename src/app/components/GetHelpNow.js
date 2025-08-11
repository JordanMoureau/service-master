"use client";

export default function GetHelpNow({ text }) {
  return (
    <div className="side-arrow-box">
      <h1>
        {text}{" "}
        <a href="tel:(509) 646-7488" className="underline-link">
          (509) 646-7488
        </a>
      </h1>

      <div className="bottom-flex">
        <a href="/contact" className="btn">
          Get help now
        </a>

        <div className="line"></div>
      </div>
    </div>
  );
}
