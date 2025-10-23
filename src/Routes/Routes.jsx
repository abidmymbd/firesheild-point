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
<<<<<<< HEAD
                    loader: async () => fetch('/skill.json')
=======
                    loader: () => fetch('/skill.json')
>>>>>>> d348886dcd6ff1100cb3735160133790a7695b48
                },
                {
                    path: 'skills/:id',
                    Component: Skill,
                    loader: async () => fetch('/skill.json')
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