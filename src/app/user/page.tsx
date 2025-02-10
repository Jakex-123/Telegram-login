"use client";
import { getUsers } from "@/lib/routes";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUsers(); ; // No need to use .json()
        console.log("User Info:", result);
        setData(result?.data?.user); // Extract the `user` object from the response
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#e4effe] dark:bg-black">
      {data ? (
        <div>
          <h1 className="dark:invert text-4xl font-bold">Hello, {`${data?.firstName} ${data?.lastName}`}</h1>
          
        </div>
      ) : (
        <p className="dark:invert">Loading...</p>
      )}
    </div>
  );
}

