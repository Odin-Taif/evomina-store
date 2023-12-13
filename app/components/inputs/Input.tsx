import React, { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type Props = {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean | string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  onFocus?: () => void;
  onBlur?: () => void; // Add the onFocus prop
  validate?: FieldValues;
};

function Input({
  id,
  label,
  placeholder,
  type /*= "text"*/,
  disabled,
  required,
  errors,
  validate,
  register,
  onFocus, // Destructure the onFocus prop
  onBlur,
}: Props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...register(id, {
          required,
          validate: validate,
        })}
        // ref={register({ requried: true, validate: validate })}
        placeholder=""
        type={
          type === "password" ? (passwordShown ? "text" : "password") : type
        }
        className={`peer relative z-10 w-full p-4 pl-4 font-light bg-transparent border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? "border-rose-500" : "border-neutral-300"
        } ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}`}
      />
      {type &&
        type === "password" &&
        (passwordShown ? (
          <AiFillEyeInvisible
            className="absolute top-5 right-5 cursor-pointer z-40"
            size={30}
            onClick={togglePassword}
          />
        ) : (
          <AiFillEye
            className="absolute top-5 right-5 cursor-pointer z-40"
            size={30}
            onClick={togglePassword}
          />
        ))}

      {/* -=-=-=-=-=-=-=-=-=-=//Error validation for the all the inputs-=-=-=-=-=-=-==- */}
      {/* when the input is required we display this validation message */}
      {errors[id] && errors[id]?.type === "required" && (
        <p role="alert" className="text-rose-500 m-2">
          {errors[id]?.message?.toString()}
        </p>
      )}

      <label
        className={`absolute text-sm duration-150 transform -translate-y-4 top-5 left-4 z-9 origin-[0] peer-placeholder-shown:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          errors[id] ? "text-rose-500" : "text-zinc-400"
        }`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
