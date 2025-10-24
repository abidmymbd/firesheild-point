import { createBrowserRouter } from "react-router";
import HomeLayout from "../HomeLayout/HomeLayout";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Skill from "../Skills/Skill";
import Login from "../Login and SignUp/Login";
import SignUp from "../Login and SignUp/SignUp";
import ForgotPassword from "../Login and SignUp/ForgotPassword";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                path: "",
                Component: Home,
                loader: async () => (await fetch("/skill.json")).json(),
            },
            {
                path: "skills/:id",
                Component: Skill,
                loader: async () => (await fetch("/skill.json")).json(),
            },
            {
                path: "login",
                Component: Login,
            },
            // {
            //     path: "forgotpass",
            //     Component: ForgotPassword,
            // },
            {
                path: "signup",
                Component: SignUp,
            },
            {
                path: "profile",
                Component: Profile,
            },
        ],
    },
    {
        path: "forgotpass",
        Component: ForgotPassword,
    },
]);

export default router;
