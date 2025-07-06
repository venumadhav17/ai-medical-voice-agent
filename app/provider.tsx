"use client";

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";

export type UsersDetail = {
  name: string;
  email: string;
  credits: number;
};

const Provider = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // whenever there is any user information is there then only we'll be called
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<any>();

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);
  // Check whether the user data is present or not
  const CreateNewUser = async () => {
    const result = await axios.post("/api/users");
    console.log(result.data);
    setUserDetail(result.data);
  };
  return (
    <div>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </div>
  );
};

export default Provider;
