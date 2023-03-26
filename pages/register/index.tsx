import Input from "@/components/input";
import React, { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
    {
      color: "white",
      height: "50px",
      width: "400px",
      placeholder: "Confirm Password",
      value: password,
      handleChange(e) {
        setPassword(e.target.value);
      },
    },
  ];
  return (
    <div className="container p-4 mx-auto md:w-5/6 font-poppins">
      <div className="flex shadow-sm w-[500px] mx-auto py-10 shadow-[#F1A501] flex-col gap-3 items-center mt-40">
        <h1>Create an Account</h1>
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
        <Input
          color={inputs[2].color}
          placeholder={inputs[2].placeholder}
          value={inputs[2].value}
          handleChange={inputs[2].handleChange}
          height={inputs[2].height}
          width={inputs[2].width}
        />
        <button className="px-5 py-2 text-xl text-white bg-[#F1A501] border rounded-sm">
          Register
        </button>
      </div>
    </div>
  );
};

export default Index;
