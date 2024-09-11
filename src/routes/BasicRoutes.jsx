import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/home-page/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
    ],
  },
]);

export default router;
