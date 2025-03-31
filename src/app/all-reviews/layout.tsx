import ReviewBanner from "./[tab]/_components/ReviewBanner";
import ReviewFilter from "./[tab]/_components/ReviewFilter";

const ReviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="base-wrap bg-gray-50 py-6 md:py-10 xl:px-28">
      <ReviewBanner />
      <ReviewFilter />
      {children}
    </div>
  );
};

export default ReviewLayout;
