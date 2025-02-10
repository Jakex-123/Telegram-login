//@ts-nocheck
"use client"
import Image from 'next/image'
import React, { FormEvent, useEffect, useState } from 'react'
import Input from '../components/Input'
import { redirect, useRouter } from 'next/navigation'
import axios from 'axios'
import { sendCode, startClient } from '@/lib/routes'
import Switch from './Switch'

const Login = () => {
    
    const router=useRouter()
    const formFields=[{title:"Phone Number",type:"phone",img:"/phone.png",btnTitle:"Send Code"},
        {title:"Verification Code",type:"OTP",img:"",btnTitle:"Verify Code"},
        {title:"Two-Step Verification Password",type:"2step",img:"/lock.png",btnTitle:"Login"}
    ]
    const [loginStep,setLoginStep]=useState(0)

    const [formData, setFormData] = useState<{ phone?: string; OTP?: string; "2step"?: string }>({});


    const handleChange = (field: string, value: string) => {
        setFormData((prevState) => ({
          ...prevState,
          [field]: value,
        }));
      };      
    
    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault()
        if(loginStep===0){
            (async ()=> sendCode({phoneNumber:formData?.phone!}))()
        }
        if(loginStep===2){
            (async ()=>startClient({phoneNumber:formData?.phone,phoneCode:formData?.OTP,password:formData?.['2step']}))()
        }

        if(loginStep<2) setLoginStep((prev)=>prev+1)
        else setTimeout(()=>router.push('/user'),2000)
    }

  return (
      <form onSubmit={handleSubmit} className="dark:bg-[#242424] shadow-custom dark:shadow-dcustom bg-white w-[500px] flex flex-col gap-3 rounded-lg items-center py-6 px-8">
        
        <div className="flex items-center gap-2">
          <Image src={'/telegram.png'} width={50} height={50} alt="telegram-logo"/>
          <h1 className="text-2xl dark:invert font-bold">Telegram Login</h1>
        </div>
        <div className="w-full flex flex-col gap-3 mt-3">
          <h2 className="font-semibold dark:invert">{formFields[loginStep].title}</h2>
          <Input type={formFields[loginStep].type} img={formFields[loginStep].img} handleChange={(value) => handleChange(formFields[loginStep].type, value)}/>
        </div>
        <button type='submit' className="w-full mt-2 py-2 rounded-md text-center bg-black dark:invert text-white font-semibold">{formFields[loginStep].btnTitle}</button>
        {loginStep===1 && <button className='w-full dark:invert text-center font-semibold' onClick={()=>setLoginStep(0)}>Change Phone Number</button>}
        <div className='w-full flex justify-end gap-2 items-center'>
          <Switch/>
          <h5 className='font-semibold dark:invert'>Toggle Light/Dark Mode</h5>
        </div>
      </form>
  )
}

export default Login