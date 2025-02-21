import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../Layout/App";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import ServerError from "../errors/serverError";
import NotFoundError from "../errors/NotFoundError";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/catalog/:id", element: <ProductDetails /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/basket", element: <BasketPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/server-error", element: <ServerError /> },
      { path: "/not-found", element: <NotFoundError /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
