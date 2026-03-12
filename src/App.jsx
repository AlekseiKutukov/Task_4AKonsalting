import { useState, useEffect } from "react";
import { getTariffs } from "./api/tarriffs";
import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";
import Footer from "./layouts/Footer";
import useTimer from "./hooks/useTimer";

function App() {
  const COUNT_MINUTES = 2;
  // const timeLeft = useTimer(COUNT_MINUTES * 60); // 2 минуты
  const timeLeft = useTimer(COUNT_MINUTES * 3); // 6 сек, чтобы видеть результат
  const [tariffs, setTariffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const isExpired = timeLeft <= 0;

  useEffect(() => {
    const loadData = async () => {
      const data = await getTariffs();
      setTariffs(data);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Загрузка тарифов...
      </div>
    );
  }

  return (
    <>
      <Header timeLeft={timeLeft} isExpired={isExpired} />
      <main className="flex-grow pt-[110px] md:pt-40 w-full max-w-[1216px] mx-auto px-4">
        <MainContent isExpired={isExpired} />
        <Footer />
      </main>
    </>
  );
}

export default App;
