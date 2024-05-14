import { create } from "zustand";

export const useStore = create((set, get) => ({
  activityList: [],
  addActivityList: (activityData) =>
    set((state) => ({ activityList: [activityData, ...state.activityList] })),
  removeItem: (id) => {
    const newActivityList = get().activityList.filter((i) => i.id !== id);
    set({ activityList: newActivityList });
  },
}));
