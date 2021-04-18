import React from "react";
import { withRouter } from "react-router";

function MovieCard({ movie, history }) {
  const handleClick = () => {
    //   di chuyển sang trang chi tiết
    history.push(`/movie-detail/${movie.maPhim}`);
  };
  return (
    <div className="card text-left">
      <img className="card-img-top" src={movie.hinhAnh} alt />
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text">Body</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-info" onClick={handleClick}>
          Xem Chi Tiết
        </button>
      </div>
    </div>
  );
}

export default withRouter(MovieCard);
