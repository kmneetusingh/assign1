import { create } from "zustand";

const useFavoritesStore = create((set) => ({
  favorites: [],
  addFavorite: (id) => set((state) => {
    if (!state.favorites.includes(id)) {
      const updated = [...state.favorites, id];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    }
    return state;
  }),
  removeFavorite: (id) => set((state) => {
    const updated = state.favorites.filter((fid) => fid !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
    return { favorites: updated };
  }),
  loadFavorites: () => set(() => {
    const saved = localStorage.getItem("favorites");
    return { favorites: saved ? JSON.parse(saved) : [] };
  })
}));

export default useFavoritesStore; 