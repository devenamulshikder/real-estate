import { MdOutlineStarPurple500, MdOutlineEmail } from "react-icons/md";
import { TiSocialGooglePlus, TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";

const OurAgent = () => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl my-4 md:my-8 text-center lg:text-4xl lg:my-16">
        Our Agents
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
   

    

        <div className=" flex flex-col justify-center items-center gap-2">
          {/* image */}

          <div>
            <img
              className="rounded-full"
              src="https://i.postimg.cc/GmqpHwz5/img1.png"
              alt=""
            />
          </div>
          <div className="lg:text-lg">John Smith</div>
          <div className=" text-orange-400 flex gap-1">
            {/* rating */}
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <div className="flex gap-1">
            <div className="border rounded-full p-2 text-[#38b469] hover:bg-green-200">
              <a href="">
                {" "}
                <MdOutlineEmail />
              </a>
            </div>
            <div className="border rounded-full p-2 text-blue-900 hover:bg-blue-400">
              <a href="">
                <TiSocialFacebook />
              </a>
            </div>
            <div className="border rounded-full p-2 text-blue-500 hover:bg-blue-200">
              <a href="">
                <CiTwitter />
              </a>
            </div>
            <div className="border rounded-full p-2 text-orange-700 hover:bg-orange-200">
              <a href="">
                <TiSocialGooglePlus />
              </a>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center gap-2">
          {/* image */}

          <div>
            <img
              className="rounded-full"
              src="https://i.postimg.cc/SKRx9TvN/avatar-2.png"
              alt=""
            />
          </div>
          <div className="lg:text-lg">John Smith</div>
          <div className=" text-orange-400 flex gap-1">
            {/* rating */}
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <div className="flex gap-1">
            <div className="border rounded-full p-2 text-[#38b469] hover:bg-green-200">
              <a href="">
                {" "}
                <MdOutlineEmail />
              </a>
            </div>
            <div className="border rounded-full p-2 text-blue-900 hover:bg-blue-400">
              <a href="">
                <TiSocialFacebook />
              </a>
            </div>
            <div className="border rounded-full p-2 text-blue-500 hover:bg-blue-200">
              <a href="">
                <CiTwitter />
              </a>
            </div>
            <div className="border rounded-full p-2 text-orange-700 hover:bg-orange-200">
              <a href="">
                <TiSocialGooglePlus />
              </a>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center gap-2">
          {/* image */}

          <div>
            <img
              className="rounded-full"
              src="https://i.postimg.cc/N0nfk638/avatar-3.png"
              alt=""
            />
          </div>
          <div className="lg:text-lg">John Smith</div>
          <div className=" text-orange-400 flex gap-1">
            {/* rating */}
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <div className="flex gap-1">
            <div className="border rounded-full p-2 text-[#38b469] hover:bg-green-200">
              <a href="">
                {" "}
                <MdOutlineEmail />
              </a>
            </div>
            <div className="border rounded-full p-2 text-blue-900 hover:bg-blue-400">
              <a href="">
                <TiSocialFacebook />
              </a>
            </div>
            <div className="border rounded-full p-2 text-blue-500 hover:bg-blue-200">
              <a href="">
                <CiTwitter />
              </a>
            </div>
            <div className="border rounded-full p-2 text-orange-700 hover:bg-orange-200">
              <a href="">
                <TiSocialGooglePlus />
              </a>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center gap-2">
          {/* image */}

          <div>
            <img
              className="rounded-full"
              src="https://i.postimg.cc/PrbJn8Dh/avatar-4.png"
              alt=""
            />
          </div>
          <div className="lg:text-lg">John Smith</div>
          <div className=" text-orange-400 flex gap-1">
            {/* rating */}
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <div className="flex gap-1">
            <div className="border rounded-full p-2 text-[#38b469] hover:bg-green-200">
              <a href="">
                {" "}
                <MdOutlineEmail />
              </a>
            </div>
            <div className="border rounded-full p-2 text-blue-900 hover:bg-blue-400">
              <a href="">
                <TiSocialFacebook />
              </a>
            </div>
            <div className="border rounded-full p-2 text-blue-500 hover:bg-blue-200">
              <a href="">
                <CiTwitter />
              </a>
            </div>
            <div className="border rounded-full p-2 text-orange-700 hover:bg-orange-200">
              <a href="">
                <TiSocialGooglePlus />
              </a>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default OurAgent;
