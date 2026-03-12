import { useState } from "react";

const ConsentForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePurchase = () => {
    if (isChecked) {
      console.log("Оплата инициирована");
      // Логика перехода к оплате
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full ">
      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={() => setIsChecked(!isChecked)}
          className={`w-6 h-6 flex-shrink-0 flex items-center justify-center border-2 rounded transition-all duration-200 ${
            isChecked
              ? "bg-orange-400 border-orange-400"
              : "bg-transparent border-gray-600 hover:border-gray-400"
          }`}
        >
          {isChecked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </button>

        <span className="max-w-[600px] text-[#CDCDCD] font-montserrat font-normal text-[16px]">
          Я согласен с{" "}
          <a
            href="/"
            className="text-[#CDCDCD] font-montserrat font-normal text-[16px] underline"
          >
            офертой рекуррентных платежей
          </a>{" "}
          и{" "}
          <a
            href="/"
            className="text-[#CDCDCD] font-montserrat font-normal text-[16px] underline"
          >
            Политикой конфиденциальности
          </a>
        </span>
      </div>

      {/* Кнопка Купить */}
      <button
        onClick={handlePurchase}
        disabled={!isChecked}
        className={`w-full sm:max-w-[352px] py-[20px] rounded-[20px] font-bold text-lg transition-all duration-300 ${
          isChecked
            ? "bg-[#FDB056] text-black hover:bg-orange-500 transform active:scale-95 shadow-lg shadow-orange-500/20"
            : "bg-gray-600 text-gray-400 cursor-not-allowed opacity-60"
        }`}
      >
        Купить
      </button>
    </div>
  );
};

export default ConsentForm;
