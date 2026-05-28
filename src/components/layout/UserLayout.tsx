import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="flex items-center justify-between border-b bg-white px-6 py-4">

        <div className="flex gap-2">
          <h1 className="text-xl font-bold">ShopHub</h1> / 
          <h3 className="text-xl">
            My Account
          </h3>
        </div>

        <div className="flex items-center gap-4">

          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg border px-3 py-2 text-sm outline-none"
          />

          <div className="h-10 w-10 rounded-full bg-gray-200" />

        </div>
      </header>

      {/* BODY */}
      <div className="mx-auto flex max-w-7xl gap-6 p-6">

        {/* SIDEBAR */}
        <aside className="w-[280px] shrink-0">
          <UserSidebar />
        </aside>
     
        {/* MAIN CONTENT */}
        <main className="flex-1">
          <Outlet />
        </main>
          
      </div>
    </div>     
  );
};

export default UserLayout;