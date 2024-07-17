import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const Hire = ({
  applicationId,
  hireDate,
  completedDate,
  rating,
  firstName,
  lastName,
  jobTitle,
  jobDesc,
  profilePic,
}) => {
  const navigate = useNavigate();
  const [rate, setRate] = useState(null);
  const formatDate = (datetimeString) => {
    const date = new Date(datetimeString);
    return date.toLocaleDateString(); // Adjust options as needed
  };

  const handleRate = async () => {
    const rateData = {
      rating: rate,
      applicationId: applicationId,
    };
    axios
      .post("http://localhost:8800/api/hire/rate", rateData)
      .then((res) => {
        console.log(res.data);
        setRate("");
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="mb-4 p-4 border rounded-md shadow-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-5">
            <Avatar>
              <AvatarImage src={`http://localhost:8800/images/${profilePic}`} />
              <AvatarFallback>
                {firstName.charAt(0)}
                {lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h2>
              <span className=" text-sm text-slate-400">Done By:</span>{" "}
              {firstName} {lastName}
            </h2>
          </div>
          <div>
            <strong>Rating {rating} </strong>
          </div>{" "}
          {/* Replace with actual rating if available */}
        </div>
        <div>
          <p className="font-bold text-xl text-slate-400">{jobTitle}</p>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Job Description</AccordionTrigger>
              <AccordionContent>{jobDesc}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="gap-x-5">
            <div className="font-bold text-sm text-slate-400">
              Started {formatDate(hireDate)}
            </div>
            <div className="font-bold text-sm text-slate-400">
              Completed:{" "}
              {completedDate && `Completed ${formatDate(completedDate)}`}
            </div>
          </div>
          {/* other */}
          <div className="flex gap-x-4">
            <button className=" bg-green-500 px-5 py-2 rounded-xl text-white font-mono font-semibold">
              Pay
            </button>
            {!rating && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className=" bg-blue-500 px-5 py-2 rounded-xl text-white font-mono font-semibold"
                    variant="outline"
                  >
                    Rate Freelancer
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Rate Freelancer (rate out of 5)</DialogTitle>
                    <DialogDescription>
                      Were you satsfied by their work? Give feedback by rating
                      them.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Rate Value
                      </Label>
                      <Input
                        id="name"
                        type="number"
                        value={rate}
                        onChange={(e) => {
                          setRate(e.target.value);
                        }}
                        max="5"
                        min="0"
                        placeholder="5"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleRate} type="submit">
                      Submit Rate
                    </Button>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
