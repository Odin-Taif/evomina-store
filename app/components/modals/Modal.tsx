// Ensuring that this module is executed on the client-side.
"use client";

// Importing necessary hooks and components from React and other libraries
import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../reusableComponents/Button";
import { IconType } from "react-icons";

// Defining the prop types for the Modal component
type Props = {
  isOpen?: boolean;
  hasButton?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  icon?: IconType;
  loading?: boolean;
};

// Functional component for Modal
function Modal({
  isOpen,
  onClose,
  onSubmit,
  hasButton,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
  loading,
}: Props) {
  // State to handle visibility of modal
  const [showModal, setShowModal] = useState(isOpen);

  // UseEffect hook to manage side effects
  useEffect(() => {
    // Setting showModal state based on isOpen prop
    setShowModal(isOpen);

    // Function to close modal on escape key press
    const close = (e: any) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    // Adding event listener for keydown
    window.addEventListener("keydown", close);

    // Managing overflow and padding styles on body and nav element based on modal state
    if (document && isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
      document.getElementsByTagName("nav")[0].style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      document.getElementsByTagName("nav")[0].style.paddingRight = "0px";
    }

    // Cleanup function to reset styles and remove event listener
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      window.removeEventListener("keydown", close);
    };
  }, [isOpen]);

  // Function to handle modal close
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  // Function to handle modal submit
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  // Function to handle secondary action
  const handleSecondAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  // Returning null if modal is not open
  if (!isOpen) {
    return null;
  }

  // Returning JSX for the modal
  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 overflow-hidden">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-2 mx-auto h-full lg:h-auto md:h-auto ">
          <div
            className={`translate duration-300 h-full md:h-screen ${
              showModal ? "translate-y-0 overflow-auto" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="h-auto before:lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center p-3 rounded-t justify-center relative border-b-[1px]">
                <button
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <span className="text-sm font-semibold">{title}</span>
              </div>
              <div className="relative p-6 flex-auto">{body}</div>
              <div className="flex flex-col p-6">
                <div className="flex flex-row items-center w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      widthFull
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondAction}
                    />
                  )}
                  {hasButton && (
                    <Button
                      widthFull
                      disabled={disabled}
                      label={actionLabel}
                      onClick={handleSubmit}
                      loading={loading}
                    />
                  )}
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Exporting the Modal component
export default Modal;
