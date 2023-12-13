"use client";

import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

type Props = {};

// Functional component for displaying toast notifications
function ToastContainerBar({}: Props) {
  return (
    <>
      {/* Toast notifications container */}
      <ToastContainer
        position="bottom-left" // Position of the toast notifications on the screen
        autoClose={5000} // Time (in milliseconds) after which the toast will automatically close
        hideProgressBar={false} // Whether to hide the progress bar indicating time left before close
        newestOnTop={false} // Whether new toasts should appear at the top of the stack
        closeOnClick // Whether the toast should close when clicked
        pauseOnFocusLoss // Whether the toast should pause when the window loses focus
        pauseOnHover // Whether the toast should pause when hovered over
        theme="colored" // The visual theme of the toasts
      />
    </>
  );
}

export default ToastContainerBar;

