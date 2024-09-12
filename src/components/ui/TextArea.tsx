import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";

interface TextAreaProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: FieldErrors;
  placeholder?: string;
  rows?: number;
  cols?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  control,
  errors,
  placeholder,
  rows = 4,
  cols = 50,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 mb-6">
      <label className="text-base text-textColor">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            rows={rows}
            cols={cols}
            className={`w-full bg-bgColor border-[1px] border-borderColor rounded-lg px-4 py-2 focus:outline-none text-textColor text-base resize-none ${
              errors[name] ? "border-red-500" : ""
            }`}
            placeholder={placeholder}
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
};

export default TextArea;
