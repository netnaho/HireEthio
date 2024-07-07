import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import LoginImg from "@/assets/freelancer-login.png";
import axios from "axios";


const Login = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [userType, setUserType] = useState('1');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', { Username, Password, userType });
      if(response.data.message == 1){
        navigate('/profile');
      } else{
        alert("Invalid Username or Password");
      }
    } catch (error) {
      alert('Login failed!');
    }
  };

  const handleOptionChange = (event) => {
    setUserType(event.target.value); // Update state with the selected radio button value
  };

  return (
    <div className="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:min-h-[500px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[450px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="Username">Username</Label>
              <Input
                id="Username"
                type="text"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
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
                id="password"
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
            <div>
              <input
                type="radio" 
                name="usertype"
                value="1"
                checked={userType === '1'}
                onChange={handleOptionChange}
                className="m-2" 
                id="usertype" />Freelancer 
              <input 
                type="radio" 
                name="usertype" 
                value="2" 
                checked={userType === '2'}
                onChange={handleOptionChange}
                className="ml-6 mr-2"
                id="usertype" />Employer

            </div>
            <Button type="submit" className="w-full bg-[#38A3A5] rounded-3xl">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
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
