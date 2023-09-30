import { create } from "zustand";

const signIn = create((set) => ({
  user: null,
  signIn: async (email, password) => {
    try {
      const response = await fetch(
        "https://x6kifr6vzd.execute-api.ap-south-1.amazonaws.com/development/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        }
      );

      if (response.ok) {
        const userData = await response.json();
        set({ user: userData });
      } else {
        set({ user: null });
      }
    } catch (error) {
      console.error("Error signing in:", error);
      set({ user: null });
    }
  },
  signOut: () => {
    set({ user: null });
  }
}));

export default signIn;
