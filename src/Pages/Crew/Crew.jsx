import NumberedTitle from "../../Components/NumberedTitle";
import DotBtn from "../../Components/DotBtn";
import CrewContent from "../../Components/CrewContent";
import { useLoadData } from "../../utils/LoadData";
import LoadingLayout from "../../Components/LoadingLayout";

export default function Crew() {
  const { isLoading, data, activeTab, changeTab } = useLoadData("crew");

  if (isLoading) {
    return <LoadingLayout />;
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
