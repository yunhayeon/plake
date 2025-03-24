import { z } from "zod";

export const MainTabSchema = z.enum(["offline", "online"]);
export type MainTab = z.infer<typeof MainTabSchema>;
