import { auth } from "../provider/Authprovider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const UpdateProfile = () => {


  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast('Profile updated..!')
      })
      .catch()
  };

  return (
    <section
      data-aos="fade-down"
      data-aos-duration="1200"
      className="p-6 text-gray-100 dark:text-gray-800 lg:my-20"
    >
      <Helmet>
        <title>
          Dream sites || updateProfile
        </title>
      </Helmet>
      <form data-aos="fade-down"
    data-aos-duration="1200"
        onSubmit={handleUpdateProfile}
        noValidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900 dark:bg-gray-50"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">
          Upadate Your Profile
        </h2>
        <div>
          <label
            htmlFor="name"
            className="block mb-1 ml-1 lg:text-lg lg:font-semibold"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder=""
            required="Please type name?"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-[#69b487]  bg-gray-800 dark:bg-gray-100"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-1 ml-1 lg:text-lg lg:font-semibold"
          >
            Photo URL:
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder=""
            required
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-[#38b469]  bg-gray-800 dark:bg-gray-100"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#38b469] dark:bg[#38b469] focus:ring-[#38b469] focus:dark:ring-[#38b469] hover:ring-[#38b469] hover:dark:ring-[#38b469] text-gray-900 dark:text-gray-50"
          >
            Click to Change
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateProfile;
