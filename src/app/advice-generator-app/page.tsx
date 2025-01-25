"use client";

import Image from "next/image";
import IconDice from "../../assets/advice-generator-app/icon-dice.svg";
import PatternDividerDesktop from "../../assets/advice-generator-app/pattern-divider-desktop.svg";
import PatternDividerMobile from "../../assets/advice-generator-app/pattern-divider-mobile.svg";

import { Manrope } from "next/font/google";
import { useEffect, useState } from "react";

const manrope = Manrope({
  weight: ["800"],
});

const initialSlip = null;

export default function AdviceGeneratorApp() {
  const [slip, setSlip] = useState(initialSlip);

  useEffect(() => {
    if (!slip) {
      fetch("https://api.adviceslip.com/advice")
        .then((d) => d.json())
        .then(({ slip }) => {
          setSlip(slip);
        });
    }
  }, [slip]);

  return (
    <main className="bg-gray-800 flex flex-col justify-center items-center h-screen min-w-[300px]">
      <div className="text-[hsl(193,38%,86%)] m-4 min-w-[300px] md:w-[540px] h-[500px] flex flex-col items-center mt-4">
        <div
          className={`${manrope.className} bg-gray-700 rounded-2xl w-[100%] h-[80%] flex flex-col justify-around items-center`}
        >
          <div className="text-[hsl(150,100%,66%)] text-xs tracking-[4px] uppercase">
            Advice #{slip?.id}
          </div>
          <div className="text-lg md:text-xl p-6">"{slip?.advice}"</div>
          <Image
            className="block md:hidden mb-16"
            alt="Dice Icon"
            src={PatternDividerMobile}
          ></Image>
          <Image
            className="hidden md:block mb-16"
            alt="Dice Icon"
            src={PatternDividerDesktop}
          ></Image>
        </div>
        <button
          onClick={() => setSlip(initialSlip)}
          className="hovershadow-md hover:shadow-[0_0px_20px_5px_rgba(82,255,168,0.45)]  bg-emerald-200 p-3 rounded-full -mt-6"
        >
          <Image alt="Dice Icon" src={IconDice}></Image>
        </button>
      </div>
    </main>
  );
}
