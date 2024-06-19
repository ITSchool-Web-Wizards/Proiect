import TabBtn from "../../Components/TabBtn";
import DestContent from "../../Components/DestContent";
import NumberedTitle from "../../Components/NumberedTitle";
import { useState, useEffect } from "react";
import { fetchData } from "../../Components/utils";

export default function Destination() {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
      fetchData().then((e) => setData(e.destinations))
    }, []);

    const changeTab = (index) => { setActiveTab(index); };

  return (
    <main className="grid-container grid-container--destination flow">
      <NumberedTitle number="01" title="Pick your destination"/>
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
