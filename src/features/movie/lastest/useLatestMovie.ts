import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { latestApi } from "../../../apis/movieApi";
import { MovieDetail } from "../../../types";

/**
 * 커스텀hook으로 react query를 사용하여 데이터 값을 리턴한다.
 * @returns latest Movie의 데이터를 리턴한다.
 */
function useLatestMovie() {
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    "latestMovie",
    latestApi
  );
}

export default useLatestMovie;
