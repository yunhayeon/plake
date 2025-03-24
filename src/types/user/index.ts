export interface IUser {
  teamId: number;
  id: number;
  email: string;
  name: string;
  companyName: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export type IUpdateUser = Omit<IUser, "teamId">;
