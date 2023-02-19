import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
    {path: '/' , element: <MainLayout/> , children : [
        {path:'/' , element: <Home/>},
        {path:'/home' , element: <Home/>},
        {path:'/' , element: <Home/>},
    ]}
])