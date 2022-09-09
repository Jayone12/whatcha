import axios from "axios";

/**
 * 모든 요청에 적용될 config 기본값 지정
 * baseURl: api host로 지정
 * params: api key 및 언어 설정
 */
const axiosInstance = axios.create({
  baseURL: process.env.API_HOST,
  params: {
    api_key: process.env.API_KEY,
    language: "ko-KR",
  },
});

export default axiosInstance;
