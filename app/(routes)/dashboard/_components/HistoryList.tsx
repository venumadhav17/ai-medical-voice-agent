"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

function HistoryList() {
  const [historyList, setHistoryList] = useState([]);
  return (
    <div className='mt-10'>
      {historyList.length == 0 ? (
        <div className='flex items-center flex-col justify-center p-7 border-2 border-dashed rounded-2xl'>
          <Image
            src={"/medical-assistance.png"}
            alt='empty'
            width={150}
            height={150}
          />
          <h2 className='font-bold text-xl mt-2'>No Recent Consultations</h2>
          <p>It looks like you haven't consulted with any doctors yet.</p>
          <Button className='mt-3'>
            <span className='flex items-center justify-center rounded-lg w-5 h-5 bg-white text-black font-bold text-lg'>
              +
            </span>{" "}
            Start a Consultation
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default HistoryList;
