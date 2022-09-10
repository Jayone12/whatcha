import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { topRateApi } from "../../../apis/tvApi";
import { ListResponse, TVDetail } from "../../../types";

const useTopRateTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "topRateTv",
    topRateApi
  );
};

export default useTopRateTv;
