import { useState, useEffect } from "react";
import { getTariffs } from "../api/tarriffs";
import Card from "../components/Cards";

const PriceOffers = ({ isExpired }) => {
  const [tariffs, setTariffs] = useState([]);
  const [selectedId, setSelectedId] = useState(null); //храним  id выбранного тарифа

  useEffect(() => {
    getTariffs().then((data) => {
      const sorted = [...data].sort((a, b) => {
        // 1. Сначала сортируем по 'is_best' (хиты вперед)
        if (b.is_best !== a.is_best) {
          return b.is_best - a.is_best;
        }
        // 2. сортируем по 'price' (от большему к меньшего )
        return b.price - a.price;
      });

      setTariffs(sorted);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tariffs.map((tariff, index) => (
        <div
          key={`${tariff.id}-${index}`}
          className={`${index === 0 ? "md:col-span-3" : "md:col-span-1"}`}
          // onClick={() => setSelectedId(tariff.id)} // это было бы логичнее, но прилитает одинаковый id с сервера
          onClick={() => setSelectedId(index)}
        >
          <Card
            tariff={tariff}
            isExpired={isExpired}
            // isSelected={selectedId === tariff.id}
            isSelected={selectedId === index}
          />
        </div>
      ))}
    </div>
  );
};

export default PriceOffers;
