import { useState, useEffect } from "react";
import { getTariffs } from "./api/tarriffs";

function App() {
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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Наши тарифы</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tariffs.map((tariff) => (
          <div key={tariff.id} className="border p-4 rounded shadow">
            <h2 className="font-bold">{tariff.period}</h2>
            <p>{tariff.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
