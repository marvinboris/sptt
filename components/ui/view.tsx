import React, { useState, Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ViewProps {
  title: ReactNode;
  action: ReactNode;
  children: ReactNode;
}

export default function View({ title, action, children }: ViewProps) {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div onClick={() => setIsOpen(true)}>{action}</div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center"
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          {/* Full-screen container to center the panel */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="container">
              <Dialog.Panel className="mx-auto w-full max-w-2xl rounded-2xl bg-white px-4 pt-3 pb-5 dark:bg-secondary-800">
                <Dialog.Title className="mb-3 border-b border-secondary-100 pb-3 text-lg font-semibold dark:border-secondary-500">
                  {title}
                </Dialog.Title>

                <div className="space-y-3">{children}</div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
