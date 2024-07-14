import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfImg from "@/assets/Nahom.jpg";
const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  const userData = {
    firstName: userInfo
      ? userInfo.isLoggedIn && userInfo.userInfo.userData.FirstName
      : null,
    lastName: userInfo
      ? userInfo.isLoggedIn && userInfo.userInfo.userData.LastName
      : null,
    profession: userInfo
      ? userInfo.isLoggedIn && userInfo.userInfo.userData.Proffession
      : null,
    bio: userInfo
      ? userInfo.isLoggedIn && userInfo.userInfo.userData.Bio
      : null,
    profilePic: userInfo
      ? userInfo.isLoggedIn && userInfo.userInfo.userData.Profile_Picture
      : null,
    email: userInfo
      ? userInfo.isLoggedIn && userInfo.userInfo.userData.Email
      : null,
  };
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8800/check")
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col gap-y-7 mx-auto w-[80%] mb-10">
      <div className="flex gap-x-5 mx-auto w-full">
        <div className="flex flex-col w-[70%] rounded-md overflow-hidden shadow-lg shadow-slate-400">
          <div className="bg-[#57CC99] h-[200px]"></div>
          <div className=" px-6 py-5 relative">
            <div className="absolute -top-[57px] bg-[#d1e5df] w-[107px] h-[107px] flex justify-center items-center rounded-full">
              <div className="w-[100px] h-[100px] bg-sky-600 overflow-hidden rounded-full">
                <Avatar className="cursor-pointer w-full h-full">
                  <AvatarImage
                    src={`http://localhost:8800/images/${userData.profilePic}`}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="mt-[60px]">
              <h1 className="text-xl font-semibold">
                {userData.firstName} {userData.lastName}
              </h1>
              <p>{userData.profession}</p>
              <div>Rating 5.0</div>
              <div className=" mt-4">
                <h3 className="font-semibold text-lg">About</h3>
                <p>{userData.bio}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-fit rounded-md shadow-lg p-4 shadow-slate-400">
          <div>
            <div className="flex justify-between h-[150px] border-b-[1px] border-slate-200">
              <h3 className="font-semibold text-lg">Contact Info</h3>
              <span>Add</span>
            </div>
          </div>

          <div className="flex justify-between h-[150px] border-b-[1px] border-slate-200">
            <h3 className="font-semibold text-lg">Portfolio and Resume</h3>
            <span>Add</span>
          </div>
        </div>
      </div>

      <div className="w-[70%] rounded-md px-6 py-5 overflow-hidden shadow-lg shadow-slate-400">
        <div className="flex justify-between h-[150px] border-b-[1px] border-slate-200">
          <h3 className="font-semibold text-lg">Skills</h3>
          <span>Add</span>
        </div>
        <div className="flex justify-between h-[150px] border-b-[1px] border-slate-200">
          <h3 className="font-semibold text-lg">Services</h3>
          <span>Add</span>
        </div>
        <div className="flex justify-between h-[150px] border-b-[1px] border-slate-200">
          <h3 className="font-semibold text-lg">Work Experience</h3>
          <span>Add</span>
        </div>
        <div className="flex justify-between h-[150px] border-b-[1px] border-slate-200">
          <h3 className="font-semibold text-lg">Education</h3>
          <span>Add</span>
        </div>
        <div className="flex justify-between h-[150px] border-b-[1px] border-slate-200">
          <h3 className="font-semibold text-lg">
            Previous Work Experience on this platform
          </h3>
          <span>Add</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
