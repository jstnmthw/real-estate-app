'use client';

import React, { FC, ReactNode, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const MobileMenu: FC<{
  isOpen: boolean;
  handleClose: () => void;
  body: ReactNode | string;
}> = ({ isOpen = true, handleClose, body }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog onClose={() => handleClose()} className="absolute inset-0">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="absolute top-4 left-4 right-4 mx-auto rounded-lg">
            {body}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MobileMenu;
