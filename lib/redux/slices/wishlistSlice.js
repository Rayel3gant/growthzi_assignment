import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Helper function to safely get localStorage data
const getLocalStorageItem = (key, defaultValue) => {
  if (typeof window === "undefined") return defaultValue; // ✅ Prevents SSR crash

  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
};

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    initializeWishlist: (state) => {
      if (typeof window !== "undefined") {
        state.wishlist = getLocalStorageItem("wishlist", []);
      }
    },
    addToWishlist: (state, action) => {
      const product = action.payload;
      const exists = state.wishlist.some((item) => item.id === product.id);

      if (exists) {
        toast.error("Product already in wishlist");
        return;
      }

      state.wishlist.push(product);

      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }

      toast.success("Product added to wishlist");
    },
    removeFromWishlist: (state, action) => {
      const productId = action.payload;
      state.wishlist = state.wishlist.filter((item) => item.id !== productId);

      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }

      toast.success("Product removed from wishlist");
    },
    resetWishlist: (state) => {
      state.wishlist = [];

      if (typeof window !== "undefined") {
        localStorage.removeItem("wishlist");
      }

      toast.info("Wishlist has been cleared");
    },
  },
});

export const { initializeWishlist, addToWishlist, removeFromWishlist, resetWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
