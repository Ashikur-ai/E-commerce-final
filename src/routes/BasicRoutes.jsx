import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/clientSide/home-page/Homepage";
import ProductDetails from "../pages/clientSide/product-details/ProductDetails";
import Register from "../pages/clientSide/register/Register";

import CategoryPage from "../pages/clientSide/CategoryPage/CategoryPage";

import Cart from "../pages/clientSide/cart/Cart";
import LoginPage from "../pages/clientSide/login/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout";
import UserProfile from "../components/adminSide/UserProfile";
import UpdateProfile from "../components/adminSide/UpdateProfile";
import PrivateRoutes from "./PrivateRoutes";
import AdminProfile from "../pages/adminSide/adminRelatedPages/adminProfile/AdminProfile";
import Dashboard from "../pages/adminSide/dashboard/Dashboard";
import ManageProducts from "../pages/adminSide/productRelatedPages/manageProducts/ManageProducts";
import Shope from "../pages/clientSide/shope/Shope";


const router = createBrowserRouter([

  // client side routes 
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch("product.json"),
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("product.json"),
      },
      {

        path: "/category",
        element: <CategoryPage></CategoryPage>,
        loader: () => fetch("category.json"),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/shope-product/:category",
        element: <Shope></Shope>
      }

    ],
  },


  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },

  // Dashboard related routes 

  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/dashboard/update-user",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "admin-profile",
        element: <AdminProfile></AdminProfile>
      },
      {
        path: "manage-products",
        element: <ManageProducts></ManageProducts>
      },
      
    ]
  }

]);

export default router;
