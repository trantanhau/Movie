import axios from "axios";
import {
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
} from "../constants/movie.const";
import { startLoading, stopLoading } from "./common.action";

// action call api
export const getMoiveList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(getMoiveListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getMoiveListFailed(err));
      });
  };
};

const getMoiveListSuccess = (movieList) => {
  return {
    type: GET_MOVIE_LIST_SUCCESS,
    payload: movieList,
  };
};

const getMoiveListFailed = (err) => {
  return {
    type: GET_MOVIE_LIST_FAILED,
    payload: err,
  };
};

// get detail

export const getMoiveDetail = (movieCode) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(getMoiveDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(getMoiveDetailFailed(err));
      });
  };
};

const getMoiveDetailSuccess = (movieDetail) => {
  return {
    type: GET_MOVIE_DETAIL_SUCCESS,
    payload: movieDetail,
  };
};

const getMoiveDetailFailed = (err) => {
  return {
    type: GET_MOVIE_DETAIL_FAILED,
    payload: err,
  };
};
