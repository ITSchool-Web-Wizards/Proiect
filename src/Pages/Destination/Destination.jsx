import TabBtn from "../../Components/TabBtn";
import DestContent from "../../Components/DestContent";
import NumberedTitle from "../../Components/NumberedTitle";
import { useLoadData } from "../../utils/LoadData";
import LoadingLayout from "../../Components/LoadingLayout";

export default function Destination() {
  const { isLoading, data, activeTab, changeTab } = useLoadData("destinations");

  if (isLoading) {
    return <LoadingLayout />;
  }

  return (
    <main className="grid-container grid-container--destination flow">
      <NumberedTitle number="01" title="Pick your destination" />
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
        travel={data[activeTab].travel}
      />
    </main>
  );
}
