import FavoriteFilterTab from "./_components/FavoriteFilterTab";

const GatheringFavoriteLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="base-wrap">
      <div className="mt-8 flex justify-between">
        <FavoriteFilterTab />
      </div>
      <hr className="my-4 border-gray-200" />
      {children}
    </div>
  );
};

export default GatheringFavoriteLayout;
