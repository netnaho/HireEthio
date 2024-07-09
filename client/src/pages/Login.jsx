import axios from "axios";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import LoginImg from "@/assets/freelancer-login.png";
import { useState } from "react";

const Login = () => {
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    password: "",
    isClient: null,
  });
  const { email, password, isClient } = userLoginInfo;
  const handleChange = (e) => {
    setUserLoginInfo({ ...userLoginInfo, [e.target.name]: e.target.value });
  };
  const handleOptionChange = (e) => {
    setUserLoginInfo({ ...userLoginInfo, isClient: e.target.value === "true" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("isClient", isClient);
    axios
      .post("http://localhost:8800/test", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    // <div className="flex justify-center items-center h-[71vh]">
    //   <div className="w-[30%] mx-auto shadow-md shadow-slate-500 p-7 rounded-lg">
    //     <h1 className="text-center text-3xl font-bold mb-3">
    //       Login to your Account
    //     </h1>
    //     <form action="" method="get">
    //       <label className="font-medium" htmlFor="username">
    //         Username:
    //       </label>
    //       <Input
    //         className="mt-2 focus-visible:ring-green-700"
    //         id="email"
    //         type="email"
    //         placeholder="Email"
    //       />
    //       <br />
    //       <label className="font-medium" htmlFor="password">
    //         Password:
    //       </label>
    //       <Input
    //         className="mt-2 focus-visible:ring-green-700"
    //         id="password"
    //         type="password"
    //         placeholder="Password"
    //       />
    //       <div className="flex justify-center items-center mt-6">
    //         <Button className="w-full bg-[#38A3A5] rounded-3xl">Log in</Button>
    //       </div>
    //     </form>
    //     <Link to="/register">
    //       <p className=" hover:text-blue-500 mt-2 text-center">
    //         Don&apos;t have an account, signup
    //       </p>
    //     </Link>
    //   </div>
    // </div>
    <div className="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:min-h-[500px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[450px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={handleSubmit} action="">
            <div className="grid gap-4">
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
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  name="password"
                  id="password"
                  onChange={handleChange}
                  type="password"
                  required
                />
              </div>
              <div className="flex gap-x-5">
                <div className="flex gap-x-2">
                  <input
                    type="radio"
                    name="user-type"
                    value="true"
                    checked={userLoginInfo.isClient === true}
                    onChange={handleOptionChange}
                    id="client"
                  />
                  <label htmlFor="client">Client</label>
                </div>
                <div className="flex gap-x-2">
                  <input
                    type="radio"
                    name="user-type"
                    value="false"
                    checked={userLoginInfo.isClient === false}
                    onChange={handleOptionChange}
                    id="freelancer"
                  />
                  <label htmlFor="freelancer">Freelancer</label>
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#38A3A5] rounded-3xl">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </form>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src={LoginImg}
          alt="Image"
          className="h-full w-full relative bottom-0 object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
