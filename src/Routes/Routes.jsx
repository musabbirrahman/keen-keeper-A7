import { createBrowserRouter } from "react-router";
import HomePage from "../Components/HomePage/HomePage";
import MainLayout from "../Components/Layout/MainLayout";
import ErrorComponent from "../Components/ErrorComponent/ErrorComponent";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            index: true, element: <HomePage></HomePage>
        },
        {
            path: "timeline", element: <h1>timeline</h1>
        },
        {
            path: "stats", element: <h1>stats</h1>
        },
    ],
    errorElement: <ErrorComponent></ErrorComponent>
  },
]);