"use client";

import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClientOptions: QueryClientConfig = {
    defaultOptions: {
      queries: {
        staleTime: 0,
        gcTime: 30000,
        retry: false,
        throwOnError: true,
      },
    },
  };

  const [queryClient] = useState(() => new QueryClient(queryClientOptions));

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
