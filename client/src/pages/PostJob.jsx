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
import { useState } from "react";
import axios from 'axios'; // Make sure to import axios
import { useNavigate } from 'react-router-dom'; // If you are using react-router-dom for navigation

const PostJob = () => {
    const ClientID = 1;
    const navigate = useNavigate();
    const [jobTitle, setJobTitle] = useState("");
    const [jobType, setJobType] = useState("");
    const [applicantsNeeded, setApplicantsNeeded] = useState({});
    const [jobDescription, setJobDescription] = useState("");
    const [jobCategory, setJobCategory] = useState("");
    const [jobSite, setJobSite] = useState("");
    const [applicationDeadline, setApplicationDeadline] = useState("");
    const [experienceLevel, setExperienceLevel] = useState("");

    const handleJobType = (event) => {
        setJobType(event.target.value);
    };

    const handleJobSite = (event) => {
        setJobSite(event.target.value);
    };

    const handleApplicantsNeeded = (event) => {
        const { value, checked } = event.target;
        setApplicantsNeeded((prevValues) => ({
            ...prevValues,
            [value]: checked,
        }));
    };

    const handleJobCategory = (value) => {
        setJobCategory(value);
    };

    const handleExperienceLevel = (value) => {
        setExperienceLevel(value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(ClientID, 
          jobTitle, 
          jobType, 
          applicantsNeeded, 
          jobDescription, 
          jobCategory, 
          jobSite, 
          applicationDeadline, 
          experienceLevel)

        try {
            const response = await axios.post('http://localhost:8000/api/job/post', {
                ClientID, 
                jobTitle, 
                jobType, 
                applicantsNeeded, 
                jobDescription, 
                jobCategory, 
                jobSite, 
                applicationDeadline, 
                experienceLevel
            });

            if (response.data.message === 1) {
                navigate('/posts');
            } else {
                alert("Something went wrong! Please refresh and try again");
            }
        } catch (error) {
            alert('We could not Post your job into the system!');
            console.error(error);
        }
    };

    return (
        <div className=" h-fit mb-10">
            <Card className="mx-auto w-[80%]">
                <CardHeader>
                    <CardTitle className="text-3xl">Post a Job</CardTitle>
                    <CardDescription>Enter detail of the job</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit} className="grid gap-y-2">
                        <div className="grid gap-2">
                            <Label className="text-xl" htmlFor="job-title">
                                Job Title
                            </Label>
                            <Input onChange={(e) => setJobTitle(e.target.value)} name="jobTitle" id="job-title" placeholder="Enter Title" required />
                        </div>
                        <div className="flex gap-x-14 my-5">
                            <div className="grid gap-y-3">
                                <Label className="text-xl" htmlFor="job-type">
                                    Job Type
                                </Label>
                                <div
                                    className="flex gap-x-5 pl-4"
                                    
                                    onChange={handleJobType}
                                >
                                    <div className="flex items-center gap-x-2">
                                        <input
                                            type="radio"
                                            value="Full Time" 
                                            id="r1" 
                                            name="type"
                                            checked = {jobType === "Full Time"}
                                            onChange={handleJobType} />
                                        <Label htmlFor="r1">Full Time</Label>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <input
                                            type="radio"
                                            value="Part Time" 
                                            id="r2" 
                                            name="type"
                                            checked = {jobType === "Part Time"}
                                            onChange={handleJobType} />
                                        <Label htmlFor="r2">Part Time</Label>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <input
                                            type="radio"
                                            value="Freelance" 
                                            id="r3" 
                                            name="type"
                                            checked = {jobType === "Freelance"}
                                            onChange={handleJobType}
                                            className="" />
                                        <Label htmlFor="r3">Freelance</Label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-y-3">
                                <Label className="text-xl" htmlFor="applicants">
                                    Applicants Needed
                                </Label>
                                <div className="flex gap-x-4 pl-4">
                                    <div className="flex gap-x-2 items-center">
                                        <input type="checkbox" id="male"
                                            name="male"
                                            value="male"
                                            checked={applicantsNeeded.male || false}
                                            onChange={handleApplicantsNeeded} />
                                        <Label htmlFor="male">Male</Label>
                                    </div>
                                    <div className="flex gap-x-2 items-center">
                                        <input type="checkbox" id="female"
                                            name="female"
                                            value="female"
                                            className="w-12"
                                            checked={applicantsNeeded.female || false}
                                            onChange={handleApplicantsNeeded} />
                                        <Label htmlFor="female">Female</Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-y-3">
                            <Label className="text-xl" htmlFor="job-description">
                                Job Description
                            </Label>
                            <Textarea onChange={(e) => setJobDescription(e.target.value)} placeholder="Type your message here." />
                        </div>
                        <div className="grid gap-y-3">
                            <Label className="text-xl" htmlFor="category">
                                Job Category
                            </Label>
                            <Select value={jobCategory} onValueChange={handleJobCategory}>
                                <SelectTrigger className="w-[70%]">
                                    <SelectValue placeholder="Select the Job's category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        <SelectItem value="Software-dev">Software Development</SelectItem>
                                        <SelectItem value="Accounting And finance">Accounting and Finance</SelectItem>
                                        <SelectItem value="Media and Communication">Media and Communication</SelectItem>
                                        <SelectItem value="Video Editing">Video Editing</SelectItem>
                                        <SelectItem value="Art and Design">Creative art and design</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center gap-x-20">
                            <div className="grid gap-y-3">
                                <Label className="text-xl" htmlFor="job-type">
                                    Job Site
                                </Label>
                                <div
                                    className="flex gap-x-5 pl-4">
                                    <div className="flex items-center gap-x-2">
                                        <input
                                            type="radio"
                                            value="On-Site" 
                                            id="onsite" 
                                            name="site"
                                            checked = {jobSite === "On-Site"}
                                            onChange={handleJobSite}
                                            className="" />
                                        <Label htmlFor="onsite">On-Site</Label>
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <input
                                            type="radio"
                                            value="Remote" 
                                            id="remote" 
                                            name="site"
                                            checked = {jobSite === "Remote"}
                                            onChange={handleJobSite}
                                            className="" />
                                        <Label htmlFor="remote">Remote</Label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid mt-3 gap-y-3">
                                <Label className="text-xl" htmlFor="date">
                                    Application Deadline
                                </Label>
                                <Input type="date" onChange={(e) => setApplicationDeadline(e.target.value)} id="date" placeholder="Email" />
                            </div>
                        </div>
                        <div className="grid gap-y-2">
                            <Label className="text-xl" htmlFor="experience-level">
                                Experience Level
                            </Label>
                            <Select value={experienceLevel} onValueChange={handleExperienceLevel}>
                                <SelectTrigger className="w-[70%]">
                                    <SelectValue placeholder="Select the Expertise type the job requires" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Experience Levels</SelectLabel>
                                        <SelectItem value="Expert">Expert</SelectItem>
                                        <SelectItem value="Senior">Senior</SelectItem>
                                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                                        <SelectItem value="Junior">Junior</SelectItem>
                                        <SelectItem value="Entry">Entry</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit">Post Job</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default PostJob;
