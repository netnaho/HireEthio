import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const SingleApplied = () => {
  return (
    <div>
      <div className="flex flex-col w-[70%] mx-auto shadow-sm shadow-slate-400 rounded-md p-4 m-4">
        {/* <div className="flex justify-between">
          <div className="flex items-center gap-x-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2>Nahom Esayas</h2>
          </div>
          <div>Rating 5.0</div>
        </div> */}
        {/* <div>
          <p className="font-bold text-xl text-slate-400">Web developer</p>
        </div> */}
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">
              Job Title: Senior Angular developer
            </h1>
            <h2>Daftech Computer Engineering</h2>
          </div>

          <div>
            <span className=" text-amber-400">Pending...</span>
          </div>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Application cover letter</AccordionTrigger>
              <AccordionContent>
                Dear Hiring Manager, I am writing to express my strong interest
                in the Senior Angular Developer position at your company. With
                my extensive experience in Angular development and my passion
                for creating innovative web applications, I am confident that I
                would be a valuable asset to your team. Over the past [number of
                years] years, I have been actively involved in developing
                complex web applications using Angular. I have a deep
                understanding of Angular concepts, including components,
                services, modules, and routing. My experience includes working
                on projects that involve integrating Angular with backend APIs,
                implementing responsive designs, and optimizing performance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-x-5">
            <Button className=" bg-blue-500">Message</Button>
          </div>
          <Button className=" bg-red-500">Delete Application</Button>
        </div>
      </div>
    </div>
  );
};

export default SingleApplied;
