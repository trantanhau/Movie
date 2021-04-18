import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookingList } from "../../../store/actions/booking.action";
function Booking() {
  const dispatch = useDispatch();
  const { listChair } = useSelector((state) => state.booking);
  // lấy maLichChieu từ url xuống
  const { maLichChieu } = useParams();
  // tương đương componentDidMount
  useEffect(function () {
    // dispatch action call api
    dispatch(getBookingList(maLichChieu));
  }, []);

  const setClassNameChair = (daDat, dangChon) => {
    if (daDat) {
      return "btn-danger";
    } else {
      if (dangChon) {
        return "btn-warning";
      } else {
        return "btn-info";
      }
    }
  };

  const renderListChair = () => {
    return listChair.map((chair, index) => {
      return (
        <button
          className={
            setClassNameChair(chair.daDat, chair.dangChon) + " btn m-2 "
          }
          key={index}
          onClick={() => {
            dispatch({
              type: "DANG_CHON",
              payload: chair,
            });
          }}
        >
          {chair.tenGhe}
        </button>
      );
    });
  };

  return (
    <div>
      <h2>Booking</h2>
      <section className="list-chair">{renderListChair()}</section>
    </div>
  );
}

export default Booking;
