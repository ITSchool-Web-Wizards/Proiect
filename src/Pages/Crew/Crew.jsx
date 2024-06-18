import NumberedTitle from "../../Components/NumberedTitle";
import DotBtn from "../../Components/DotBtn";
import CrewContent from "../../Components/CrewContent";
import { useState, useEffect } from "react";

export default function Crew() {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch("../src/assets/data/data.json");
              if (!response.ok) {
                throw new Error("Network response error");
              }
              const jsonData = await response.json();
              setData(jsonData.crew);
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
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
