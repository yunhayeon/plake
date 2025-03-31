import { z } from "zod";

export const ReviewSchema = z.object({
  gatheringId: z.number(),
  score: z.number().min(1, "별점을 선택해주세요."),
  comment: z.string().min(1, "리뷰를 작성해주세요."),
});

export type TReviewForm = z.infer<typeof ReviewSchema>;
