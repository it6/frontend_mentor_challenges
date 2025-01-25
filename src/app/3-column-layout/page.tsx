import { Big_Shoulders_Display, Lexend_Deca } from "next/font/google";
import Image from "next/image";
import LuxuryIcon from "../../assets/3-column-layout/icon-luxury.svg";
import SedansIcon from "../../assets/3-column-layout/icon-sedans.svg";
import SuvsIcon from "../../assets/3-column-layout/icon-suvs.svg";

const lexendDeca = Lexend_Deca({
  weight: ["400"],
});

const bigShouldersDisplay = Big_Shoulders_Display({
  weight: ["700"],
});

export default function ThreeColumnLayout() {
  return (
    <div
      className={`${lexendDeca.className} flex justify-center items-center text-white`}
    >
      <div className="flex justify-center m-20 flex-col md:flex-row md:w-[920px] md:h-[500px]">
        <div className="bg-orange-400 min-w-[200px] min-h-[400px] rounded-t-md  md:rounded-l-md md:rounded-tr-none pl-10 flex flex-col justify-around items-start flex-1">
          <Image src={SedansIcon} alt="Sedans Icon" />
          <div
            className={`${bigShouldersDisplay.className} font-bold text-4xl`}
          >
            SEDANS
          </div>
          <div className="text-sm  pr-8 md:pr-14 md:mb-10">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </div>
          <button className="rounded-full px-6 py-3 mb-10 text-sm bg-white border-2 border-transparent text-orange-400 hover:bg-orange-400 hover:text-white hover:border-2 hover:border-white">
            Learn More
          </button>
        </div>
        <div className="bg-teal-700 min-w-[200px] min-h-[400px] pl-10 flex flex-col justify-around items-start flex-1">
          <Image src={SuvsIcon} alt="Sedans Icon" />
          <div
            className={`${bigShouldersDisplay.className} font-bold text-4xl`}
          >
            SUVs
          </div>
          <div className="pr-8 md:pr-14 text-sm md:mb-10">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </div>
          <button className="rounded-full px-6 py-3 mb-10 text-sm bg-white text-teal-700 hover:bg-teal-700 hover:text-white hover:border-2 hover:border-white border-2 border-transparent">
            Learn More
          </button>
        </div>
        <div className="bg-emerald-900 min-w-[200px] pl-10 rounded-b-md md:rounded-r-md md:rounded-bl-none flex flex-col justify-around items-start min-h-[400px] flex-1">
          <Image src={LuxuryIcon} alt="Sedans Icon" />
          <div
            className={`${bigShouldersDisplay.className} font-bold text-4xl`}
          >
            LUXURY
          </div>
          <div className="pr-8 md:pr-14 text-sm md:mb-10">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </div>
          <button className="border-box rounded-full px-6 py-3 mb-10 text-sm bg-white text-emerald-900 hover:bg-emerald-900 hover:text-white hover:border-2 hover:border-white border-2 border-transparent">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
