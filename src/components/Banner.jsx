import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div >
      <Swiper navigation={true} modules={[Navigation]} loop={true} >
        <SwiperSlide>
          <div>
            <img className="w-full lg:h-[700px] rounded-xl"
              src="https://i.postimg.cc/Y0tDgD5N/catia-dombaxe-9x-Yu-Ob-Hgng8-unsplash.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full lg:h-[700px] rounded-xl "
              src="https://i.postimg.cc/t4Jf2fY2/lance-anderson-Vz25-Fnur-I90-unsplash.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img className="w-full lg:h-[700px] rounded-xl"
              src="https://i.postimg.cc/YqbZNkqv/sarah-nader-DQ28tllxe-HM-unsplash.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
