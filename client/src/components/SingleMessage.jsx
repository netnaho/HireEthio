import { useState } from "react";
import Profile1 from "@/assets/Profile2.jpg";

const SingleMessage = () => {
  const [message, setMessage] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolorum aut dignissimos similique assumenda quos"
  );
  return (
    <div>
      <div className="flex gap-x-6 mb-1 py-2 px-2 rounded-sm cursor-pointer hov min-w-[400px] items-center border-b-[1px] border-slate-300 bg-slate-50 hover:bg-sky-100 duration-300">
        {/* <Avatar>
                <AvatarImage
                  className="object-contain"
                  
                  src={Profile1}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> */}
        <img
          src={Profile1}
          alt=""
          className=" object-cover w-14 h-14 rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-blue-800">
            Samson Abayneh
          </h2>
          <p className=" text-sm text-slate-500 text-nowrap">
            {message.substring(0, 50)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMessage;
