import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <div>
      <div className="flex gap-x-5 justify-center my-5">
        <div className="w-[60%] px-10 py-4 flex flex-col gap-y-5 rounded-sm shadow-sm shadow-slate-600">
          <h1 className="text-2xl font-medium text-teal-800">About the Job</h1>
          <div className="border-b-[1px] pb-5 border-b-gray-400">
            <p className="text-4xl font-bold mb-3">Senior Angular Developer</p>
            <div className="flex gap-x-4">
              <p className=" bg-slate-200 py-1 px-3 rounded-full shadow-sm shadow-slate-500">
                Web Development
              </p>
              <p className=" bg-slate-200 py-1 px-3 rounded-full shadow-sm shadow-slate-500">
                posted 16 minutes ago
              </p>
              <p className=" bg-slate-200 py-1 px-3 rounded-full shadow-sm shadow-slate-500">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
          <div>
            <p className=" text-start">
              <strong>Job Description:</strong>&nbsp; As a Senior .netCore
              Developer at Daftech Social ICT Solutions PLC, you will play a key
              role in designing, developing, and maintaining robust backend
              solutions for our web and mobile applications. You will
              collaborate with cross-functional teams to ensure the seamless
              integration of frontend interfaces with the backend
              infrastructure. Your technical expertise and leadership skills
              will contribute to the successful delivery of high-quality
              software products that make a positive social impact.
              Responsibilities: -Architect and design scalable and efficient
              backend systems, considering factors such as performance,
              security, and maintainability. -Develop and maintain APIs and
              server-side functionality to support frontend features and
              interactions. -Collaborate closely with frontend developers,
              designers, and product managers to define technical requirements
              and ensure smooth integration between frontend and backend
              components. -Participate in the entire software development
              lifecycle, including requirements gathering, system design,
              coding, testing, deployment, and maintenance. -Optimize
              application performance and ensure the scalability and reliability
              of backend systems to handle increasing user loads. -Troubleshoot
              and debug complex technical issues, providing effective and timely
              solutions to ensure smooth operation of the applications. -Conduct
              thorough code reviews, providing constructive feedback to junior
              team members and ensuring adherence to coding standards and best
              practices. -Stay up-to-date with emerging backend technologies,
              industry trends, and best practices, and actively contribute to
              the continuous improvement of development processes. -Mentor
              junior developers, providing guidance and support in their
              technical growth and fostering a collaborative learning
              environment. -Collaborate with the DevOps team to automate
              deployment processes, monitor system performance, and ensure
              efficient and reliable application delivery. -Ensure compliance
              with data protection and privacy regulations in all backend
              development activities. -Collaborate with project managers and
              participate in sprint planning, task estimation, and project
              management activities to deliver high-quality software within
              specified timelines.
            </p>
          </div>
          <div className="flex gap-x-10 border-b-[1px] pb-5 border-b-gray-400">
            <div className="flex flex-col">
              <span className="text-lg text-slate-500">Monthly</span>
              <span className="font-semibold">$8000</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg text-slate-500">Experience Level</span>
              <span className="font-semibold">Senior Level</span>
            </div>
          </div>
          <div className="mb-3">
            <h1 className="text-xl font-semibold mb-2">
              Write a cover a letter for the job.
            </h1>
            <Textarea placeholder="Type your message here." />
            <div className=" mt-4 flex justify-between">
              <span className="hover:text-[#57CC99] cursor-pointer">
                <Link to="/jobs">
                  <ArrowLeft className="inline-block" /> Return to List
                </Link>
              </span>
              <Button className="bg-[#38A3A5]">Submit Proposal</Button>
            </div>
          </div>
        </div>
        <div className="shadow-md shadow-slate-400 w-[25%] h-fit py-4 px-5 rounded-md hover:scale-[1.02] duration-1000">
          <div>
            <h1 className="text-2xl font-medium text-teal-800 mb-3">
              About The Client
            </h1>
            <div className="mb-3">
              <h2 className="hover:text-emerald-700 cursor-pointer">
                Daftech computer Engineering
              </h2>
            </div>
            <div className="">
              <h2>3 jobs posted</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
