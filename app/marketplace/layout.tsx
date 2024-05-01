import {ConfirmEmailModal} from '@/modules/Marketplace/components/ConfirmEmail/ConfirmEmail';
import {ResetPasswordModal} from '@/modules/Marketplace/components/ResetPassword/ResetPassword';
import '@/src/styles/global.scss';

import React from 'react';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='h-full'>
      <ResetPasswordModal />
      <ConfirmEmailModal />
      {children}
    </div>
  );
}
