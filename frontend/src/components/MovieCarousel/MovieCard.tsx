import React from "react";
import { MovieCardType } from "@/types/types";
import { useRouter } from "next/navigation";
import { BsFillStarFill } from "react-icons/bs";
import "./MovieCard.css";

const MovieCard = (data: any) => {
  const router = useRouter();
  // const { city } = data.user;
  const city = "Ho Chi Minh";
  console.log(data);
  const { _id, title, genre, rating, portraitImgUrl } = data.Movie;

  return (
    <div
      className="moviecard"
      onClick={() => {
        router.push(`/${city}/movies/${_id}`);
      }}
    >
      <div
        className="movieimg"
        style={{
          backgroundImage: `url(${portraitImgUrl})`,
        }}
      >
        <p className="rating">
          <BsFillStarFill className="star" /> &nbsp;&nbsp;{rating}/10
        </p>
      </div>

      <div className="details">
        <p className="title">{title}</p>
        <p className="type">{genre.join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieCard;
