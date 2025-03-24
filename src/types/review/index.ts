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
