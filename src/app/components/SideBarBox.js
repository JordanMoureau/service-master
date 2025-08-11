export default function SideBarBox({ title, links, list }) {
  return (
    <div className="sidebar-box">
      <div className="sidebar-title">
        <h2>{title}</h2>
        <div className="sidebar-arrow-box">
          <div className="sidebar-line1"></div>
        </div>
      </div>

      <div className="animation">
        <ul className="sidebar-links">
          {list.map((item, index) => (
            <li key={index}>
              <a className="underline" href={links[index]}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="sidebar-line2"></div>
        <div className="sidebar-line3"></div>
        <div className="sidebar-line4"></div>
      </div>
    </div>
  );
}
