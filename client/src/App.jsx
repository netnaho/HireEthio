import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Posts from "./pages/Posts";
import Messages from "./pages/Messages";
import Message from "./pages/Message";
import Applicants from "./pages/Applicants";
import Hires from "./pages/Hires";
import JobHires from "./pages/JobHires";
import JobsApplied from "./pages/JobsApplied";

function App() {
  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/applicants",
          element: <Applicants />,
        },
        {
          path: "/applications",
          element: <JobsApplied />,
        },
        {
          path: "/hires",
          element: <Hires />,
        },
        {
          path: "/contracts",
          element: <JobHires />,
        },
      ],
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
