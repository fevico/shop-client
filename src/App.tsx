import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./route/AppRoutes";
// import { CartProvider } from "@/context/CartContext";
// import { AuthProvider } from "@/context/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        {/* <CartProvider> */}
          <AppRoutes />
        {/* </CartProvider> */}
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}