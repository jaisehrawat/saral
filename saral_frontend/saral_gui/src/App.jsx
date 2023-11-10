import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./pages/Body/Body";
import SignUp from "./pages/SignInSignUp/SignUpPage";
import SignIn from "./pages/SignInSignUp/SignInPage";
import Demo from "./components/tmp/Demo";
import Home from "./pages/HomePagesComponents/Home";
import Activity from "./pages/HomePagesComponents/Activity";
import Dashboard from "./pages/HomePagesComponents/Dashboard";
import Messages from "./pages/HomePagesComponents/Messages";
import Profile from "./pages/HomePagesComponents/Profile";
import Settings from "./pages/HomePagesComponents/Settings";
import Projects from "./pages/HomePagesComponents/Projects";
import NewProject from "./pages/HomePagesComponents/NewProject/NewProject";
import Basic from "./pages/HomePagesComponents/NewProject/Basic";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route path="/home/*" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="activity" element={<Activity />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="projects" element={<Projects />} />
          <Route path="newproject/*" element={<NewProject />}>
            <Route index element={<Basic />} />
            <Route path="basic" element={<Basic />} />
          </Route>
        </Route>
        <Route exact path="/demo" element={<Demo />} />
      </Routes>
    </>
  );
};

export default App;