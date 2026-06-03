import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  Package,
  Settings,
  User,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Overview", path: "/dashboard", icon: User },
  { name: "Orders", path: "/orders", icon: Package },
  { name: "Settings", path: "/settings", icon: Settings },
];

const UserSidebar = () => {
  const name = "John Doe";
  const email = "johndoe@gmail.com";

  return (
    <aside className="w-72 border-r bg-white p-6">

      {/* LOGO */}
      {/* <h2 className="text-2xl font-bold mb-8">
        ShopHub
      </h2> */} 

      {/* USER INFO */}
      <div className="flex flex-col items-center text-center mb-8">

        <Avatar className="h-24 w-24">
          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl font-bold">
            {name?.charAt(0)?.toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <h3 className="mt-4 font-semibold text-lg">
          {name}
        </h3>

        <p className="text-sm text-gray-500">
          {email}
        </p>
      </div>

      {/* NAVIGATION */}
      <nav className="space-y-2">

        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-colors
              ${
                isActive
                  ? "bg-purple-100 text-purple-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <item.icon className="w-5 h-5" />

            <span className="font-medium">
              {item.name}
            </span>
          </NavLink>
        ))}

      </nav>

      {/* LOGOUT */}
      <button className="mt-8 flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl w-full transition-colors">
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Logout</span>
      </button>

    </aside>
  );
};

export default UserSidebar;