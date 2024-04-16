import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <div data-aos='fade-down' data-aos-duration='2000'>
      <h1 className="text-xl md:text-2xl my-4 md:my-8 text-center lg:text-4xl lg:my-16">
        Testimonials
      </h1>

      <div>
        <Swiper
          pagination={true}
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-8">
              <div>
                <img
                  className="rounded-full"
                  src="https://i.postimg.cc/SKRx9TvN/avatar-2.png"
                  alt=""
                />
              </div>
              <div className="text-center lg:text-start">
                <p className="opacity-60">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words
                </p>
                <h2 className="text-lg font-semibold">Jane Smith</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-8">
              <div>
                <img
                  className="rounded-full"
                  src="https://i.postimg.cc/N0nfk638/avatar-3.png"
                  alt=""
                />
              </div>
              <div className="text-center lg:text-start">
                <p className="opacity-60">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words
                </p>
                <h2 className="text-lg font-semibold">Rust Cohle</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
