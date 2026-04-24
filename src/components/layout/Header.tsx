import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Store,
  ShoppingCart,
  User,
  Menu,
  X,
  Home,
  ShoppingBag,
  ClipboardList,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
// import { useCart } from "@/hooks/useCart";
// import { useAuth } from "@/hooks/useAuth";

// ─── Nav links config — edit here to add/remove links ───────────
const NAV_LINKS = [
  { label: "Home",   to: "/",       icon: Home },
  { label: "Shop",   to: "/shop",   icon: ShoppingBag },
  { label: "Orders", to: "/orders", icon: ClipboardList },
];

// ─── Header ─────────────────────────────────────────────────────
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
//   const { cartCount } = useCart();
//   const { user, logout } = useAuth(); // user is null when logged out

const user = {
    name: "James",
    email: "james@gmail.com",
    role: "admin"
}
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center gap-8 px-6">

        {/* ── Logo ── */}
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
            <Store size={18} className="text-gray-800" />
          </span>
          <span className="text-[17px] font-bold tracking-tight text-gray-900">
            ShopHub
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden flex-1 items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ── Right actions ── */}
        <div className="ml-auto flex items-center gap-2">

          {/* Cart */}
          <Button
            variant="outline"
            size="icon"
            className="relative h-10 w-10 rounded-lg border-gray-200"
            onClick={() => navigate("/cart")}
            // aria-label={`Cart, ${cartCount} items`}
          >
            <ShoppingCart size={18} />
            {/* {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-2 border-white bg-gray-900 px-1 text-[10px] font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )} */}
          </Button>

          {/* ── User icon ── */}
          {user ? (
            // Logged in: dropdown with profile/logout
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-lg border-gray-200"
                  aria-label="User menu"
                >
                  <User size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  My Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/orders")}>
                  My Orders
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  Profile
                </DropdownMenuItem>
                {user.role === "admin" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/admin")}>
                      Admin Panel
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                //   onClick={logout}
                  className="text-red-600 focus:text-red-600"
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            // Logged out: plain icon → goes to login
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-lg border-gray-200"
              onClick={() => navigate("/login")}
              aria-label="Login"
            >
              <User size={18} />
            </Button>
          )}

          {/* Mobile hamburger */}
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-lg border-gray-200 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {/* ── Mobile nav ── */}
      {menuOpen && (
        <nav className="border-t border-gray-100 px-6 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 border-b border-gray-100 py-3 text-sm font-medium last:border-none ${
                  isActive ? "text-gray-900" : "text-gray-500"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
          {!user && (
            <div className="flex gap-2 pt-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => { navigate("/login"); setMenuOpen(false); }}
              >
                Log in
              </Button>
              <Button
                className="flex-1 bg-gray-900 hover:bg-gray-800"
                onClick={() => { navigate("/register"); setMenuOpen(false); }}
              >
                Sign up
              </Button>
            </div>
          )}
        </nav>
      )}
    </header>
  );
}