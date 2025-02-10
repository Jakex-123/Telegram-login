"use client"
import Login from '@/components/login'
import Switch from '@/components/Switch'
import React, { useEffect } from 'react'


const page = () => {

  return (
    <div className='w-screen h-screen bg-[#e4effe] dark:bg-[#000000]'>
      
      <div className='flex justify-center items-center h-full'>
        <Login/>
      </div>
    
    </div>
  )
}

export default page