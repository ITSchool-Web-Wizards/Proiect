import NumberedTitle from "../../Components/NumberedTitle";
import DotBtn from "../../Components/DotBtn";
import CrewContent from "../../Components/CrewContent";
import { useState, useEffect } from "react";
import { fetchData } from "../../Components/utils";

export default function Crew() {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
      fetchData().then((e) => setData(e.crew))
    }, []);

    const changeTab = (index) => { setActiveTab(index); }

    if (!data[activeTab]) {
        return <div>Error: No data available for the selected tab.</div>;
      }

  return (
    <main className="grid-container grid-container--crew flow">
      <NumberedTitle number="02" title="Meet your crew" />
      <div className="dot-indicators flex">
        {data.map((item, index) => (
          <DotBtn 
            key={index}
            role={item.role}
            isClicked={() => changeTab(index)}
            isActive={index === activeTab}
          />
        ))}
      </div>
      <CrewContent 
        role={data[activeTab].role}
        name={data[activeTab].name}
        bio={data[activeTab].bio}
      />
      <img src={data[activeTab].image} alt={data[activeTab].name} />
    </main>
  );
}
