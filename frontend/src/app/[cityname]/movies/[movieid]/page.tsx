"use client";
import React from "react";
import { BsShare } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import "./MoviePage.css";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CelebCard from "@/components/CelebCard/CelebCard";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

const MoviePage = () => {
  const pathname = usePathname();
  const { movieid } = useParams();
  const [movie, setMovie] = React.useState<any>(null);

  const getMovies = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies/${movieid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          console.log(data);
          setMovie(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getMovies();
  });

  return (
    <div className="moviepage">
      <div
        className="c1"
        style={{
          backgroundImage: `url(${movie.wideposter})`,
        }}
      >
        <div className="c11">
          <div className="left">
            <div
              className="movie_poster"
              style={{
                backgroundImage: `url(${movie.portraitposter})`,
              }}
            >
              <p>In cinemas</p>
            </div>
            <div className="movie_details">
              <p className="title">{movie.title}</p>
              <p className="rating">
                <BsFillStarFill className="star" />
                &nbsp;&nbsp;{movie.rating}/10
              </p>
              <div className="halls_languages">
                <p className="halls">
                  {movie.halls.map((hall, index) => {
                    return <span key={index}>{hall} </span>;
                  })}
                </p>
                <p className="languages">
                  {movie.languages.map((language, index) => {
                    return <span key={index}>{language} </span>;
                  })}
                </p>
              </div>
              <p className="duration_type_releasedat">
                <span className="duration">{movie.duration}</span>
                <span>&#8226;</span>
                <span className="type">{movie.type}</span>
                <span>&#8226;</span>
                <span className="releasedate">{movie.releasedate}</span>
              </p>
              <Link href={`${pathname}/buytickets`} className="linkstylenone">
                <button className="bookbtn">Book Tickets</button>
              </Link>
            </div>
          </div>

          <div className="right">
            <button className="sharebtn">
              <BsShare className="shareicon" />
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="c2">
        <h1>About the Movie</h1>
        <p>{movie.about}</p>

        <div className="line"></div>
        <h1>Cast</h1>
        <div className="circlecardslider">
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {movie.cast.map((cast, index) => {
              return (
                <SwiperSlide key={index}>
                  <CelebCard {...cast} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="line"></div>
        <h1>Crew</h1>
        <div className="circlecardslider">
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {movie.crew.map((cast, index) => {
              return (
                <SwiperSlide key={index}>
                  <CelebCard {...cast} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="line"></div>
        <h1>Your might also like</h1>
        <MovieCarousel />
      </div>
    </div>
  );
};

export default MoviePage;