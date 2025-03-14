import { IUser } from "@/types/user";

export enum GatheringType {
  MINDFULNESS = "MINDFULNESS",
  DALLAEMFIT = "DALLAEMFIT",
  OFFICE_STRETCHING = "OFFICE_STRETCHING",
  WORKATION = "WORKATION",
}

export interface IGathering {
  teamId: string;
  id: number;
  name: string;
  type: GatheringType;
  dateTime: string;
  registrationEnd: string;
  location: string;
  participantCount: number;
  capacity: number;
  image: string | null;
  createdBy: number;
  canceledAt: string | null;
}

export interface IParticipant {
  User: IUser;
  userId: number;
  teamId: string;
  gatheringId: number;
  joinedAt: string;
}
