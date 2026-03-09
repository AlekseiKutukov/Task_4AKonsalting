const PriceDisplay = ({ price, fullPrice, isExpired }) => {
  return (
    <div className="relative flex flex-col items-end h-12 overflow-hidden">
      {/* Скидочная цена: исчезает при истечении */}
      <div
        className={`transition-all duration-500 transform ${
          isExpired
            ? "opacity-0 -translate-y-full"
            : "opacity-100 translate-y-0"
        }`}
      >
        <span className="text-3xl font-bold text-[#FD5656]">{price} ₽</span>
      </div>

      {/* Обычная цена: появляется при истечении */}
      <div
        className={`absolute transition-all duration-500 transform ${
          isExpired ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <span className="text-3xl font-bold text-white">{fullPrice} ₽</span>
      </div>
    </div>
  );
};

export default PriceDisplay;
