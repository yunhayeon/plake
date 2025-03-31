import { TReviewForm } from "@/schemas/reviewSchema";

class ReviewService {
  async createReview(data: TReviewForm) {
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw await res.json();
    return res.json();
  }
}

const reviewService = new ReviewService();

export default reviewService;
