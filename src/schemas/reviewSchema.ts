import { z } from "zod";

export const ReviewSchema = z.object({
  rating: z.number().min(1, "별점을 최소 1개 이상 선택해주세요."),
  review: z.string().min(10, "리뷰는 최소 10자 이상 입력해주세요."),
});
