import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";

interface TextInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: FieldErrors;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  control,
  errors,
  placeholder,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 mb-6">
      <label className="text-base text-textColor">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            placeholder={placeholder}
            className={`w-full bg-bgColor border-[1px] border-borderColor rounded-lg px-4 py-2 focus:outline-none focus:border-primary text-textColor text-base ${
              errors[name] ? "border-red-500" : ""
            }`}
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
};

export default TextInput;