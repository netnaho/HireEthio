import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Applicant = ({
  freelancerId,
  freelancerFirstName,
  freelancerLastName,
  profession,
  profilePic,
  coverLetter,
  jobTitle,
}) => {
  const [userData, setUserData] = useState(null);

  const isClient = userData
    ? userData.isLoggedIn && userData.userInfo.isClient
    : null;

  const clientId = userData
    ? userData.isLoggedIn && userData.userInfo.userData.Client_ID
    : null;

  const sentMessagePortalData = {
    isClient: isClient,
    clientId: clientId,
    freelancerId: freelancerId,
  };

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8800/check")
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleMessagePort = async () => {
    axios
      .post(
        "http://localhost:8800/api/message/create-message",
        sentMessagePortalData
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="flex flex-col w-[70%] mx-auto shadow-sm shadow-slate-400 rounded-md p-4 m-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-5">
            <Avatar>
              <AvatarImage src={`http://localhost:8800/images/${profilePic}`} />
              <AvatarFallback>FN</AvatarFallback>
            </Avatar>
            <h2>
              {freelancerFirstName} {freelancerLastName}
            </h2>
          </div>
          <div>Rating 5.0</div>
        </div>
        <div>
          <p className="font-bold text-xl text-slate-400">{profession}</p>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Job Title: {jobTitle}</h1>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Application cover letter</AccordionTrigger>
              <AccordionContent>{coverLetter}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-x-5">
            <Button className="bg-green-600">Hire</Button>
            <Button onClick={handleMessagePort} className=" bg-blue-500">
              Message
            </Button>
          </div>
          <Button className=" bg-red-500">Reject</Button>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
