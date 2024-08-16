import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { photosGallery } from "../utilits";

const OfferSlide = () => {
  return (
    <div className="lg:w-[40%] md:w-[40%]">
      <p className="text-3xl font-bold mb-5 pt-4">New arrivals</p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {photosGallery.map((pd, idx) => (
          <SwiperSlide key={idx}>
            <div className="">
              <div className="flex items-center bg-[#F5F5F5] p-3 rounded-lg shadow-lg justify-center">
                <img alt="sopping" src={pd.images}></img>
              </div>
              <div className="flex items-center justify-around pt-3">
                <div className="p-2  rounded-sm shadow-sm">
                  <img
                    src={pd.images1}
                    alt="images"
                    className="rounded-sm h-28 bg-[#F5F5F5]"
                  />
                </div>
                <div className="p-2 rounded-sm shadow-sm">
                  <img
                    src={pd.images2}
                   
                    alt="images"
                    className="rounded-sm h-28 bg-[#F5F5F5]"
                  />
                </div>
                <div className="p-2  rounded-sm shadow-sm">
                  <img
                    src={pd.images3}
                  
                    alt="images"
                    className="rounded-sm h-28 bg-[#F5F5F5]"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferSlide;
