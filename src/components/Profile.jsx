import { Helmet } from "react-helmet-async";
import { auth } from "../provider/Authprovider";
import { Link, Navigate } from "react-router-dom";

const Profile = () => {
  const user = auth.currentUser;

  if (user === null) {
    return <Navigate to="/"></Navigate>;
  }

  console.log(user);

  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  return (
    <div className="flex justify-center items-center lg:my-36">
      <Helmet>
        <title>Dream sites || profile</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center p-6 shadow-md rounded-xl sm:px-12 ">
        <img
          src={photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full  aspect-square"
        />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Name: {displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base font-semibold">
              Email: {email}
            </p>
            <p className="px-5 text-xs sm:text-base font-semibold">
              Verified: {emailVerified ? "Yes" : "No"}
            </p>
            <Link to='/updateprofile'>
              <button
                className= "btn btn-outline btn-success font-bold text-lg mt-2">
                Update Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
