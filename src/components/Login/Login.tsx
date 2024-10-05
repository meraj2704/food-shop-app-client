import Image from "next/image";
import Form from "./Form";

const Login: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden w-full">
        {/* Left Side - Image for MD+ screens */}
        <div className="hidden md:flex md:w-1/2 bg-cover bg-center">
          <Image
            src="/your-image-path.jpg" // Replace with your image path
            alt="Login page side image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 ">
          <h2 className="text-2xl font-bold text-center mb-4">
            Login to Your Account
          </h2>

          {/* Login Form */}
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Login;
