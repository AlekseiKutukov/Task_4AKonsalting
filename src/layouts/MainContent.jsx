import { useState, useEffect } from "react";
import { getTariffs } from "../api/tarriffs";
import Card from "../components/Cards";
import manImg from "./../assets/image/man.svg";
import ConsentForm from "../components/ConsentForm";
import LegalDisclaimer from "../components/LegalDisclaimer";
import AttentionBlock from "../components/AttentionBlock";
import PriceOffers from "../components/PriceOffers";

const MainContent = () => {
  return (
    <>
      <h1 className="font-['Montserrat'] font-bold text-[40px] text-white leading-tight">
        Выбери подходящий для себя <span className="text-[#FFB347]">тариф</span>
      </h1>

      <section className="flex flex-col md:flex-row items-center gap-10 mt-[50px]">
        {/* Левая часть: Изображение */}
        <div className="flex-shrink-0">
          <img
            src={manImg}
            alt="Красавчик мужчина"
            className="w-full md:w-[380px] h-auto"
          />
        </div>

        {/* Правая часть: Текст */}
        <section className="flex flex-col gap-6 w-full mx-auto p-4">
          <PriceOffers />
          <AttentionBlock />
          <ConsentForm />
          <LegalDisclaimer />
        </section>
      </section>
    </>
  );
};

export default MainContent;
