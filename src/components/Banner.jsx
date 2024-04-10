/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        pagination={true}
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div
            className="hero w-full lg:h-[700px] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/Y0tDgD5N/catia-dombaxe-9x-Yu-Ob-Hgng8-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-xl lg:text-5xl font-bold">NOW IT'S EASY TO FIND YOUR FUTURE HOME</h1>
                <p className="mb-5">WITH REALES - REAL ESTATE HTML TEMPLATE
                </p>
                <button className="text-xl w-32 h-14  bg-green-600 rounded-md text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-green-400 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-green-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero w-full lg:h-[700px] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/t4Jf2fY2/lance-anderson-Vz25-Fnur-I90-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-xl lg:text-5xl font-bold">NOW IT'S EASY TO FIND YOUR FUTURE HOME</h1>
                <p className="mb-5">WITH REALES - REAL ESTATE HTML TEMPLATE
                </p>
                <button className="text-xl w-32 h-14  bg-green-600 rounded-md text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-green-400 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-green-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero w-full lg:h-[700px] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/YqbZNkqv/sarah-nader-DQ28tllxe-HM-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-xl lg:text-5xl font-bold">NOW IT'S EASY TO FIND YOUR FUTURE HOME</h1>
                <p className="mb-5">
                WITH REALES - REAL ESTATE HTML TEMPLATE
                </p>
                <button className="text-xl w-32 h-14  bg-green-600 rounded-md text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-green-400 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-green-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className=" absolute top-[35%] lg:top-1/2 z-10 right-6 md:right-28 lg:right-60 bg-gray-100 p-4 bg-opacity-50 rounded-md">
        <h2 className=" text-sm md:text-2xl lg:text-4xl font-bold text-pink-500">
          NOW IT'S EASY TO FIND YOUR FUTURE HOME
        </h2>
        <p className="text-center text-black font-semibold text-xs md:text-sm lg:mt-4 lg:text-lg">
          WITH REALES - REAL ESTATE HTML TEMPLATE
        </p>
        <div className="flex justify-center mt-2">
          <button className="btn btn-success">Learn More</button>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
