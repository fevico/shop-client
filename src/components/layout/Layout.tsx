import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <div className="mt-10">
      <Footer/>
      </div>
    </div>
  );
}