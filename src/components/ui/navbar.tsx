"use client";
import { useState } from "react";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import i18next from "../../i18n";
import Image from "next/image";

const navigation = [
  { name: i18next.t("about"), href: "/aboutus" },
  { name: i18next.t("grants"), href: "/granty" },
  { name: i18next.t("analytics"), href: "/analytics" },
  { name: i18next.t("contests"), href: "/konkursy" },
  { name: i18next.t("faq"), href: "/faq" },
  { name: i18next.t("contacts"), href: "/contacts" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ user }: { user: any }) {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState(i18next.language);

  const handleChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <Disclosure as="nav" className="bg-current shadow-sm">
      {({ open }) => (
        <>



        {/* I18N */}
          <div className="flex gap-8">
            <button
              className="text-black"
              onClick={() => handleChangeLanguage("en")}
              disabled={currentLang === "en"}
            >
              English
            </button>
            <button
              className="text-black"
              onClick={() => handleChangeLanguage("ru")}
              disabled={currentLang === "ru"}
            >
              Русский
            </button>
          </div>


          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="text-gray-100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="100%"
                        height="100%"
                        rx="16"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? "border-slate-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      )}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              {/* <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={user?.image || 'https://avatar.vercel.sh/leerob'}
                        height={32}
                        width={32}
                        alt={`${user?.name || 'placeholder'} avatar`}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                  </Transition>
                </Menu>
              </div> */}
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "bg-slate-50 border-slate-500 text-slate-700"
                      : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {i18next.t(item.name)}
                </Disclosure.Button>  
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
