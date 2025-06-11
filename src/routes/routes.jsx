import { createBrowserRouter } from "react-router-dom";
// import Layout from "../components/Layout";
// import Home from "../components/Home";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import Dashboard from "../components/Dashboard";
// import NotFound from "../components/NotFound";
// import CustomNotFound from "../components/CustomNotFound";
// import Candidates from "../components/Candidates";
// import User from "../components/User";
// import Products from "../components/Products";
// import ProductDetail from "../components/ProductDetail";

//Lazy loading
import { lazy } from "react";
import Layout from "../components/Layout"; // Usually Layout is kept eager to avoid blank screen
//Lazy load all other page components
const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));
const Dashboard = lazy(() => import("../components/Dashboard"));
const NotFound = lazy(() => import("../components/NotFound"));
const CustomNotFound = lazy(() => import("../components/CustomNotFound"));
const Candidates = lazy(() => import("../components/Candidates"));
const User = lazy(() => import("../components/User"));
const Products = lazy(() => import("../components/Products"));
const ProductDetail = lazy(() => import("../components/ProductDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
      { path: "products", element: <Products /> }, // ✅ list
      { path: "products/:id", element: <ProductDetail /> }, // ✅ details
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "candidates",
        element: <Candidates />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "dashboard/*",
    element: <CustomNotFound />,
  },
]);

export default router;
