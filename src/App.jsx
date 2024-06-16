import HomePage from "./Pages/HomePage/Home";
import Destination from "./Pages/Destination/Destination";
import Crew from "./Pages/Crew/Crew";
import Technology from "./Pages/Technology/Technology";
import NavBtn from "./Components/NavBtn";
import HamburgerBtn from "./Components/HamburgerBtn";
import logo from "./assets/shared/logo.svg";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const mainTabs = [
    {content: <HomePage/>, 
        label: "Home",
        btnNumber: "00",
        background: "background-home"
    },
    {content: <Destination/>, 
        label: "Destination",
        btnNumber: "01",
        background: "background-destination"
    },
    {content: <Crew/>, 
        label: "Crew",
        btnNumber: "02",
        background: "background-crew"
    },
    {content: <Technology/>, 
        label: "Technology",
        btnNumber: "03",
        background: "background-technology"
    }
  ];

  const activeContent = activeTab >= 0 && mainTabs[activeTab]?.content;

  return (
    <div className={`background-image ${mainTabs[activeTab].background}`}>
      <header className="primary-header flex">
        <div>
          <img src={logo} alt="space tourism logo" className="logo" />
        </div>
        <HamburgerBtn />
        <nav>
          <ul id="primary-navigation" className="primary-navigation underline-indicators flex" data-visible="false">
            {mainTabs.map((tab, index) => (
              <NavBtn
                key={index}
                label={tab.label}
                btnNumber={tab.btnNumber}
                isActive={index === activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </ul>
        </nav>
      </header>
      {activeContent}
    </div>
  );
}
