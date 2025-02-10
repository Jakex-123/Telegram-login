import Image from 'next/image'
import React from 'react'
import OTPInput from './OTPInput'

interface InputProps {
  type: string;
  img?: string;
  handleChange: (value: string) => void;
}

const Input= ({ type, img, handleChange }:InputProps) => {
  return (
    <>
      {type !== "OTP" ? (
        <div className="w-full outline outline-2 outline-[#f1f1f1] rounded-md h-10 flex items-center px-2">
          {img && <Image className="mx-2" width={20} height={20} src={img} alt={type} />}
          <input
            type={type === "phone" ? "tel" : "password"}
            pattern={type === "phone" ? '^\\+\\d{10,15}$' : '.*'}
            placeholder={type === "phone" ? "+1234567890" : "Enter Code"}
            className="w-full text-md outline-none px-2 bg-transparent dark:text-white"
            onChange={(e) => handleChange(e.target.value)}
            required={type==="phone"?true:false}
          />
        </div>
      ) : (
        <OTPInput handleChange={handleChange} />
      )}
    </>
  );
};

export default Input;
