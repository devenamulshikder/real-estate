import { FaUsers } from "react-icons/fa";
import { IoCloudUploadOutline, IoHome } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
const OurService = () => {
  return (
    <div data-aos='fade-down' data-aos-duration='1500'>
      <h1 className="text-xl md:text-2xl my-4 md:my-8 text-center lg:text-4xl lg:my-16">
        Our Services
      </h1>

      <div data-aos='fade-down' data-aos-duration='2000' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 lg:gap-10">
        <div className="flex flex-col space-y-4 text-center justify-center items-center hover:bg-green-100 lg:p-4 rounded-md hover:scale-110 hover:duration-500">
          <div className="text-5xl text-green-600">
            <SlLocationPin />
          </div>
          <div>
          <h1 className=" md:text-lg lg:text-xl font-semibold text-green-500">Find places anywhere in the world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
            veritatis.
          </p>
          </div>
        </div>
        <div>
        <div className="flex flex-col space-y-4 text-center justify-center items-center hover:bg-green-100 lg:p-4 rounded-md hover:scale-110 hover:duration-500">
          <div className="text-5xl text-green-600">
          <FaUsers />
          </div>
          <div>
          <h1 className=" md:text-lg lg:text-xl font-semibold text-green-500">Find places anywhere in the world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
            veritatis.
          </p>
          </div>
        </div>

        </div>
        <div>
        <div className="flex flex-col space-y-4 text-center justify-center items-center hover:bg-green-100 lg:p-4 rounded-md hover:scale-110 hover:duration-500">
          <div className="text-5xl text-green-600">
          <IoHome/>

          </div>
          <div>
          <h1 className=" md:text-lg lg:text-xl font-semibold text-green-500">Find places anywhere in the world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
            veritatis.
          </p>
          </div>
        </div>
        </div>
        <div>
        <div className="flex flex-col space-y-4 text-center justify-center items-center hover:bg-green-100 lg:p-4 rounded-md hover:scale-110 hover:duration-500">
          <div className="text-5xl text-green-600">
          <IoCloudUploadOutline />

          </div>
          <div>
          <h1 className=" md:text-lg lg:text-xl font-semibold text-green-500">Find places anywhere in the world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
            veritatis.
          </p>
          </div>
        </div>
        </div>
      </div>


    </div>
  );
};

export default OurService;
