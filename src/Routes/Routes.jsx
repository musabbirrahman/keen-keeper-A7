import { createBrowserRouter } from "react-router";
import HomePage from "../Components/HomePage/HomePage";
import MainLayout from "../Components/Layout/MainLayout";
import ErrorComponent from "../Components/ErrorComponent/ErrorComponent";
import FriendsDetails from "../pages/FriendsDetails";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "stats",
        element: <Stats></Stats>,
      },
      {
        path: "friendsDetails/:id",
        element: <FriendsDetails></FriendsDetails>,
        loader: () => fetch("/friends.json"),
      },
    ],
    errorElement: <ErrorComponent></ErrorComponent>,
  },
]);
