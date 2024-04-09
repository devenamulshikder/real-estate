/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full lg:h-[700px] rounded-xl"
              src="https://i.postimg.cc/Y0tDgD5N/catia-dombaxe-9x-Yu-Ob-Hgng8-unsplash.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full lg:h-[700px] rounded-xl "
              src="https://i.postimg.cc/t4Jf2fY2/lance-anderson-Vz25-Fnur-I90-unsplash.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img
              className="w-full lg:h-[700px] rounded-xl"
              src="https://i.postimg.cc/YqbZNkqv/sarah-nader-DQ28tllxe-HM-unsplash.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" absolute top-[35%] lg:top-1/2 z-10 right-6 md:right-28 lg:right-60 bg-gray-100 p-4 bg-opacity-50 rounded-md">
        <h2 className=" text-sm md:text-2xl lg:text-4xl font-bold text-pink-500">
          NOW IT'S EASY TO FIND YOUR FUTURE HOME
        </h2>
        <p className="text-center text-black font-semibold text-xs md:text-sm lg:mt-4 lg:text-lg">WITH REALES - REAL ESTATE HTML TEMPLATE</p>
     <div className="flex justify-center mt-2">
     <button className="btn btn-success">Learn More</button>
     </div>
      </div>
    </div>
  );
};

export default Banner;
