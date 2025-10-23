import { createBrowserRouter } from "react-router";
import HomeLayout from "../HomeLayout/HomeLayout";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Skill from "../Skills/Skill";
import Login from "../Login and SignUp/Login";
import SignUp from "../Login and SignUp/SignUp";

const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: HomeLayout,
            children: [
                {
                    index: true,
                    path: '',
                    Component: Home,
                    loader: async () => fetch('skill.json')
                },
                {
                    path: 'skills/:id',
                    Component: Skill,
                    loader: async () => fetch('skill.json')
                },
                {
                    path: '/login',
                    Component: Login
                },
                {
                    path: '/signup',
                    Component: SignUp
                },
                {
                    path: '/profile',
                    Component: Profile
                }
            ]
        }
    ]
)

export default router