"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../ui/Input";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // Handle form submission
  const onSubmit = (data:LoginFormInputs) => {
    console.log("Login data:", data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          type="email"
          name="email"
          label="Email address"
          placeholder="Enter your email"
          control={control}
          errors={errors}
        />
      </div>

      <div>
      <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          control={control}
          errors={errors}
        />
      </div>

      {/* Forgot Password */}
      <div className="flex justify-between text-sm">
        <a href="#" className="text-blue-500 hover:underline">
          Forgot password?
        </a>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Form;
