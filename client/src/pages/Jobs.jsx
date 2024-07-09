import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Job from "../components/Job";

const Jobs = () => {
  return (
    <div className="py-5">
      <div className="flex gap-x-14 px-10 justify-center">
        {/* Filtering sidebar */}
        <div className="w-[20%] h-fit p-5 shadow-md shadow-slate-500 rounded-lg">
          {/* Filter and clear buttons */}
          <div className="text-[#22577A] font-bold text-3xl mb-2">
            Filter Jobs
          </div>
          <div className="flex justify-between ">
            <Button className=" bg-[#38A3A5] rounded-md">Filter</Button>
            <Button variant="outline">Clear</Button>
          </div>
          <div>
            <h2 className=" my-4 font-semibold text-lg">Job Category</h2>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="software" />
                <label
                  htmlFor="software"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Software development
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="accounting" />
                <label
                  htmlFor="accounting"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accounting and finance
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="media" />
                <label
                  htmlFor="media"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Media and communication
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="video" />
                <label
                  htmlFor="video"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Video Editing
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="script" />
                <label
                  htmlFor="script"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Script writing
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="art" />
                <label
                  htmlFor="art"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Creative art and design
                </label>
              </div>
            </div>
          </div>
          <div>
            <h2 className=" my-4 font-semibold text-lg">Job Type</h2>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="fulltime" />
                <label
                  htmlFor="fulltime"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Full Time
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="partime" />
                <label
                  htmlFor="partime"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Part Time
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="freelance" />
                <label
                  htmlFor="freelance"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Freelance
                </label>
              </div>
            </div>
          </div>
          <div>
            <h2 className=" my-4 font-semibold text-lg">Job Site</h2>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="onsite" />
                <label
                  htmlFor="onsite"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Onsite
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <label
                  htmlFor="remote"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remote
                </label>
              </div>
            </div>
          </div>
          <div>
            <h2 className=" my-4 font-semibold text-lg">Gender</h2>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="male" />
                <label
                  htmlFor="male"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="accounting" />
                <label
                  htmlFor="accounting"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Female
                </label>
              </div>
            </div>
          </div>
          <div>
            <h2 className=" my-4 font-semibold text-lg">Job Category</h2>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="software" />
                <label
                  htmlFor="software"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Software development
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="accounting" />
                <label
                  htmlFor="accounting"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accounting and finance
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="media" />
                <label
                  htmlFor="media"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Media and communication
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="video" />
                <label
                  htmlFor="video"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Video Editing
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="script" />
                <label
                  htmlFor="script"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Script writing
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="art" />
                <label
                  htmlFor="art"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Creative art and design
                </label>
              </div>
            </div>
          </div>
          <div>
            <h2 className=" my-4 font-semibold text-lg">Job Category</h2>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="software" />
                <label
                  htmlFor="software"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Software development
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="accounting" />
                <label
                  htmlFor="accounting"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accounting and finance
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="media" />
                <label
                  htmlFor="media"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Media and communication
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="video" />
                <label
                  htmlFor="video"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Video Editing
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="script" />
                <label
                  htmlFor="script"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Script writing
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="art" />
                <label
                  htmlFor="art"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Creative art and design
                </label>
              </div>
            </div>
          </div>
          <div>
            <h2 className=" my-4 font-semibold text-lg">Experience level</h2>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="entry" />
                <label
                  htmlFor="entry"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Entry level
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="junior" />
                <label
                  htmlFor="junior"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Junior level
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="intermediate" />
                <label
                  htmlFor="intermediate"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Intermediate level
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="senior" />
                <label
                  htmlFor="senior"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Senior level
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="expert" />
                <label
                  htmlFor="expert"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Expert level
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Jobs List and search bar */}
        <div className="w-[65%] py-5 shadow-md shadow-slate-500 rounded-lg">
          {/* search input field */}
          <div className="flex w-full px-5 mb-3">
            <Input className="w-[70%] mr-3" type="email" placeholder="Search" />
            <Button className=" bg-[#38A3A5]" type="submit">
              Search
            </Button>
          </div>
          {/* job card Lists */}
          <div>
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
