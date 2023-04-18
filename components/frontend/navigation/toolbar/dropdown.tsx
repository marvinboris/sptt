import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { Fragment, ReactNode } from "react";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

interface Action {
  name: string;
  href: string;
  icon?: IconType;
  photo?: string;
}

interface Item extends Action {
  description?: string;
}

interface ListItem {
  id: string | number;
  href: string;
  name: string;
}

interface List {
  title: string;
  items: ListItem[];
  view?: {
    href: string;
    name: string;
  };
}

interface DropdownProps {
  title: ReactNode;
  items: Item[];
  actions?: Action[];
  list?: List;
}

const renderItem = (item: Item, close: () => void) => (
  <Link
    key={item.name}
    href={item.href}
    onClick={close}
    className="-m-3 flex items-start rounded-lg p-3 hover:bg-secondary-50 dark:hover:bg-secondary-900"
  >
    {item.icon && (
      <item.icon
        className="h-6 w-6 flex-shrink-0 text-primary-600"
        aria-hidden="true"
      />
    )}
    {item.photo && (
      <div className="h-6 w-6 flex-shrink-0">
        <Image
          width={1920}
          height={1920}
          src={item.photo}
          alt={item.name}
          className="image-cover rounded"
        />
      </div>
    )}
    <div className="ml-4">
      <p className="text-base font-medium text-secondary-900 dark:text-white">
        {item.name}
      </p>
      {item.description && (
        <p className="mt-1 text-sm text-secondary-500 dark:text-secondary-400">
          {item.description}
        </p>
      )}
    </div>
  </Link>
);

const renderAction = (item: Action) => (
  <div key={item.name} className="flow-root">
    <Link
      href={item.href}
      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-secondary-900 hover:bg-secondary-100 dark:text-secondary-50 dark:hover:bg-secondary-900"
    >
      {item.icon && (
        <item.icon
          className="h-6 w-6 flex-shrink-0 text-secondary-400 dark:text-secondary-600"
          aria-hidden="true"
        />
      )}
      <span className="ml-3">{item.name}</span>
    </Link>
  </div>
);

const renderListItem = (item: ListItem) => (
  <li key={item.id} className="truncate text-base">
    <Link
      href={item.href}
      className="font-medium text-secondary-900 hover:text-secondary-700"
    >
      {item.name}
    </Link>
  </li>
);

export default function Dropdown({
  title,
  items,
  actions,
  list,
}: DropdownProps) {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button
            className={classNames(
              open
                ? "text-primary-600 dark:text-primary-600"
                : "text-secondary-700 dark:text-secondary-200",
              "group inline-flex items-center text-sm font-semibold leading-6 transition-all duration-200 focus:outline-none hover:text-primary-600 dark:hover:text-primary-600"
            )}
          >
            <span>{title}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "ml-2 h-5 w-5 transition-all duration-200"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute top-full left-0 z-10 w-full">
              <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="bg-white px-5 py-6 dark:bg-secondary-800">
                  <div className="container grid grid-cols-1 gap-6 md:gap-8 md:p-8 lg:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => renderItem(item, close))}
                  </div>
                </div>
                {actions && (
                  <div className="bg-secondary-50 px-5 py-5 dark:bg-secondary-900">
                    <div className="container space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      {actions.map(renderAction)}
                    </div>
                  </div>
                )}
                {list && (
                  <div className="bg-secondary-50 px-5 py-5 dark:bg-secondary-900 sm:px-8 sm:py-8">
                    <div className="container">
                      <div>
                        <h3 className="text-base font-medium text-secondary-500">
                          {list.title}
                        </h3>
                        <ul role="list" className="mt-4 space-y-4">
                          {list.items.map(renderListItem)}
                        </ul>
                      </div>
                      {list.view && (
                        <div className="mt-5 text-sm">
                          <a
                            href={list.view.href}
                            className="font-medium text-primary-600 hover:text-primary-500"
                          >
                            {list.view.name}
                            <span aria-hidden="true"> &rarr;</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
