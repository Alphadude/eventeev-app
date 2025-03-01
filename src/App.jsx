import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// import pages
import Root from "./layout/Root";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Organization from "./pages/SignIn/Organization";
import ResetPassword from "./pages/SignIn/ResetPassword";
import ForgotPassword from "./pages/SignIn/ForgotPassword";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={ <SignIn/> } />
      <Route path="/sign-up" element={ <SignUp/> } />
      <Route path="/sign-in/organization" element={ <Organization/> } />
      <Route path="/forgot-password" element={ <ForgotPassword/> } />
      <Route path="/reset-password" element={ <ResetPassword/> } />
      <Route path="/dashboard"  element={ <Dashboard/> } />
    </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
