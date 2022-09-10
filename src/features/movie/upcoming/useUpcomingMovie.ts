import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { upcomingApi } from "../../../apis/movieApi";
import { ListResponse, MovieDetail } from "../../../types";

/**
 * 커스텀hook으로 react query를 사용하여 데이터 값을 리턴한다.
 * @returns now playing Movie의 데이터를 리턴한다.
 */
function useUpcomingMovie() {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "upcomingMovie",
    upcomingApi
  );
}

export default useUpcomingMovie;
