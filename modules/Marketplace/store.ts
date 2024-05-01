import {IProduct} from './types';
import {create} from 'zustand';

interface IStore {
  productsList: IProduct[];
  basketList: IProduct[];
  available: boolean;
  openConfirmCode: boolean;

  setProductsList: (arg0: IProduct[]) => void;
  setBasketList: (arg0: IProduct[]) => void;
  setAvailable: (arg0: boolean) => void;
  removeProduct: (arg0: number) => void;
  setOpenConfirmCode: (param: boolean) => void;
}

export const useStore = create<IStore>()((set) => ({
  productsList: [],
  setProductsList: (value) => set(() => ({productsList: value})),

  //   Flag for getting filtered data, instead of getting all products
  available: false,
  setAvailable: (value) => set(() => ({available: true})),

  basketList: [],
  setBasketList: (value) => set(() => ({basketList: value})),
  removeProduct: (id) =>
    set((store) => {
      const index = store.basketList.findIndex((item) => item.id == id);

      const copy = [...store.basketList.slice(0, index), ...store.basketList.slice(index + 1)];

      return {basketList: copy};
    }),

  openConfirmCode: false,
  setOpenConfirmCode: (value) => set(() => ({openConfirmCode: value}))
}));
