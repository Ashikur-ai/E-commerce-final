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


const router = createBrowserRouter([
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

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/dashboard/update-user",
        element: <UpdateProfile></UpdateProfile>
      }
    ]
  }

]);

export default router;
