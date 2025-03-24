"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type NewParamsType = { [key: string]: string };

const useCustomSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const _searchParams = useSearchParams();
  const searchParams = new URLSearchParams(_searchParams.toString());

  const setNewParams = (newParams: NewParamsType) => {
    for (const [key, value] of Object.entries(newParams)) {
      if (value) searchParams.set(key, value);
      else searchParams.delete(key);
    }
    return searchParams.toString();
  };

  const setSearchParams = (
    newParams: NewParamsType | ((prev: NewParamsType) => NewParamsType),
    isReplace?: boolean,
  ) => {
    const _newParams =
      typeof newParams === "function"
        ? newParams(Object.fromEntries(searchParams))
        : newParams;

    if (isReplace)
      return router.replace(`${pathname}?${setNewParams(_newParams)}`);
    return router.push(`${pathname}?${setNewParams(_newParams)}`);
  };

  return {
    searchParams: searchParams,
    searchParamsObj: Object.fromEntries(searchParams),
    setSearchParams,
  };
};

export default useCustomSearchParams;
