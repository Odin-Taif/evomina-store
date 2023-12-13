"use client"; // This line indicates that this component is meant to be run on the client side.

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Button from "../reusableComponents/Button";
import Input from "../inputs/Input";
import Modal from "./Modal";

import Heading from "../reusableComponents/Heading";

import { signIn } from "next-auth/react";
import useRegisterModal from "@/app/hook/useRegisterModal";
import useLoginModel from "@/app/hook/useLoginModal";
import useForgetPasswordModel from "@/app/hook/useForgetPasswordModel";
import { isValidEmail, isValidPassword } from "@/utils/AuthValidation";
type Props = {};
// Defining the types for the props of the component.

function LoginModal({}: Props) {
  // Main LoginModal functional component.
  const router = useRouter();
  // Using the useRouter hook to get access to the Next.js router.
  const registerModel = useRegisterModal();
  // Using the custom hook to manage the register modal's state.
  const loginModel = useLoginModel();
  // Using the custom hook to manage the login modal's state.
  const forgetPassword = useForgetPasswordModel();
  // Using the custom hook to manage the forget password modal's state.
  const [isLoading, setIsLoading] = useState(false);
  // State to manage loading state of the form.

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // Using useForm from react-hook-form to manage form state and validation.

  // Email validation function.
  const handleEmailValidation = (email: string) => {
    const isValid = isValidEmail(email);
    return isValid;
  };

  // Password validation function.
  const handlePasswordValidation = (password: string) => {
    const isValid = isValidPassword(password);
    return isValid;
  };

  // Function to handle form submission.
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    // Setting the loading state to true.
    signIn("credentials", {
      // Using the signIn function from NextAuth to handle login.
      email: data?.email,
      password: data?.password,
      redirect: false,
    }).then((response) => {
      // Handling the response from the signIn function.
      if (response?.error) {
        // If there is an error, showing a toast notification.
        toast.error("Wrong credentials, please try again!");
        router.refresh();
        setIsLoading(false);
        // Setting the loading state to false.
      } else {
        // If login is successful, showing a toast notification.
        toast.success("Login Successfully");
        loginModel.onClose();
        // Closing the login modal.
        router.refresh();
        setIsLoading(false);
        // Setting the loading state to false.
      }
    });
  };

  // Function to toggle between SignUp and SignIn modals.
  const toggleSignUpSignIn = useCallback(() => {
    loginModel.onClose();
    registerModel.onOpen();
  }, [loginModel, registerModel]);

  // Function to toggle between SignIn and ForgetPassword modals.
  const toggleSignInForgotPassword = useCallback(() => {
    loginModel.onClose();
    forgetPassword.onOpen();
  }, [loginModel, forgetPassword]);

  // Content for the body of the modal.
  const bodyContent = (
    <div className="flex flex-col gap-4">
      {/* Heading component for the title and subtitle */}
      <Heading
        title={"Welcome to Evomina!"}
        subtitle="Login to your Account!"
        center
      />
      {/* Input component for email */}
      <Input
        id="email"
        label="Email Address"
        disabled={isLoading}
        register={register}
        errors={errors}
        validate={handleEmailValidation}
        required
      />
      {/* Error handling for email input */}
      {errors.email?.message && (
        <small className="text-rose-500 px-3 ">
          {errors.email.message.toString()}
        </small>
      )}
      {/* Input component for password */}
      <div className="flex flex-col">
        <Input
          id="password"
          label="Password"
          disabled={isLoading}
          register={register}
          errors={errors}
          validate={handlePasswordValidation}
          type="password"
          required
        />
        {/* Error handling for password input */}
        {errors.password?.message && (
          <small className="text-rose-500 px-3">
            {errors.password.message.toString()}
          </small>
        )}
        {/* Link to toggle to the Forget Password modal
        <span
          onClick={toggleSignInForgotPassword}
          className="text-neutral-800 hover:underline cursor-pointer self-end"
        >
          Forget password?
        </span> */}
      </div>
    </div>
  );

  // Content for the footer of the modal.
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      {/* Button for Google login */}
      <Button
        outline
        widthFull
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      {/* Text and link to toggle to the SignUp modal */}
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div>
          {`Didn't have an Account? `}
          <span
            onClick={toggleSignUpSignIn}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Create an Account
          </span>
        </div>
      </div>
    </div>
  );

  // Rendering the Modal component with the necessary props and content.
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModel.isOpen}
      title=""
      actionLabel="Continue"
      onClose={loginModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
      hasButton
      loading={isLoading}
    />
  );
}

// Exporting the LoginModal component.
export default LoginModal;
