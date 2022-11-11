import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import AddServices from "../../Pages/Home/Services/AddServices";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myReview/:id",
        element: <MyReviews></MyReviews>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-sanjitweb479.vercel.app/myReview/${params.id}`
          ),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-sanjitweb479.vercel.app/myReview/${params.id}`
          ),
      },
      {
        path: "/addServices",
        element: <AddServices></AddServices>,
      },
    ],
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>,
  },
]);

export default router;
