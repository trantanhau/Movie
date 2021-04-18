import axios from "axios";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "../constants/user.const";
import { startLoading, stopLoading } from "../actions/common.action";

export const postLogin = (taiKhoan, matKhau, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan,
        matKhau,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        // gửi lên store
        dispatch(postLoginSuccess(res.data));
        // quay trở lại trang trước đó
        history.goBack();
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gửi lên store
        dispatch(postLoginFailed(err));
      });
  };
};

const postLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const postLoginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};
