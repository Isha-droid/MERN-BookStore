import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: async ({ params }) => {
          console.log(params.id)
          const response = await fetch(`http://localhost:3000/book/${idString}`);
          const data = await response.json();
          return data;
        },
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <PrivateRoute><DashBoardLayout /> </PrivateRoute>,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage-book",
        element: <ManageBook />,
      },
      {
        path: "/admin/dashboard/edit-book/:id",
        element: <EditBook />,
        loader: async ({ params }) => {
          const idString = String(params.id);
          console.log(idString)
          const response = await fetch(`http://localhost:3000/book/${idString}`); 
          const data = await response.json();
          return data;
        },
      },
      
    ],
  },
  {
    path:"sign-up",
    element: <SignUp/>
  },{
    path:"login",
    element: <Login/>
  }
]);

export default router;