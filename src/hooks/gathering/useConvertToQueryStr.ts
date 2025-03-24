import { FilterParamsObj } from "@/types/gathering";

const useConvertToQueryStr = (paramsObj: FilterParamsObj) => {
  const type = paramsObj.type;
  const location = paramsObj.location;
  const sortOption = paramsObj.sort;

  if (type === "online") {
    paramsObj["location"] = "홍대입구";

    delete paramsObj.type;
  }

  if (location === "전체") {
    delete paramsObj.location;
  }

  if (sortOption) {
    let order = "";

    switch (sortOption) {
      case "participantCount":
        order = "desc";

      case "registrationEnd":
        order = "asc";
    }

    paramsObj["sortOrder"] = order;
  }

  return new URLSearchParams(paramsObj).toString();
};

export default useConvertToQueryStr;
