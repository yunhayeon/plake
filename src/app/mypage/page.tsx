import MyCardList from "@/app/mypage/_components/my-card-list/MyCardList";
import FetchBoundary from "@/components/boundary/FetchBoundary";
import LoadingDots from "@/components/common/LoadingDots";

const Page = async () => {
  return (
    // TODO: MyCardSkeleton Component 제작 및 적용
    <FetchBoundary fallback={<LoadingDots />}>
      <MyCardList />
    </FetchBoundary>
  );
};

export default Page;
