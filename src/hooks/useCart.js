import { useState, useEffect } from 'react';

export const useCart = () => {
  const STORAGE_KEY = 'shapix-cart';
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);
      if (savedCart) setCartItems(JSON.parse(savedCart));
    } catch (error) {
      console.error('❌ Error loading cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('❌ Error saving cart to localStorage:', error);
    }
  }, [cartItems]);

  // ✅ Add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // ✅ Remove product by id
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // ✅ Update quantity or remove if zero
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, newQuantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ Derived values
  const getCartTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getCartItemCount = () =>
    cartItems.reduce((count, item) => count + item.quantity, 0);

  // ✅ Clear the entire cart
  const clearCart = () => setCartItems([]);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemCount,
    clearCart,
  };
};
