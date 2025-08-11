// components/Dropdown.js
import Link from "next/link";

export default function Dropdown({ label, items, href }) {
  return (
    <div className="dropdown">
      <Link href={href} className="nav-links">
        {label}
      </Link>
      <div className="dropdown-menu">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
