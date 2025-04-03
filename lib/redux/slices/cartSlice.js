import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Helper function to safely access localStorage
const getLocalStorageItem = (key, defaultValue) => {
  if (typeof window === "undefined") return defaultValue; // ✅ Prevent SSR crash

  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
};

const initialState = {
  cart: [],
  total: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: (state) => {
      if (typeof window !== "undefined") {
        state.cart = getLocalStorageItem("cart", []);
        state.total = getLocalStorageItem("total", 0);
        state.totalItems = getLocalStorageItem("totalItems", 0);
      }
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex((item) => item.id === product.id);

      if (index >= 0) {
        toast.error("Product already in cart");
        return;
      }

      state.cart.push(product);
      state.totalItems++;
      state.total += product.price;

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("total", JSON.stringify(state.total));
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
      }

      toast.success("Product added to cart");
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const index = state.cart.findIndex((item) => item.id === productId);

      if (index >= 0) {
        state.totalItems--;
        state.total = Math.max(0, state.total - state.cart[index].price);
        state.cart.splice(index, 1);

        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(state.cart));
          localStorage.setItem("total", JSON.stringify(state.total));
          localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
        }

        toast.success("Product removed from cart");
      }
    },
    resetCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.totalItems = 0;

      if (typeof window !== "undefined") {
        localStorage.removeItem("cart");
        localStorage.removeItem("total");
        localStorage.removeItem("totalItems");
      }

      toast.info("Cart has been reset");
    },
  },
});

export const { initializeCart, addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
