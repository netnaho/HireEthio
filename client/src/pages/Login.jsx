import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[71vh]">
      <div className="w-[30%] mx-auto shadow-md shadow-slate-500 p-7 rounded-lg">
        <h1 className="text-center text-3xl font-bold mb-3">
          Login to your Account
        </h1>
        <form action="" method="get">
          <label className="font-medium" htmlFor="username">
            Username:
          </label>
          <Input
            className="mt-2"
            id="username"
            type="text"
            placeholder="Username"
          />
          <br />
          <label className="font-medium" htmlFor="password">
            Password:
          </label>
          <Input
            className="mt-2"
            id="password"
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-center items-center mt-6">
            <Button className="w-full bg-[#38A3A5] rounded-3xl">Log in</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
