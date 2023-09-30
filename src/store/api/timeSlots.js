import { create } from "zustand";
import axios from "axios";

const getTimeslotsUrl =
  "https://x6kifr6vzd.execute-api.ap-south-1.amazonaws.com/development/interview-slots";

const initialState = {
  interviewSlots: [],
  loading: false,
  error: null
};

export const useApiStore = create((set) => ({
  ...initialState,
  fetchData: async (interviewerId) => {
    set({ loading: true });

    try {
      const response = await axios.get(`${getTimeslotsUrl}?interviewerId=${interviewerId}`);
      set({ interviewSlots: response.data, loading: false, error: null });
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  }
}));
