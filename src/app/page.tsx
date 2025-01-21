"use client";

import Image from "next/image";
import loveImage from "/public/love.png";
import cute from "/public/cute.gif";
import yes from "/public/yes.gif";
import bat from "/public/bat.gif";
import { useState } from "react";
import Confetti from "react-confetti";

export default function Home() {
  const [serius, setSerius] = useState(false);
  const [app, setApp] = useState(false);
  const [notapp, SetNotApp] = useState(false);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[url('https://img.freepik.com/free-vector/doodle-background-star-pattern-ink-design-vector_53876-154207.jpg')] bg-center">
      {app && (
        <div className="w-full fixed z-20 left-0 top-0">
          <Confetti />
        </div>
      )}
      <div
        className={` ${
          serius || app || notapp ? "hidden" : "flex"
        } w-[80%] sm:w-[50%] lg:w-[350px] text-center flex flex-col gap-[20px] items-center justify-center bg-white rounded-xl shadow-2xl p-[50px]`}
      >
        <p className="text-[25px] text-center">Dedicated to ezu</p>
        <Image src={loveImage} alt="love" width={350} height={150} />
        <p className="text-[20px] text-center">Батукатай болзохуу?</p>
        <div className="w-[100%] flex items-center justify-center gap-4">
          <button
            className="border-[1px] shadow-md px-4 py-2 border-black rounded-md"
            onClick={() => {
              setApp(true);
              setSerius(false);
            }}
          >
            Тийм{" "}
          </button>
          <button
            className="border-[1px] shadow-md px-4 py-2 border-black rounded-md group relative"
            onClick={() => {
              setSerius(true);
            }}
          >
            <span className="group-hover:hidden">Үгүй</span>
            <span className="hidden group-hover:inline">Үнэхээр итгэлтэй байна уу ?</span>
          </button>
        </div>
      </div>
      <div className={`${serius ? "flex" : "hidden"}  w-[100%]   flex items-center justify-center`}>
        <div className="w-[80%] sm:w-[50%] lg:w-[350px] p-[50px] shadow-2xl bg-white rounded-lg flex flex-col gap-2 items-center justify-center text-black">
          <Image src={cute} alt="love" width={350} height={150} className="rounded-lg" />
          <p className="text-[20px] text-center">
            Үнэхээр итгэлтэй байна уу ? <br />
            Дахиад нэг бодоод үзэх юмуу?
          </p>
          <div className="flex gap-2">
            <button
              className=" shadow-md px-4 py-2 border-black rounded-md bg-white border-[1px]  text-black "
              onClick={() => {
                setApp(true);
                setSerius(false);
              }}
            >
              Зза тэгье даа{" "}
            </button>
            <button
              className=" shadow-md px-4 py-2 border-black rounded-md bg-white border-[1px]  text-black"
              onClick={() => {
                SetNotApp(true);
                setSerius(false);
              }}
            >
              Үгүй ээ үгүй{" "}
            </button>
          </div>
        </div>
      </div>
      <div className={`${app ? "flex" : "hidden"}  w-full h-screen flex items-center justify-center`}>
        <div className="w-[80%] sm:w-[50%] lg:w-[350px] p-[50px] shadow-2xl bg-white rounded-lg flex flex-col gap-2 items-center justify-center text-black">
          <Image src={yes} alt="love" width={350} height={150} className="rounded-lg" />
          <p className="text-[20px] text-center"> Маш зөв сонголт хийж зөвшөөрсөнд баярлалаа.</p>
        </div>
      </div>
      <div className={`${notapp ? "flex" : "hidden"}  w-full h-screen flex items-center justify-center`}>
        <div className="w-[80%] sm:w-[50%] lg:w-[350px] p-[50px] shadow-2xl bg-white rounded-lg flex flex-col gap-2 items-center justify-center text-black">
          <Image src={bat} alt="love" width={350} height={150} className="rounded-lg" />
          <p className="text-[20px] text-center">Би заавал буцаж ирнээ амлаж байна.</p>
        </div>
      </div>
    </div>
  );
}
