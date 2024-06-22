import NavBtn from "./Components/NavBtn";
import HamburgerBtn from "./Components/HamburgerBtn";
import logo from "../public/assets/shared/logo.svg";
import { useLocation, Outlet, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  const mainTabs = [
    {
      path: "/homepage",
      label: "Home",
      btnNumber: "00",
    },
    {
      path: "/destination",
      label: "Destination",
      btnNumber: "01",
    },
    {
      path: "/crew",
      label: "Crew",
      btnNumber: "02",
    },
    {
      path: "/technology",
      label: "Technology",
      btnNumber: "03",
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/homepage");
    }
  }, [location.pathname, navigate]);

  const activeTab = mainTabs.findIndex((tab) => tab.path === location.pathname);
  const activeBackground = "background-" + location.pathname.slice(1);

  return (
      <div className={`background-image ${activeBackground}`}>
        <header className="primary-header flex">
          <Link to="/homepage">
            <img src={logo} alt="space tourism logo" className="logo" />
          </Link>
          <HamburgerBtn />
          <nav id="primary-navigation"
              className="primary-navigation underline-indicators flex"
              data-visible="false">
              {mainTabs.map((tab, index) => (
                <NavBtn
                  key={index}
                  label={tab.label}
                  btnNumber={tab.btnNumber}
                  isActive={index === activeTab}
                  to={tab.path}
                />
              ))}
          </nav>
        </header>
        <Outlet/>
      </div>
  );
}