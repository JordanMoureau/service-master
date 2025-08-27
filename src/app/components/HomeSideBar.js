// components/WhyChooseUs.js
import {
  FaShieldAlt,
  FaBalanceScale,
  FaPhoneAlt,
  FaCommentDots,
} from "react-icons/fa";

const data = [
  {
    icon: <FaShieldAlt />,
    text: "Comprehensive Training and Certification",
  },
  {
    icon: <FaBalanceScale />,
    text: "Navigate Insurance Process With Ease",
  },
  {
    icon: <FaPhoneAlt />,
    text: "Available 24/7 Every Day of the Year",
  },
  {
    icon: <FaCommentDots />,
    text: "The Industry's Go-To Advisor",
  },
];

export default function HomeSideBar() {
  return (
    <>
      <div className="side-bar-header">
        <h2>
          WHY CHOOSE <br /> US?
        </h2>
      </div>

      <div className="arrows-aside">
        <ul>
          {data.map((item, index) => (
            <li className="why-item" key={index}>
              <div className="icon-box">{item.icon}</div>
              <p className="why-text">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="side2"></div>
        <div className="side3"></div>
        <div className="side4"></div>
      </div>
    </>
  );
}
