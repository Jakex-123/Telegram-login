//@ts-nocheck
"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

const OTPInput = ({ length = 5,handleChange }) => {
  const [otp, setOTP] = useState<string[]>(new Array(length).fill("-"));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);


  useEffect(()=>{
    if(inputRefs.current[0]){
      inputRefs.current[0].focus()
      inputRefs.current[0].value=""
    }
  },[])

  const handleOTPChange = (e:ChangeEvent<HTMLInputElement>, index:number) => {
    const value=e.target.value
    if(isNaN(value)) return
    let newOTP=[...otp]
    newOTP[index]=value.substring(value.length-1)
    setOTP(newOTP)
    handleChange(newOTP.join("").replace(/-/g, ""));
    if(value && index<length-1 && inputRefs.current[index+1]){
      inputRefs.current[index+1]?.focus()
      if(newOTP[index+1]==="-"){
        newOTP=[...newOTP]
        newOTP[index+1]=""
        setOTP(newOTP)
      }
    }
  };
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>, index:number) => {
    if(e.key==="Backspace" && !otp[index] && index>0 && inputRefs.current[index-1]){
      inputRefs.current[index-1]?.focus()
    }
  };
  const handleClick=(index:number)=>{
    inputRefs.current[index]?.setSelectionRange(1,1)
  }
  return (
    <div className="flex items-start gap-2">
      {otp.map((value, index) => {
        return (
          <input
          className="w-10 h-10 rounded-md outline outline-[#f1f1f1] outline-2 text-center text-xl"
            value={value}
            key={index}
            ref={(input) => {(inputRefs.current[index] = input)}}
            type="text"
            onChange={(e) => handleOTPChange(e, index)}
            onClick={(e)=>handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OTPInput;
