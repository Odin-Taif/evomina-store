"use client";

// Importing necessary hooks and components

import { useCallback, useState } from "react";
import { BiLogIn, BiUserPlus } from "react-icons/bi";
import { useSession } from "next-auth/react";
import useRegisterModal from "@/app/hook/useRegisterModal";
import useLoginModel from "@/app/hook/useLoginModal";
import Button from "../../reusableComponents/Button";
import { UserProfile } from "./UserProfile";

// Defining the type for props, even though it's empty in this case
type Props = {};
// Main functional component for UserMenu
function UserMenu({}: Props) {
  // Hook to access session data and user's authentication status
  const { data: session, status } = useSession();
  // Shortcut to access the current user's information
  const currentUser = session?.user;
  // Custom hooks to handle opening and closing of login and register modals
  const loginModel = useLoginModel();
  const registerModel = useRegisterModal();
  // Local state to handle the dropdown's open/close state
  const [isOpen, setIsOpen] = useState(false);
  // Toggle function for the dropdown menu
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  // JSX rendering
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="md:py-1 md:px-2 items-center cursor-pointer  transition">
          <div className="block">
            {currentUser ? (
              // If the user is logged in, show the user profile component
              <UserProfile />
            ) : (
              // If the user is not logged in, show login and signup buttons
              <div className="flex flex-row">
                <Button
                  label="Log in"
                  onClick={loginModel.onOpen}
                  small
                  widthFull={false}
                  icon={BiLogIn}
                />
                <Button
                  label="Sign Up"
                  onClick={registerModel.onOpen}
                  small
                  widthFull={false}
                  icon={BiUserPlus}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
