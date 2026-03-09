const PriceDisplay = ({ price, fullPrice, is_best, isExpired }) => {
  const isBest = is_best;
  return (
    <div className="relative flex flex-col items-end  overflow-hidden">
      {/* Скидочная цена: исчезает при истечении */}
      <div
        className={`transition-all duration-500 transform ${
          isExpired
            ? "opacity-0 -translate-y-full"
            : "opacity-100 translate-y-0"
        }`}
      >
        <span
          className={`font-montserrat font-semibold text-[50px] ${isBest ? "text-[#FDB056]" : ""}`}
        >
          {price} ₽
        </span>
        <div className="text-gray-400 line-through text-lg text-right">
          {fullPrice} ₽
        </div>
      </div>

      {/* Обычная цена: появляется при истечении */}
      <div
        className={`absolute transition-all duration-500 transform ${
          isExpired ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <span
          className={`font-montserrat font-semibold text-[40px] ${isBest ? "text-[#FDB056]" : ""}`}
        >
          {fullPrice} ₽
        </span>
      </div>
    </div>
  );
};

export default PriceDisplay;
