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
    <div className="home-side-bar-box">
      <div className="home-side-bar">
        <h2 className="heading">
          WHY CHOOSE <br /> US?
        </h2>

        <ul className="why-list">
          {data.map((item, index) => (
            <li className="why-item" key={index}>
              <div className="icon-box">{item.icon}</div>
              <p className="why-text">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="line w2"></div>
        <div className="line w3"></div>
        <div className="line w4"></div>
      </div>
    </div>
  );
}
