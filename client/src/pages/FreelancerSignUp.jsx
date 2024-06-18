import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const FreelancerSignUp = () => {
  return (
    <div className="flex justify-center items-center h-fit py-5">
      <Card className="mx-auto w-[60%]">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up as a Freelancer</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="user-name">User name</Label>
                <Input id="user-name" placeholder="Robinson" required />
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
            <div className="w-full flex flex-col gap-y-1">
              <Label className="text-base" htmlFor="">
                Select your proffession:
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose your area of expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Proffessions</SelectLabel>
                    <SelectItem value="graphics">Graphic Designer</SelectItem>
                    <SelectItem value="photography">Photographer</SelectItem>
                    <SelectItem value="social-media">
                      Social Media Manager
                    </SelectItem>
                    <SelectItem value="developer">Web Developer</SelectItem>
                    <SelectItem value="tutor">Tutor</SelectItem>
                    <SelectLabel>Proffessions</SelectLabel>
                    <SelectItem value="graphics">Editor</SelectItem>
                    <SelectItem value="photography">Copywriter</SelectItem>
                    <SelectItem value="social-media">
                      Human resource Manager
                    </SelectItem>
                    <SelectItem value="developer">Virtual Assistant</SelectItem>
                    <SelectItem value="tutor">Accountant</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message-2">Bio</Label>
              <Textarea
                placeholder="Tell us a little bit about yourself"
                id="message-2"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input id="picture" type="file" />
            </div>
            <Button type="submit" className="w-full bg-[#396ca0] rounded-3xl">
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreelancerSignUp;
