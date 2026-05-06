import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Overview", path: "/admin" },
  { name: "Products", path: "/admin/products" },
  { name: "Orders", path: "/admin/orders" },
  { name: "Customers", path: "/admin/customers" },
];

const Sidebar = () => {
  return (
         <aside className="w-64 bg-white border-r p-4">     
        <h2 className="text-lg font-bold mb-6">ShopHub</h2>

        <nav className="space-y-2">
            {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({isActive}) => `block px-3 py-2 rounded-lg ${isActive ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  {item.name}
                </NavLink>
            ))}
        </nav>
      </aside>
  )
}

export default Sidebar