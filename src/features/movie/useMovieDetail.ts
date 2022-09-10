import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { detailApi } from "../../apis/movieApi";
import { MovieDetail } from "../../types";

const useMovieDetail = (id?: string) => {
  const { data, isLoading, isError } = useQuery<
    AxiosResponse<MovieDetail>,
    AxiosError
  >(["movieDetail", id], () => detailApi(id));

  return { data: data?.data, isLoading, isError };
};
export default useMovieDetail;
