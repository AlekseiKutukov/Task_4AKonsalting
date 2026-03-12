import { formatTime } from "../utils/formatTime";
import starRed from "./../assets/icon/StarRed.svg";
import starYellow from "./../assets/icon/StarYellow.svg";

const Header = ({ timeLeft }) => {
  // const isUrgent = timeLeft <= 30; //количество секунд для мигания
  const isUrgent = timeLeft <= 3; //количество секунд для мигания
  const starIcon = isUrgent ? starRed : starYellow;
  const timerColor = isUrgent ? "text-[#FF4E4E]" : "text-[#FFBB00]";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1e4d3c] text-white py-4 shadow-lg">
      <div className="text-center flex flex-col items-center gap-y-4">
        <p className="font-sans font-semibold text-[14px] min-[375px]:text-[18px] md:text-[24px] leading-[130%] text-center">
          Успейте открыть пробную неделю
        </p>
        <div
          className={`flex items-center justify-center gap-3 text-[40px] font-bold font-mono leading-none tabular-nums ${isUrgent ? "animate-blink" : ""}`}
        >
          <img
            src={starIcon}
            alt="star"
            className="w-3 h-3 min-[375px]:w-4 min-[375px]:h-4 md:w-6 md:h-6"
          />
          <span
            className={`${timerColor} text-[28px] min-[375px]:text-[32px] md:text-[40px]`}
          >
            {formatTime(timeLeft)}
          </span>

          <img
            src={starIcon}
            alt="star"
            className="w-3 h-3 min-[375px]:w-4 min-[375px]:h-4 md:w-6 md:h-6"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
