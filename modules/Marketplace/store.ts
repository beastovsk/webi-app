import {IService} from './types';
import {create} from 'zustand';

interface IStore {
  openConfirmCode: boolean;
  openResetPassword: boolean;

  setOpenConfirmCode: (param: boolean) => void;
  setOpenResetPassword: (param: boolean) => void;
}

export const useStore = create<IStore>()((set) => ({
  openConfirmCode: false,
  setOpenConfirmCode: (value) => set(() => ({openConfirmCode: value})),

  openResetPassword: false,
  setOpenResetPassword: (value) => set(() => ({openResetPassword: value}))
}));
