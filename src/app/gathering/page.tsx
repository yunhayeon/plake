import { Suspense } from "react";

import GatheringFilterSort from "@/components/common/GatheringFilterSort";
import MainCardItem from "@/components/layout/MainCardItem";
import SubTab from "@/components/navigations/SubTab";
import Tab from "@/components/navigations/Tab";

const cardData = {
  id: 0,
  name: "달램핏 오피스 스트레칭",
  dateTime: new Date(),
  registrationEnd: new Date(),
  location: "강남구",
  participantCount: 6,
  capacity: 20,
  image: "https://picsum.photos/200/300",
};

const subTabData = ["전체", "운동", "예술", "미식", "기타"];

const Page = () => {
  return (
    <div>
      <div className="base-wrap">
        <Suspense>
          <Tab />
        </Suspense>
        <SubTab tabList={subTabData} />
        <GatheringFilterSort />
        <MainCardItem
          key={cardData.id}
          name={cardData.name}
          dateTime={cardData.dateTime}
          registrationEnd={cardData.registrationEnd}
          location={cardData.location}
          participantCount={cardData.participantCount}
          capacity={cardData.capacity}
          image={cardData.image}
        />
      </div>
    </div>
  );
};

export default Page;
