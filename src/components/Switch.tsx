//@ts-nocheck
"use client"
import { useTheme } from "@/context/themeContext";
import { useEffect, useState } from "react";

export default function Switch() {
  const [isOn, setIsOn] = useState(false);
  const {theme,toggleTheme}=useTheme()
  useEffect(()=>{
    if(theme==="light") setIsOn(false)
    else setIsOn(true)
  },[theme])
  return (
    <div className="">
        <button type="button"
      onClick={() =>{
        setIsOn(!isOn) 
        toggleTheme()}}
      className={`${theme} relative w-10 h-5 flex items-center rounded-full p-1 transition duration-300 ${
        isOn ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <div
        className={`w-3 h-3 bg-white rounded-full shadow-md transform transition ${
          isOn ? "translate-x-5" : "translate-x-0"
        }`}
      ></div>
    </button>
    </div>
  );
}
