import {IProduct} from './types';
import {create} from 'zustand';

interface IStore {
  productsList: IProduct[];
  basketList: IProduct[];
  available: boolean;

  setProductsList: (arg0: IProduct[]) => void;
  setBasketList: (arg0: IProduct[]) => void;
  setAvailable: (arg0: boolean) => void;
}

export const useStore = create<IStore>()((set) => ({
  productsList: [],
  setProductsList: (value) => set(() => ({productsList: value})),

  //   Flag for getting filtered data, instead of getting all products
  available: false,
  setAvailable: (value) => set(() => ({available: true})),

  basketList: [],
  setBasketList: (value) => set(() => ({basketList: value}))
}));
