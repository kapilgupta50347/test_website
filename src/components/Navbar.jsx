import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Menu,
  X,
  Printer,
  Upload,
  Users,
  Package,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();

  // ✅ Added My Account link
  const navItems = [
    { name: "Home", path: "/", icon: Printer },
    { name: "Products", path: "/products", icon: Package },
    { name: "Custom Design", path: "/CustomDesign", icon: Upload },
    { name: "My Account", path: "/MyAccount", icon: User },
  ];

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--navy)]/90 border-b border-[var(--cheese)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-[var(--cheese)] rounded-lg flex items-center justify-center"
            >
              <Printer className="w-5 h-5 text-[var(--navy)]" />
            </motion.div>
            <span className="text-xl font-extrabold text-[var(--cheese)]">
              Shapix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--cheese)] text-[var(--navy)]"
                      : "text-[var(--beige)] hover:bg-[var(--cheese)] hover:text-[var(--navy)]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-[var(--cheese)] hover:text-[var(--navy)] hover:bg-[var(--cheese)]"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[var(--cheese)] hover:bg-[var(--cheese)] hover:text-[var(--navy)]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-[var(--cheese)]/30 bg-[var(--navy)]"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--cheese)] text-[var(--navy)]"
                      : "text-[var(--beige)] hover:bg-[var(--cheese)] hover:text-[var(--navy)]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
