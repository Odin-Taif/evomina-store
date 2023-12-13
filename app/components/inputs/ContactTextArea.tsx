import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  id: string;
  label: string;
  name? : string;
  rows: number;
  placeholder: string;
  defaultValue: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean | string;
  max?: number;
  min?: number;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  onFocus?: () => void;
  onBlur?: () => void; // Add the onFocus prop
};

function ContactTextArea({
  id,
  label,
  rows,
  placeholder,
  defaultValue,
  disabled,
  register,
  required,
  errors,
  max,
  min,
  onFocus, // Destructure the onFocus prop
  onBlur,
}: Props) {
  return (
    <div className="w-full relative">
      <textarea
        id={id}
        rows={rows || 6}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        {...register(id, { required: required, max: max, min: min })}
        className={` border-[f0f0f0] w-full resize-none mt-5 pt-3 px-[14px] text-base text-body-color focus:border-primary focus-visible:shadow-none peer relative z-10 p-4 font-light bg-transparent border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? "border-rose-500" : "border-neutral-300"
        } ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}`}
      />
      {errors[id] && (
        <p role="alert" className="text-rose-500 m-2">
          {errors[id]?.message?.toString()}
        </p>
      )}
    </div>
  );
}

export default ContactTextArea;
