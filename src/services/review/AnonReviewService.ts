import Service from "@/services/Service";
import { IReviewResponse, TReviewQueryParams } from "@/types/review";
import { IScore } from "@/types/review/score";

class AnonReviewService extends Service {
  getReviewList = (searchParams?: TReviewQueryParams) => {
    let params = "";

    if (searchParams) {
      params = new URLSearchParams(searchParams).toString();
    }
    return this.http.get<IReviewResponse>(`/reviews?${params}`);
  };

  getReviewScore = () => {
    return this.http.get<IScore[]>("/reviews/scores");
  };

  getReviewsByGatheringId = (searchParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams).toString();
    return this.http.get<IReviewResponse>(`/reviews?${params}`);
  };
}

const anonReviewService = new AnonReviewService();

export default anonReviewService;
