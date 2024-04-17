/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Estate from "../components/Estate";
import OurService from "../components/OurService";
import OurAgent from "../components/OurAgent";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet-async";


const Home = () => {
  const data = useLoaderData();
 
  return (
    <div className="">
      <Helmet>
        <title>
          Dream sites || home
        </title>
      </Helmet>
      <Banner />
      <OurService />

      <div data-aos='fade-up' data-aos-duration='2000'>
        <h1 className="text-xl md:text-2xl my-4 md:my-8 text-center lg:text-4xl lg:my-16">
          Latest Property
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 ">
          {data.map((item) => (
            <Estate key={item.id} data={item}></Estate>
          ))}
        </div>
      </div>
      <OurAgent/>
      <Testimonials/>
    </div>
  );
};

export default Home;
