import { Controller } from "react-hook-form";
import CustomSelect from "../ui/CustomSelect";

interface SelectControllerProps {
  name: string;
  control: any; // Adjust the type based on your control type if necessary
  defaultValue: string;
  options: any[]; // Allow any object structure for options
  label: string;
  valueKey: string; // Key to access value from the options
  labelKey: string; // Key to access label from the options
}

const SelectController: React.FC<SelectControllerProps> = ({
  name,
  control,
  defaultValue,
  options,
  label,
  valueKey,
  labelKey,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <CustomSelect
          label={label}
          options={options?.map((option) => ({
            value: option[valueKey],
            label: option[labelKey],
          }))}
          value={field.value}
          onChange={field.onChange}
        />
      )}
    />
  );
};

export default SelectController;
