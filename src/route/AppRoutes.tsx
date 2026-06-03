import VerifiyToken from "@/components/auth/VerifiyToken";
import AddProduct from "@/components/dashboard/product/AddProduct";
import AdminLayout from "@/components/layout/AdminLayout";
import Layout from "@/components/layout/Layout";
import ProductDetails from "@/components/product/ProductDetails";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import Order from "@/pages/admin/Order";
import Products from "@/pages/admin/Products";
import Cart from "@/pages/public/Cart";
import Checkout from "@/pages/public/Checkout";
import Home from "@/pages/public/Home";
import Login from "@/pages/public/Login";
import Register from "@/pages/public/Register";
import Shop from "@/pages/public/Shop";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRuoute";
import PaymentSuccessful from "@/components/checkout/PaymentSuccessful";
import UserDashboard from "@/pages/user/UserDashboard";
import UserLayout from "@/components/layout/UserLayout";
import Settings from "@/pages/user/Settings";
import Orders from "@/pages/user/Orders";
import EditProduct from "@/components/dashboard/product/EditProduct";

export default function AppRoutes() {
  return ( 
    <Routes>
      {/* All routes share the same Header via Layout */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify-token" element={<VerifiyToken />} />
      <Route element={<Layout />}> 

        {/* Public — anyone can visit */}
        <Route index        element={<Home />} />
        <Route path="shop"  element={<Shop />} />
        <Route path="products/:id"  element={<ProductDetails />} />
        <Route path="cart"  element={<Cart />} />
        <Route element={<ProtectedRoute roles={["user", "admin"]} />}>
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment-successful" element={<PaymentSuccessful />} />
        </Route>      

        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>

          {/* User — must be logged in */}
        <Route element={<ProtectedRoute roles={["user", "admin"]} />}>
          <Route element={<UserLayout/>}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="orders"    element={<Orders />} />
          <Route path="settings"    element={<Settings />} />
          {/* <Route path="profile"   element={<Profile />} /> */}
          </Route>
        </Route>

      {/* admin route */}
      <Route element={<ProtectedRoute roles={["admin"]} />}>
      <Route element={<AdminLayout />} >
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/products" element={<Products />} />
        <Route path="admin/add-product" element={<AddProduct />} />
        <Route path="admin/orders" element={<Order />} />
        <Route path="admin/edit-product/:productId" element={<EditProduct />}/> 
      </Route>
      </Route>
    </Routes>
  );
}