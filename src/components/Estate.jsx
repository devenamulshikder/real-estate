/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Estate = ({data}) => {
  console.log(data);

const {image,facilities,location,area,status,price,description,segment_name,estate_title,id} = data;


  return (
    <div className="my-4">

      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        {/* <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-800"
            >
              Photography
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            See All
          </a>
        </div> */}
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image }
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Estate;
