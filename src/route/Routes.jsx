import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import FriendDetails from "../pages/friendDetails/FriendDetails";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {
        path: 'friendDetails/:id',
        loader: () => fetch('/friendsData.json'),
        Component: FriendDetails
      },
      {path: 'timeline', Component: Timeline},
      {path: 'stats', Component: Stats}
    ]
  },
  {path: '*', Component: ErrorPage}
])