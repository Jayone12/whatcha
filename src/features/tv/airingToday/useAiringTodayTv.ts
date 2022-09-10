import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { airingTodaygApi } from "../../../apis/tvApi";
import { ListResponse, TVDetail } from "../../../types";

const useAiringTodayTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "airingTodayTv",
    airingTodaygApi
  );
};

export default useAiringTodayTv;
