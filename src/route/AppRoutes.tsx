import Layout from "@/components/layout/Layout";
import Home from "@/pages/public/Home";
import Login from "@/pages/public/Login";
import Shop from "@/pages/public/Shop";
import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Public pages
// import Home       from "@/pages/public/Home";
// import Shop       from "@/pages/public/Shop";
// import Cart       from "@/pages/public/Cart";
// import Login      from "@/pages/public/Login";
// import Register   from "@/pages/public/Register";
// import NotFound   from "@/pages/public/NotFound";

// User pages
// import UserDashboard from "@/pages/user/UserDashboard";
// import Orders        from "@/pages/user/Orders";
// import Profile       from "@/pages/user/Profile";

// Admin pages
// import AdminDashboard  from "@/pages/admin/AdminDashboard";
// import ManageProducts  from "@/pages/admin/ManageProducts";
// import ManageOrders    from "@/pages/admin/ManageOrders";
// import ManageUsers     from "@/pages/admin/ManageUsers";

export default function AppRoutes() {
  return ( 
    <Routes>
      {/* All routes share the same Header via Layout */}
        <Route path="login" element={<Login />} />
      <Route element={<Layout />}> 

        {/* Public — anyone can visit */}
        <Route index        element={<Home />} />
        <Route path="shop"  element={<Shop />} />
        {/* <Route path="cart"  element={<Cart />} /> */}
        {/* <Route path="register" element={<Register />} /> */}

        {/* User — must be logged in */}
        {/* <Route element={<ProtectedRoute roles={["user", "admin"]} />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="orders"    element={<Orders />} />
          <Route path="profile"   element={<Profile />} />
        </Route> */}

        {/* Admin — must have admin role */}
        {/* <Route element={<ProtectedRoute roles={["admin"]} />}>
          <Route path="admin"                element={<AdminDashboard />} />
          <Route path="admin/products"       element={<ManageProducts />} />
          <Route path="admin/orders"         element={<ManageOrders />} />
          <Route path="admin/users"          element={<ManageUsers />} />
        </Route> */}

        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}