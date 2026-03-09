const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 flex justify-center gap-[30px] rounded-[30px]">
      {/* <div className="border border-gray-600 rounded-2xl p-6 md:p-8 w-full"> */}
      <div className="border border-[1px] border-gray-600 rounded-[30px] p-[20px] w-full flex flex-col gap-[30px]">
        {/* Зеленый заголовок-тег */}

        <div
          className="inline-flex w-fit items-center justify-center 
             border border-[#81FE95] bg-[#2D3233] 
             rounded-[30px] px-[30px] py-[16px] 
             text-[28px] text-[#81FE95] font-medium"
        >
          гарантия возврата 30 дней
        </div>
        {/* Основной текст */}
        <p className="font-['Montserrat'] font-normal text-[24px] text-[#DCDCDC] leading-[140%]">
          Мы уверены, что наш план сработает для тебя и ты увидишь видимые
          результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
          деньги в течение 30 дней с момента покупки, если ты не получишь
          видимых результатов.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
