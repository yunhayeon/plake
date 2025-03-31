import Image from "next/image";

const ReviewBanner = () => {
  return (
    <section className="mb-8 flex items-center gap-2">
      <Image
        priority
        src="/images/review_head.png"
        alt="review-head"
        width={72}
        height={72}
      />
      <div>
        <h1 className="mb-2 text-lg font-semibold text-gray-900 md:text-2xl">
          모든 리뷰
        </h1>
        <p className="text-sm font-medium text-gray-700">
          플레이크를 이용한 분들은 이렇게 느꼈어요.
        </p>
      </div>
    </section>
  );
};

export default ReviewBanner;
