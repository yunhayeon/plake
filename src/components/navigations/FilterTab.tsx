import MainTab from "@/components/navigations/MainTab";
import SubTab from "@/components/navigations/SubTab";

const FilterTab = () => {
  return (
    <div className="flex flex-col gap-6">
      <MainTab />
      <SubTab />
    </div>
  );
};

export default FilterTab;
