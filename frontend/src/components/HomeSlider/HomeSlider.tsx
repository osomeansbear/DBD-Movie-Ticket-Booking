import React, { useRef, useState } from 'react';
//Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const width = window.innerWidth;
const height = window.innerHeight;

export const HomeSlider = () => { 
    const [banner, setBanner] = useState([
      {
        imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1715336994371_monsterweb.jpg'
      },
      {
        imgUrl:'https://assets-in.bmscdn.com/promotions/cms/creatives/1714484600065_summerwebbanner.jpg'
      },
    ])

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {
        banner.map((banner, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={banner.imgUrl} alt="" width={width} height={height / 2}
                style={{
                  objectFit: 'cover',
                }}
              />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    )
}

export default HomeSlider