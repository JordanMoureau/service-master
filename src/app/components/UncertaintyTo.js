"use client";

export default function UncertainTo() {
  return (
    <div className="side-bar-lower">
      <div className="uncertainty">
        <div>
          <h2>Turn Uncertainty into Confidence</h2>
          <p>
            We’re available 24/7 to discuss your restoration needs. Get the help
            you deserve
          </p>
        </div>
        <button className="btn">
          <a href="/contact">Get Help Now</a>
        </button>
      </div>

      <div className="tabs">
        <div className="outer">
          <div className="inner one">
            <a href="/commercial">
              <h2>
                Commercial
                <br /> services
              </h2>
            </a>
          </div>
        </div>

        <div className="outer">
          <div className="inner two">
            <a href="/residential">
              <h2>
                residential
                <br /> services
              </h2>
            </a>
          </div>
        </div>

        <div className="outer">
          <div className="inner three">
            <a href="/insurance">
              <h2>
                insurance
                <br /> professionals
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
