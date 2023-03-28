import Input from "@/components/input";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signIn("credentials", {
      callbackUrl:"/",
      redirect: true,
      email,
      password,
    });
  };
  const inputs: Array<inputProps> = [
    {
      color: "white",
      placeholder: "Email",
      height: "50px",
      width: "400px",
      value: email,
      handleChange(e) {
        setEmail(e.target.value);
      },
    },
    {
      color: "white",
      height: "50px",
      width: "400px",
      placeholder: "Password",
      value: password,
      handleChange(e) {
        setPassword(e.target.value);
      },
    },
  ];
  return (
    <div className="container p-4 mx-auto md:w-5/6 font-poppins">
      <form onSubmit={handleSubmit}>
        <div className="flex shadow-sm w-[500px] mx-auto py-10 shadow-[#F1A501] flex-col gap-3 items-center mt-40">
          <h1>Login to Access your account</h1>
          <Input
            color={inputs[0].color}
            placeholder={inputs[0].placeholder}
            value={inputs[0].value}
            handleChange={inputs[0].handleChange}
            height={inputs[0].height}
            width={inputs[0].width}
          />
          <Input
            color={inputs[1].color}
            placeholder={inputs[1].placeholder}
            value={inputs[1].value}
            handleChange={inputs[1].handleChange}
            height={inputs[1].height}
            width={inputs[1].width}
          />
          <button className="px-5 py-2 text-xl text-white bg-[#F1A501] border rounded-sm">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
