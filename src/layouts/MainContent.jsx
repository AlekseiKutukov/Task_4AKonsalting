import manImg from "./../assets/image/man.svg";
import ConsentForm from "../components/ConsentForm";
import LegalDisclaimer from "../components/LegalDisclaimer";
import AttentionBlock from "../components/AttentionBlock";
import PriceOffers from "../components/PriceOffers";

const MainContent = ({ isExpired }) => {
  return (
    <>
      <h1 className="font-['Montserrat'] font-bold text-[22px] min-[375px]:text-[24px] md:text-[40px] text-white leading-tight">
        Выбери подходящий для себя <span className="text-[#FFB347]">тариф</span>
      </h1>

      <section className="flex flex-col md:flex-row items-center gap-0 md:gap-10 mt-[30px] md:mt-[50px]">
        {/* Левая часть: Изображение */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          <img
            src={manImg}
            alt="Красавчик мужчина"
            className="w-auto h-[200px] min-[375px]:h-[250px] md:h-auto md:w-[380px] object-contain"
          />
        </div>

        {/* Правая часть: Текст */}
        <section className="flex flex-col gap-6 w-full mx-auto p-4">
          <PriceOffers isExpired={isExpired} />
          <AttentionBlock />
          <ConsentForm />
          <LegalDisclaimer />
        </section>
      </section>
    </>
  );
};

export default MainContent;
