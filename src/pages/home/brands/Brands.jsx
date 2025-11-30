import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../assets/brandsImg/amazon.png";
import img2 from "../../../assets/brandsImg/amazon_vector.png";
import img3 from "../../../assets/brandsImg/casio.png";
import img4 from "../../../assets/brandsImg/moonstar.png";
import img5 from "../../../assets/brandsImg/randstad.png";
import img6 from "../../../assets/brandsImg/star.png";
import img7 from "../../../assets/brandsImg/start_people.png";

const Brands = () => {
  return (
    <div className="m-10">
      <h3 className="text-[#03373D] text-[28px] font-extrabold text-center">
        We've helped thousands of sales teams
      </h3>

      <Swiper
        loop={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={4}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        grabCursor={true}
        className="m-10">
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
