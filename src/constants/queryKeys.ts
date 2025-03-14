interface IQueryKeys {
  GATHERING: {
    all: readonly ["gathering"];
    detail: (id: string) => readonly [...["gathering"], string];
    participants: (
      id: string,
    ) => readonly [...["gathering"], string, "participants"];
  };
  REVIEW: {
    all: readonly ["review"];
    list: readonly ["review", "list"];
  };
}

export const QUERY_KEYS: IQueryKeys = {
  GATHERING: {
    all: ["gathering"] as const,
    detail: (id: string) => ["gathering", id] as const,
    participants: (id: string) => ["gathering", id, "participants"] as const,
  },
  REVIEW: {
    all: ["review"] as const,
    list: ["review", "list"] as const,
  },
};
