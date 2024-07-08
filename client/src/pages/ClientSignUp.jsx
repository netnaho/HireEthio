import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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

const ClientSignup = () => {
  // const [clientType, setClientType] = useState();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    clientType: "Organization",
    profilePic: null,
  });
  const {
    firstname,
    lastname,
    username,
    email,
    password,
    clientType,
    profilePic,
  } = formData;

  const handleChange = (e) => {
    if (e.target.name === "profilePic") {
      setFormData({ ...formData, profilePic: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("firstname", firstname);
    data.append("lastname", lastname);
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);
    data.append("clientType", clientType);
    data.append("profile-pic", profilePic);
    axios
      .post("http://localhost:8800/api/auth/client-register", data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-fit py-5">
      <Card className="mx-auto w-[55%]">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up as Client</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} action="">
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    name="firstname"
                    onChange={handleChange}
                    id="first-name"
                    placeholder="Max"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    name="lastname"
                    id="last-name"
                    onChange={handleChange}
                    placeholder="Robinson"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="user-name">User name</Label>
                  <Input
                    name="username"
                    id="user-name"
                    onChange={handleChange}
                    placeholder="Robinson"
                    required
                  />
                  <RadioGroup
                    onValueChange={(value) => {
                      console.log(value);
                      if (value == "private") {
                        setFormData({
                          ...formData,
                          clientType: "Organization",
                        });
                        console.log(formData);
                      } else if (value === "company") {
                        setFormData({
                          ...formData,
                          clientType: "Private",
                        });
                        console.log(formData);
                      }
                    }}
                    className="flex gap-x-7"
                    defaultValue="company"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="private" id="private" />
                      <Label htmlFor="private">Private Client</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="company" id="company" />
                      <Label htmlFor="company">Organization</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  id="password"
                  onChange={handleChange}
                  type="password"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Picture</Label>
                <Input
                  name="profilePic"
                  id="picture"
                  onChange={handleChange}
                  type="file"
                />
              </div>
              <Button type="submit" className="w-full bg-[#396ca0] rounded-3xl">
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default ClientSignup;
