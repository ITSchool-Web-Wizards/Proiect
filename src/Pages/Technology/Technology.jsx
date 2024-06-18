import NumberedTitle from "../../Components/NumberedTitle";
import NumberedBtn from "../../Components/NumberedBtn";
import TechnologyContent from "../../Components/TechnologyContent";
import { useState, useEffect } from "react";

export default function Technology() {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch("../../../public/data.json");
              if (!response.ok) {
                throw new Error("Network response error");
              }
              const jsonData = await response.json();
              setData(jsonData.technology);
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
    <main className="grid-container grid-container--technology">
      <NumberedTitle number="03" title="Space launch 101"/>
      <div className="numbered-btn flex">
        {data.map((item, index) => (
          <NumberedBtn
            key={index}
            name={item.name}
            isClicked={() => changeTab(index)}
            isActive={index === activeTab}
            index={index+1}/>
        ))}
      </div>
      <TechnologyContent
        name={data[activeTab].name}
        description={data[activeTab].description}
      />
      <picture>
        <source srcSet={data[activeTab].images.landscape} media="(min-width: 35em) and (max-width: 64em)"/>
        <img src={data[activeTab].images.portrait} alt={data[activeTab].name} />
      </picture>
    </main>
  );
}
