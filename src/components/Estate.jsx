/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Estate = ({ data }) => {

  const {
    image,
    facilities,
    location,
    area,
    status,
    price,
    description,
    segment_name,
    estate_title,
    id,
  } = data;

  return (
    <div className="mx-auto my-8 max-w-[350px] space-y-6 rounded-xl bg-white px-4 pb-8 pt-4  shadow-lg ">
      <div className="relative flex h-48 w-full justify-center lg:h-[280px]">
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          {/* love  */}
          <div className="flex items-center">
            <svg
              width={30}
              className="fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500 "
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              {" "}
              <g strokeWidth="0"></g>{" "}
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>{" "}
              <g id="SVGRepo_iconCarrier">
                <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
              </g>
            </svg>
          </div>
          <button className="rounded-xl bg-[#38b469] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
            {status}
          </button>
        </div>
        <img
          width={300}
          height={300}
          className="h-full w-full rounded-lg bg-black/40"
          src={image}
          alt="card navigate ui"
        />
      </div>
      <div className="flex justify-between text-xs font-semibold text-gray-400 md:text-lg">
        <p>Area: {area}</p>
        <p>{price}</p>
      </div>
      <div className="mx-auto space-y-3 font-semibold">
        <h6 className="text-sm md:text-base lg:text-xl ">{estate_title}</h6>
        <div>
          <p className="text-xs font-semibold text-gray-400 md:text-[16px] font-sans leading-5">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
        <Link to={`/${id}`}>
          <button className="rounded-lg bg-[#38b469] px-4 py-2 font-sans font-semibold text-white duration-300 hover:scale-105 hover:bg-[#1b522f]">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Estate;
