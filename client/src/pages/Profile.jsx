import ProfImg from "@/assets/Nahom.jpg";
const Profile = () => {
  return (
    <div className="flex flex-col gap-y-7 mx-auto w-[80%] mb-10">
      <div className="flex gap-x-5 mx-auto w-full">
        <div className="flex flex-col w-[70%] rounded-md overflow-hidden shadow-lg shadow-slate-400">
          <div className="bg-[#57CC99] h-[200px]"></div>
          <div className=" px-6 py-5 relative">
            <div className="absolute -top-[57px] bg-[#d1e5df] w-[107px] h-[107px] flex justify-center items-center rounded-full">
              <div className="w-[100px] h-[100px] bg-sky-600 overflow-hidden rounded-full">
                <img className="object-cover" src={ProfImg} alt="" />
              </div>
            </div>

            <div className="mt-[60px]">
              <h1 className="text-xl font-semibold">Nahom Esayas</h1>
              <p>Software Developer</p>
              <div>Rating 5.0</div>
              <div className=" mt-4">
                <h3 className="font-semibold text-lg">About</h3>
                <p>
                  Hi, I&apos;m Nahom Esayas! I am a passionate software
                  developer with expertise in web development and UI/UX design.
                  I have a strong background in creating user-friendly and
                  visually appealing websites that meet the needs of
                  organizations. From website navigation and layout to web
                  hosting and security architecture, I handle all aspects of the
                  development process. With 2 years of experience in the
                  industry, I have successfully delivered projects that have
                  made a positive impact. I am dedicated to staying up-to-date
                  with the latest technologies and continuously improving my
                  skills. When I&apos;m not coding, you can find me exploring
                  new technologies, reading tech blogs, or contributing to
                  open-source projects. Let&apos;s connect and discuss how I can
                  contribute to your next project!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-fit rounded-md shadow-lg p-4 shadow-slate-400">
          <div className="flex justify-between h-[150px] border-b-[1px] border-slate-200">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <span>Add</span>
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
