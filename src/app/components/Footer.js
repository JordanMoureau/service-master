import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Yellow Top Bar with Centered Logo */}
      <div className="footer-top">
        <img
          src="/logolg.png"
          alt="ServiceMaster Restore Logo"
          className="footer-logo"
        />
      </div>

      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-col footer-logo-show">
          <div className="header-left">
            <div className="arrow-block">
              <span className="arrow-body"></span>
              <span className="arrow-head"></span>
            </div>

            <Image
              src="/logo.png"
              alt="ServiceMaster"
              width={150}
              height={40}
            />
            <div className="chevron" />
          </div>
        </div>
        {/* Contact Info */}
        <div className="footer-col contact-info">
          <h4 className="company-name">SERVICEMASTER BY COMPASS</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> 2503 E RIVERSIDE AVE.
            <br />
            SPOKANE, WA 99202
            <br />
            LICENSE NUMBER: 8500
          </p>
          <p>
            <i className="fas fa-phone"></i> (509) 535-5440
          </p>
        </div>

        {/* Who We Serve */}
        <div className="footer-col">
          <h4>Who We Serve</h4>
          <ul>
            <li>
              <a href="/commercial">COMMERCIAL</a>
            </li>
            <li>
              <a href="/residential">RESIDENTIAL</a>
            </li>
            <li>
              <a href="/insurance">INSURANCE</a>
            </li>
            <li>
              <a href="https://www.servicemasterrestore.com/national-accounts/">
                NATIONAL ACCOUNTS
              </a>
            </li>
          </ul>
        </div>

        {/* Learn More */}
        <div className="footer-col">
          <h4>Learn More</h4>
          <ul>
            <li>
              <a href="/why-us">WHY US</a>
            </li>
            <li>
              <a href="/why-us/about-us">ABOUT US</a>
            </li>
            <li>
              <a href="/contact">CONTACT US</a>
            </li>
            <li>
              <a href="https://www.servicemasterrestore.com/locations/">
                CHANGE LOCATION
              </a>
            </li>
          </ul>
        </div>

        {/* Social and Search */}
        <div className="footer-col social">
          <div className="icons">
            <a
              href="https://www.youtube.com/channel/UCxhfBr5uexZ5FxWWnOtHEkQ"
              target="_blank"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/p/ServiceMaster-by-Compass-100063756032122/"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/servicemaster-fire-water-restoration-by-compass/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/servicemaster_by_compass"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.google.com/search?sca_esv=e6182da575e8b716&rlz=1C1GCHC_enUS1131US1131&cs=0&output=search&kgmid=/g/12llbmpp5&q=ServiceMaster+by+Compass&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=75c11cc20ff83e34"
              target="_blank"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://www.yelp.com/biz/servicemaster-by-compass-spokane"
              target="_blank"
            >
              <i className="fab fa-yelp"></i>
            </a>
          </div>
          <div className="search">
            <a href="/search">
              <i className="fas fa-search"></i> SEARCH
            </a>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="footer-legal">
        <p>
          A <strong>ServiceMaster</strong> Company
        </p>
        <p className="small-print">
          ServiceMaster Restore services provided by independently owned and
          operated Franchises or by a corporate owned branch. Prices and
          services vary by Location.
        </p>
      </div>

      {/* Bottom Black Bar */}
      <div className="footer-bottom">
        <p>&copy; 2025 All Rights Reserved.</p>
        <p>
          <a href="#">Map</a> | <a href="#">Do Not Sell/Share My Info</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
