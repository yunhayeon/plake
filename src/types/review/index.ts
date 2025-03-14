import { IGathering } from "../gathering";
import { IUser } from "../user";

export interface IReview {
  Gathering: IGathering;
  User: IUser;
  comment: string;
  createdAt: string | Date;
  id: string;
  score: number;
  teamId: string;
}
