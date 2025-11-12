import { FaShieldAlt, FaStar } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

export default function TrustStrip() {
  return (
    <>
      {/* === TRUST STRIP === */}
      <section className="trust-strip" aria-label="Trust badges">
        <div className="five-stars row">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />|
          <a href="https://share.google/xDTB6ys16sU7wAT1m">
            100+ Five Star Reviews
          </a>
        </div>
        <div className="row">
          <h2>IICRC-Certified</h2>

          <FaShieldAlt />
          <h2>Licensed & Insured</h2>
          <FaHouseDamage />
          <h2>Direct Insurance Billing</h2>
          <MdTimer />
          <h2>Arrival Rate 1-3 Hours</h2>
        </div>
      </section>
    </>
  );
}
