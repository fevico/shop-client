import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* SIDEBAR */}
     <Sidebar/>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        
        {/* HEADER */}
        <header className="flex items-center justify-between p-4 border-b bg-white">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-3 py-2 text-sm"
            />

            <div className="w-8 h-8 bg-gray-200 rounded-full" />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;