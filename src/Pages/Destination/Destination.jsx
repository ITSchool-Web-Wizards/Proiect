import TabBtn from "../../Components/TabBtn";
import DestContent from "../../Components/DestContent";
import { useState, useEffect } from "react";

export default function Destination() {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("../../../data.json");
            if (!response.ok) {
              throw new Error("Network response error");
            }
            const jsonData = await response.json();
            setData(jsonData.destinations);
          } 
          catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchData();
    }, []);

    const changeTab = (index) => { setActiveTab(index); };

    if (!data[activeTab]) {
        return <div>Error: No data available for the selected tab.</div>;
      }

  return (
    <main className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>
        Pick your destination
      </h1>
      <img src={data[activeTab].image} alt={data[activeTab].name} />
      <div className="tab-list underline-indicators flex">
        {data.map((item, index) => (
          <TabBtn
            key={index}
            title={item.name}
            isClicked={() => changeTab(index)}
            isActive={index === activeTab}
          />
        ))}
      </div>
      <DestContent         
        title={data[activeTab].name}
        description={data[activeTab].description}
        distance={data[activeTab].distance}
        travel={data[activeTab].travel}/>
    </main>
  );
}
