import { useState, useEffect } from "react";
import { getTariffs } from "./api/tarriffs";
import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";
import Footer from "./layouts/Footer";
import useTimer from "./hooks/useTimer";

function App() {
  const timeLeft = useTimer(2 * 60); // 2 минуты
  const [tariffs, setTariffs] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <Header timeLeft={timeLeft} />
      <main className="flex-grow pt-40 w-full max-w-[1216px] mx-auto px-4 ">
        <MainContent />
        <Footer />
      </main>
    </>
  );
}

export default App;
