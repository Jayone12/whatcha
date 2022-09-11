import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { searchApi } from "../../apis/movieApi";
import { ListResponse, MovieDetail } from "../../types";

const useMovieSearch = (query: string) => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    ["searchMovie", query],
    () => searchApi(query),
    // 검색하려는 키워드 즉 query가 있어야 해당 커스텀 hook이 동작한다.
    { enabled: Boolean(query) }
  );
};

export default useMovieSearch;
