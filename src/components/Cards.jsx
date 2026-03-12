import { calculateDiscount } from "../api/tarriffs";
import PriceDisplay from "./PriceDisplay";

const Card = ({ tariff, isExpired, isSelected }) => {
  const isBest = tariff.is_best;
  const discount = calculateDiscount(tariff.price, tariff.full_price);

  // Либо это "Хит" на десктопе, либо любой тариф на мобилке
  const isHorizontal = "flex-row md:flex-col";

  return (
    <div
      className={`rounded-[30px] flex transition-all h-full cursor-pointer  md:p-0 border-2
      ${isBest ? "flex-row border-orange-400" : "flex-row md:flex-col border-gray-700"}
      

  
  /* Логика выделения */
  ${
    isSelected
      ? "border-[#FDB056] bg-[#363B3C] shadow-[0_0_15px_rgba(253,176,86,0.2)] scale-[1.01]"
      : isBest
        ? "border-orange-400"
        : "border-gray-700"
  }
    
  bg-[#2D3233] hover:bg-[#323738]`}
    >
      {/* 1. Блок скидки */}
      <div
        className={`flex flex-col gap-2 h-full pl-[51px] ${isBest ? "md:w-1/7 " : ""}`}
      >
        {discount > 0 && (
          <span className="bg-[#FD5656] font-medium text-[22px] text-white w-fit px-2 py-1 rounded-b-lg">
            -{discount}%
          </span>
        )}
      </div>

      {/* 2. Блок периода и цены */}
      <div
        className={`py-7.5 w-fit  mx-auto ${isBest ? "md:w-2/7 md:max-w-fit" : ""}`}
      >
        <h3 className="text-xl font-medium text-[26px] text-center">
          {tariff.period}
        </h3>

        <PriceDisplay
          price={tariff.price}
          fullPrice={tariff.full_price}
          is_best={tariff.is_best}
          isExpired={isExpired}
        />
      </div>

      {/* 3. Блок текста */}
      <div
        className={`self-center px-2 md:pl-[18px] ${isBest ? "w-3/7" : "w-2/5 md:w-full"}`}
      >
        <p className="text-gray-300 text-[12px] md:text-sm">{tariff.text}</p>
      </div>

      {/* 4. Метка Хит*/}
      <div className="flex flex-col gap-2 h-full pt-[5px] mx-auto">
        {isBest && (
          <span className=" text-[#FDB056] font-medium text-[22px] lowercase">
            Хит!
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
