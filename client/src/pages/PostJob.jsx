import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PostJob = () => {
  return (
    <div className=" h-fit mb-10">
      <Card className="mx-auto w-[80%]">
        <CardHeader>
          <CardTitle className="text-3xl">Post a Job</CardTitle>
          <CardDescription>Enter detail of the job</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-y-2">
            <div className="grid gap-2">
              <Label className="text-xl" htmlFor="job-title">
                Job Title
              </Label>
              <Input id="job-title" placeholder="Enter Title" required />
            </div>
            <div className="flex gap-x-14 my-5">
              <div className="grid gap-y-3">
                <Label className="text-xl" htmlFor="job-type">
                  Job Type
                </Label>
                <RadioGroup
                  className="flex gap-x-5 pl-4"
                  defaultValue="comfortable"
                >
                  <div className="flex items-center gap-x-2">
                    <RadioGroupItem value="fulltime" id="r1" />
                    <Label htmlFor="r1">Full Time</Label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <RadioGroupItem value="parttime" id="r2" />
                    <Label htmlFor="r2">Part Time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="freelance" id="r3" />
                    <Label htmlFor="r3">Freelance</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-y-3">
                <Label className="text-xl" htmlFor="applicants">
                  Applicants Needed
                </Label>
                <div className="flex gap-x-4 pl-4">
                  <div className="flex gap-x-2 items-center">
                    <Checkbox id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <Checkbox id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-y-3">
              <Label className="text-xl" htmlFor="job-description">
                Job Description
              </Label>
              <Textarea placeholder="Type your message here." />
            </div>
            <div className="grid gap-y-3">
              <Label className="text-xl" htmlFor="catagory">
                Job Category
              </Label>
              <Select>
                <SelectTrigger className="w-[70%]">
                  <SelectValue placeholder="Select the Job's category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="Software-dev">Apple</SelectItem>
                    <SelectItem value="finance">
                      Accounting and Finance
                    </SelectItem>
                    <SelectItem value="Media">
                      Media and Communication
                    </SelectItem>
                    <SelectItem value="Editing">Video Editing</SelectItem>
                    <SelectItem value="Design">
                      Creative art and design
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-x-20">
              <div className="grid gap-y-3">
                <Label className="text-xl" htmlFor="job-type">
                  Job Type
                </Label>
                <RadioGroup
                  className="flex gap-x-5 pl-4"
                  defaultValue="comfortable"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="onsite" id="onsite" />
                    <Label htmlFor="onsite">On-Site</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="parttime" id="remote" />
                    <Label htmlFor="remote">Remote</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid mt-3 gap-y-3">
                <Label className="text-xl" htmlFor="date">
                  Application Deadline
                </Label>
                <Input type="date" id="date" placeholder="Email" />
              </div>
            </div>
            <div className="grid gap-y-2">
              <Label className="text-xl" htmlFor="catagory">
                Experience level
              </Label>
              <Select>
                <SelectTrigger className="w-[70%]">
                  <SelectValue placeholder="Select the Expertise type the job requires" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Experience Levels</SelectLabel>
                    <SelectItem value="expert">Expert</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                    <SelectItem value="intermidiate">Intermidate</SelectItem>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="entry">Entry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              <Button className="">Post Job</Button>
            </div>
          </div>

          {/* <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="#" className="underline">
              Sign in
            </Link>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default PostJob;
