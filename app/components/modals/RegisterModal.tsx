"use client"; // Ensure this component only runs on the client side

import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Heading from "../reusableComponents/Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";

import {
  isValidEmail,
  isValidPassword,
  isValidName,
} from "@/utils/AuthValidation";
import useRegisterModal from "@/app/hook/useRegisterModal";
import useLoginModel from "@/app/hook/useLoginModal";
import Button from "../reusableComponents/Button";
import { signIn } from "next-auth/react";
type Props = {};
function RegisterModal({}: Props) {
  const registerModel = useRegisterModal(); // Custom hook to manage the state of the registration modal
  const loginModel = useLoginModel(); // Custom hook to manage the state of the login modal
  const [isLoading, setIsLoading] = useState(false); // State to manage loading status

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Function to validate email
  const handleEmailValidation = (email: string) => {
    const isValid = isValidEmail(email);
    return isValid;
  };
  // Function to validate password
  const handlePasswordValidation = (password: string) => {
    const isValid = isValidPassword(password);
    return isValid;
  };
  // Function to validate name
  const handleNameValidation = (name: string) => {
    const isValid = isValidName(name);
    return isValid;
  };

  // Function to handle form submission
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Success!");
        registerModel.onClose();
        loginModel.onOpen();
      })
      .catch((err: any) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Function to toggle between login and registration modals
  const toggle = useCallback(() => {
    loginModel.onOpen();
    registerModel.onClose();
  }, [loginModel, registerModel]);

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <Heading
        title="Welcome to Evomina"
        subtitle="Create an Account!"
        center
      />
      {/* Button for Google login */}
      <div className="my-4">
        <Button
          outline
          widthFull
          label="Continue with Google"
          icon={FcGoogle}
          onClick={() => signIn("google")}
        />
      </div>
      <Input
        id="email"
        label="Email Address"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        validate={handleEmailValidation}
      />
      {/* error email handling */}
      {errors.email?.message && (
        <small className="text-rose-500 px-3 ">
          {errors.email.message.toString()}
        </small>
      )}
      <Input
        id="name"
        label="Full Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        validate={handleNameValidation}
        required
      />
      {errors.firstName?.message && (
        <small className="text-rose-500 px-3 ">
          {errors.firstName.message.toString()}
        </small>
      )}

      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        validate={handlePasswordValidation}
        type="password"
      />
      {errors.password?.message && (
        <small className="text-rose-500 px-3">
          {errors.password.message.toString()}
        </small>
      )}
    </div>
  );

  const footerContent = (
    <div className="flex flex-col">
      <hr />
      {/* <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      /> */}

      <div className="text-neutral-500 text-center font-light">
        <div>
          Already have an account?{" "}
          <span
            onClick={toggle}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </span>
        </div>
      </div>
    </div>
  );

  // Returning the modal component with the provided body and footer content
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModel.isOpen}
      title=""
      actionLabel="Continue"
      onClose={registerModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
      hasButton
      loading={isLoading}
    />
  );
}

export default RegisterModal;
