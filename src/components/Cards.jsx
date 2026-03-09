import { calculateDiscount } from "../api/tarriffs";

const Card = ({ tariff }) => {
  const isBest = tariff.is_best;
  const discount = calculateDiscount(tariff.price, tariff.full_price);

  return (
    <div
      className={`rounded-[30px] flex flex-col gap-4 border transition-all h-full
      ${isBest ? "md:flex-row border-orange-400" : "border-gray-700"} bg-[#2D3233]`}
      //только хит на всю ширину
    >
      <div
        className={`flex flex-col gap-2 h-full pl-[51px] ${isBest ? "md:w-1/7 " : ""}`}
      >
        {discount > 0 && (
          <span className="bg-[#FD5656] font-medium text-[22px] text-white w-fit px-2 py-1 rounded-b-lg">
            -{discount}%
          </span>
        )}
      </div>

      <div
        className={`py-7.5 w-fit  mx-auto ${isBest ? "md:w-2/7 md:max-w-fit" : ""}`}
      >
        <h3 className="text-xl font-medium text-[26px] text-center">
          {tariff.period}
        </h3>

        <div
          className={`font-montserrat font-semibold text-[50px] ${isBest ? "text-[#FDB056]" : ""}`}
        >
          {tariff.price} ₽
        </div>
        <div className="text-gray-400 line-through text-lg text-right">
          {tariff.full_price} ₽
        </div>
      </div>

      <div
        className={`w-full self-center pl-[18px] ${isBest ? "md:w-3/7" : ""}`}
      >
        <p className="text-gray-300 text-sm">{tariff.text}</p>
      </div>

      <div class="flex flex-col gap-2 h-full pt-[5px] mx-auto">
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
