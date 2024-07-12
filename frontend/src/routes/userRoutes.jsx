import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import OTP from "../pages/otp";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import App from "../App";
import Error from "../components/Error";
import ForgotPassword from "../pages/ForgotPassword";
import ForgotOtp from "../pages/ForgotOtp";
import RenewPassword from "../pages/RenewPassword"

const AppRouter = createBrowserRouter([
{
    path: "/",
    element: <App />,
    errorElement: <Error message="Something Went Wrong" />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }

  ]
},
  {
    path: '/signup',
    element: <Signup />
  },
    {
      path: '/otp',
      element: <OTP />
    },
  {
    path: '/login',
    element: <Login />
  },
{
  path: "/forgot-password",
  element: <ForgotPassword />
},
{
  path: "/forgot-otp",
  element: <ForgotOtp />
},
{
  path: "/renew-password",
  element: <RenewPassword />
},

]);

export default AppRouter;
