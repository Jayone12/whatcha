import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { detailApi } from "../../apis/tvApi";
import { TVDetail } from "../../types";

const useTvDetail = (id?: string) => {
  const { data, isLoading, isError } = useQuery<
    AxiosResponse<TVDetail>,
    AxiosError
  >(["tvetail", id], () => detailApi(id));

  return { data: data?.data, isLoading, isError };
};
export default useTvDetail;
