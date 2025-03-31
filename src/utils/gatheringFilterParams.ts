import { ONLINE, ONLINE_PATH } from "@/constants/gatheringFilterParams";
import { IGatheringFilterParams } from "@/types/gathering";

export const updateGatheringParams = (
  pathname: string,
  paramsObj: IGatheringFilterParams,
) => {
  const location = paramsObj.location;
  const sortOption = paramsObj.sortBy;

  if (pathname === ONLINE_PATH) {
    paramsObj["location"] = ONLINE.location;
  }

  if (location === "전체") {
    delete paramsObj.location;
  }

  if (sortOption) {
    let order = "";

    switch (sortOption) {
      case "participantCount": //인기많은순 정렬
        order = "desc";

      case "registrationEnd": //마감임박순 정렬
        order = "asc";
    }

    paramsObj["sortOrder"] = order;
  } else {
    paramsObj["sortBy"] = "dateTime";
  }

  return paramsObj;
};
