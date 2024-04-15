import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {

  const data = useLoaderData();

  const { id } = useParams();

  const singleData = data.find((item) => item.id == id);
  const {
    image,
    facilities,
    location,
    area,
    status,
    price,
    description,
    segment_name,
    estate_title
  } = singleData;

  return (
    <div>
        <Helmet>
            <title>
                Dream sites||View property
            </title>
        </Helmet>



      <div className="flex lg:flex-row flex-col lg:gap-20 mt-4 lg:mt-16 p-4 lg:p-0">
      <div className=" flex flex-1 justify-center items-center rounded-xl">
        <img className="w-full rounded-xl h-full" src={image} alt="" />
      </div>

      <div className="flex-1 space-y-3">
        <h1 className="lg:text-3xl font-semibold">{estate_title}</h1>

    
        <p className="work-sans">{}</p>
      
        <h2 className="work-sans">
          <span className="text-lg font-bold">Description : </span>
          {description}
        </h2>
        <div className="flex gap-5 items-center">
          <div className="text-lg font-bold work-sans">Area : </div>
          <div className=" font-semibold text-[#38b469] px-4 rounded-full work-sans">
          {area}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-lg font-bold work-sans">Location : </div>
          <div className="font-semibold text-[#38b469] px-4 rounded-full work-sans">
          {location}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-lg font-bold work-sans">Facilities : </div>
          <div className="font-semibold text-[#38b469] px-4 rounded-full work-sans">
          {facilities}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-lg font-bold work-sans">Segment_name : </div>
          <div className="font-semibold text-[#38b469] px-4 rounded-full work-sans">
          {segment_name}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-lg font-bold work-sans">Status : </div>
          <div className="font-semibold text-[#38b469] px-4 rounded-full work-sans">
          {status}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-lg font-bold work-sans">Price : </div>
          <div className="font-semibold text-[#38b469] px-4 rounded-full work-sans">
          {price}
          </div>
        </div>

        <div>

        </div>

      </div>
    </div>
    </div>
  );
};

export default PropertyDetails;
