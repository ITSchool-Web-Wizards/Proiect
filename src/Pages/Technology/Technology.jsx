import NumberedTitle from "../../Components/NumberedTitle";
import NumberedBtn from "../../Components/NumberedBtn";
import TechnologyContent from "../../Components/TechnologyContent";
import { useLoadData } from "../../utils/LoadData";
import LoadingLayout from "../../Components/LoadingLayout";

export default function Technology() {
  const { isLoading, data, activeTab, changeTab } = useLoadData("technology");

  if (isLoading) {
    return <LoadingLayout />;
  }

  return (
    <main className="grid-container grid-container--technology">
      <NumberedTitle number="03" title="Space launch 101" />
      <div className="numbered-btn flex">
        {data.map((item, index) => (
          <NumberedBtn
            key={index}
            name={item.name}
            isClicked={() => changeTab(index)}
            isActive={index === activeTab}
            index={index + 1}
          />
        ))}
      </div>
      <TechnologyContent
        name={data[activeTab].name}
        description={data[activeTab].description}
      />
      <picture>
        <source
          srcSet={data[activeTab].images.landscape}
          media="(min-width: 35em) and (max-width: 64em)"
        />
        <img src={data[activeTab].images.portrait} alt={data[activeTab].name} />
      </picture>
    </main>
  );
}
