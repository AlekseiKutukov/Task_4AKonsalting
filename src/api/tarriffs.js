const API_URL = "https://t-core.fit-hub.pro/Test/GetTariffs";

export const getTariffs = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Не удалось загрузить тарифы:", error);
    // Возвращаем пустой массив, чтобы приложение не "падало" при итерации
    return [];
  }
};

/* Расчет скидки */
// Не соответствует макету, но у нас другие цифры с сервера
export const calculateDiscount = (price, fullPrice) => {
  if (!fullPrice || fullPrice === 0) return 0;
  const discount = ((fullPrice - price) / fullPrice) * 100;
  return Math.round(discount / 10) * 10;
};
