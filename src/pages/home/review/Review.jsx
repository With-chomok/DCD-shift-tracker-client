import { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/reviewQuote.png";
import { data } from "react-router";
const Review = ({ ReviewPromise }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ReviewPromise.then((data) => {
      setReviews(data);
    });
  }, [ReviewPromise]);
  return (
    <div>
      <>
        <Swiper
          loop={true}
          effect={"coverflow"}
          
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper">
          {reviews.map((data) => (
            <SwiperSlide>
              <div className="max-w-lg bg-white rounded-4xl shadow-md p-8 mx-auto">
                {/* Quote Icon */}
                <img src={img} className="w-25 " alt="" />

                {/* Text */}
                <p className="text-black  font-semibold text-md">
                 {data.review}
                </p>

                {/* Dotted Line */}
                <div className="border-b border-dashed border-teal-600 my-6"></div>

                {/* Profile Section */}
                <div className="flex items-center gap-4">
                  {/* Circle Avatar */}
                  <img
                    className="w-14 h-14 rounded-full "
                    src={data.user_photoURL}></img>

                  {/* Name + Role */}
                  <div>
                    <h3 className="font-bold text-teal-800 text-lg hover:underline cursor-pointer">
                      {data.userName}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Senior Product Designer
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Review;
