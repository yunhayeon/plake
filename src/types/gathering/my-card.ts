import { IGathering } from ".";

export type DirectionType = "mypage" | "reviews" | "gathering";

export interface IMyGathering extends IGathering {
  joinedAt: string;
  isCompleted: boolean;
  isReviewed: boolean;
}

interface StatusProps {
  label: string;
  className: string;
}

interface ButtonProps {
  label: string;
  variant: "purple" | "purple-outline";
  onClick: () => void;
}

export interface MyCardItemProps {
  gathering: IMyGathering;
  statusProps: StatusProps[] | null;
  buttonProps: ButtonProps | null;
}
