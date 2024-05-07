import {create} from 'zustand';

interface IStore {
  openCalculatePrice: boolean;

  setOpenCalculatePrice: (param: boolean) => void;
}

export const useStore = create<IStore>()((set) => ({
  openCalculatePrice: false,
  setOpenCalculatePrice: (value) => set(() => ({openCalculatePrice: value}))
}));
