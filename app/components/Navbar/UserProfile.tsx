// Importing necessary libraries and components from React, Next.js, and other libraries.
"use client";
import React from "react";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { useSession, signOut, signIn } from "next-auth/react";
import { BiLogIn } from "react-icons/bi";
import { UserIcon } from "@heroicons/react/24/outline";
import { IconType } from "react-icons";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import useLoginModel from "@/app/hook/useLoginModal";
import useRegisterModal from "@/app/hook/useRegisterModal";

// Defining the type for the menu items
interface MenuItem {
  label?: string;
  Icon?: IconType;
  href?: string;
  onClick?: () => void;
}

// UserProfile component definition
const UserProfile = () => {
  // Hook to access the Next.js router
  const router = useRouter();
  // Hook to get the session data and status
  const { data: session, status } = useSession();
  // Extracting the user object from the session
  const user = session?.user;
  // Boolean to check if the user data is still loading
  const isLoadingUser = status === "loading";
  // Custom hooks to handle opening and closing of login and register modals
  const loginModel = useLoginModel();
  const registerModel = useRegisterModal();
  // Function to handle the sign-out process
  const handelSignOut = () => {
    signOut()
      .then(() => {
        // Showing a success toast message
        toast.success("you are logged out now!");
        // Refreshing the page to reflect the logout
        router.push("/");
        // router.refresh();
      })
      .catch((err: any) => console.log(err)); // Logging any potential errors
  };

  // Array of menu items for the user dropdown
  const menuItemsLoggedin = [
    {
      label: "Logout",
      Icon: BiLogIn,
      onClick: handelSignOut, // Assigning the logout function to the logout button
      href: "",
    },
  ];
  const menuItemsLoggedOut = [
    {
      label: "SignIn",
      Icon: BiLogIn,
      onClick: loginModel.onOpen, // Assigning the logout function to the logout button
      href: "",
    },
  ];
  return (
    // The dropdown menu component from headless UI
    <Menu as="div" className="relative z-10">
      <Menu.Button className="flex items-center space-x-px group">
        <div className="shrink-0 flex items-center justify-center rounded-full overflow-hidden relative bg-gray-200 w-9 h-9">
          {/* Displaying user's profile picture if available, otherwise a default icon */}
          {user?.image ? (
            <Image
              src={user?.image}
              alt={user?.name || "Avatar"}
              width={100}
              height={100}
            />
          ) : (
            <UserIcon className="text-gray-400 w-6 h-6" />
          )}
        </div>
      </Menu.Button>
      {/* Transition for animating the dropdown menu */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {session && session.user ? (
          <Menu.Items className="absolute right-0 w-72 overflow-hidden mt-1 divide-y divide-gray-100 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex items-center space-x-2 py-4 px-4 mb-2">
              <div className="shrink-0 flex items-center justify-center rounded-full overflow-hidden relative bg-gray-200 w-9 h-9">
                {/* Displaying user's profile picture or a default icon inside the dropdown */}
                {user?.image ? (
                  <Image
                    src={user?.image}
                    alt={user?.name || "Avatar"}
                    className="rounded-full"
                    height="30"
                    width="30"
                  />
                ) : (
                  <UserIcon className="text-gray-400 w-6 h-6" />
                )}
              </div>
              {/* Displaying user's name and email */}
              <div className="flex flex-col truncate">
                <span>{user?.name}</span>
                <span className="text-sm text-gray-500">{user?.email}</span>
              </div>
            </div>
            <div className="py-2">
              {/* Mapping through the menu items and rendering them */}
              {menuItemsLoggedin.map(({ label, href, onClick, Icon: Icon }) => (
                <div
                  key={label}
                  className="px-2 last:border-t last:pt-2 last:mt-2"
                >
                  <Menu.Item>
                    {/* Conditional rendering based on whether a href (link) is provided */}
                    {href ? (
                      <Link href={href}>
                        <Icon className="w-5 h-5 shrink-0 text-gray-500" />
                        <span>{label}</span>
                      </Link>
                    ) : (
                      <button
                        className="w-full flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-gray-100"
                        onClick={onClick}
                      >
                        <Icon className="w-5 h-5 shrink-0 text-gray-500" />
                        <span>{label}</span>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              ))}
            </div>
          </Menu.Items>
        ) : (
          <Menu.Items className="absolute right-0 w-72 overflow-hidden mt-1 divide-y divide-gray-100 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-2">
              {/* Mapping through the menu items and rendering them */}
              {menuItemsLoggedOut.map(
                ({ label, href, onClick, Icon: Icon }) => (
                  <div
                    key={label}
                    className="px-2 last:border-t last:pt-2 last:mt-2"
                  >
                    <Menu.Item>
                      {/* Conditional rendering based on whether a href (link) is provided */}
                      {href ? (
                        <Link href={href}>
                          <Icon className="w-5 h-5 shrink-0 text-gray-500" />
                          <span>{label}</span>
                        </Link>
                      ) : (
                        <button
                          className="w-full flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-gray-100"
                          onClick={onClick}
                        >
                          <Icon className="w-5 h-5 shrink-0 text-gray-500" />
                          <span>{label}</span>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                )
              )}
            </div>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  );
};

export default UserProfile;
