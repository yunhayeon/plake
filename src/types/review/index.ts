import { IGathering } from "../gathering";
import { IUser } from "../user";

export interface IReview {
  Gathering: IGathering;
  User: IUser;
  teamId: number;
  id: number;
  score: number;
  comment: string;
  createdAt: string;
}

export interface IReviewResponse {
  data: IReview[];
  totalItemCount: number;
  currentPage: number;
  totalPages: number;
}

export type TReviewQueryParams = {
  gatheringId?: string;
  userId?: string;
  type?: string;
  location?: string;
  date?: string;
  sortBy?: string;
  sortOrder?: string;
  offset?: string;
  limit?: string;
};
