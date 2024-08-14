import { Link } from "react-router-dom";

export default function NavBtn({ label, btnNumber, isActive, to }) {
  const activeClass = isActive ? "active" : "";

  return (
    <Link to={to} className={`ff-sans-cond uppercase text-light letter-spacing-2 ${activeClass}`}>
      <span aria-hidden="true" className="ff-sans-cond text-light letter-spacing-2">{btnNumber}</span>
      {label}
    </Link>
  );
}
