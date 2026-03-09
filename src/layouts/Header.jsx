import { formatTime } from "../utils/formatTime";
import starRed from "./../assets/icon/StarRed.svg";
import starYellow from "./../assets/icon/StarYellow.svg";

const Header = ({ timeLeft }) => {
  const isUrgent = timeLeft <= 3; //30;
  const starIcon = isUrgent ? starRed : starYellow;
  const timerColor = isUrgent ? "text-[#FF4E4E]" : "text-[#FFBB00]";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1e4d3c] text-white py-4 shadow-lg">
      <div className="text-center flex flex-col items-center gap-y-4">
        <p className="font-sans font-semibold text-[24px] leading-[130%]">
          Успейте открыть пробную неделю
        </p>
        <div
          className={`flex items-center justify-center gap-3 text-[40px] font-bold font-mono leading-none tabular-nums ${isUrgent ? "animate-blink" : ""}`}
        >
          <img src={starIcon} alt="star" width="14" height="14" />
          <span className={timerColor}>{formatTime(timeLeft)}</span>
          <img src={starIcon} alt="star" width="14" height="14" />
        </div>
      </div>
    </header>
  );
};

export default Header;
