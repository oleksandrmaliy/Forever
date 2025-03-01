import { useState, useEffect } from "react";

import natalya from "../assets/images/natalya.jpg";
import phone from "../assets/images/phone.jpg";

const HeroBlock = () => {
  const [showText, setShowText] = useState(false);
  const [effect, setEffect] = useState(false);

  const identity = "hero";

  useEffect(() => {
    if (effect & !showText) {
      document.getElementById(identity)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [effect, showText]);

  const handleClick = () => {
    setShowText(!showText);
    setEffect(true);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="hero"
      className="mb-8 grid min-h-110 w-full grid-cols-3 gap-8 border-4 border-red-500 bg-green-100 p-8"
    >
      <div className="relative">
        <img
          src={natalya}
          alt="Natalya"
          className="absolute -top-24 -left-0 w-full rounded-full border-8 border-white shadow-all-green"
        />
      </div>

      {/* sm:-top-8 md:-top-12 lg:-top-24 xl:-top-48 2xl:-top-60 */}
      <div className="col-span-2 flex min-h-full flex-col justify-between">
        <div className="mb-4 text-xl">
          <div className="mb-4">
            <p className="indent-14">
              <b> Вітаю вас!</b>
            </p>
            <p className="indent-14">
              Мене звати Наталя, і я – підприємець компанії Forever. Два роки
              тому я зробила важливий вибір – розпочати власну справу, яка не
              лише приносить дохід, а й наповнює моє життя сенсом та свободою.
            </p>
            {showText && (
              <div>
                <p className="indent-14">
                  Коли я вперше познайомилася з продукцією Forever, мене вразила
                  її якість і натуральний склад. Я зрозуміла, що хочу не просто
                  користуватися нею сама, а й ділитися цими унікальними
                  продуктами з іншими. Так і почався мій шлях у бізнесі, який
                  відкрив переді мною безліч можливостей.
                </p>
                <p className="indent-14">
                  Сьогодні я з упевненістю можу сказати, що Forever – це більше,
                  ніж просто продукція. Це стиль життя, це можливість
                  піклуватися про своє здоров’я, виглядати чудово та почуватися
                  енергійною кожного дня. Крім того, це шанс для кожного, хто
                  хоче змінити своє життя та знайти фінансову незалежність.
                </p>
                <p className="indent-14">
                  Якщо ви хочете спробувати якісну продукцію Forever або
                  дізнатися більше про можливості, які вона відкриває, буду рада
                  допомогти вам підібрати ідеальний варіант саме для вас.
                  Напишіть мені – з радістю поділюся своїм досвідом та підкажу
                  найкраще рішення для ваших потреб!
                </p>
                <br />
                <p className="indent-14">
                  <b>Вітаю вас!</b>
                </p>
                <p className="indent-14">
                  Мене звати Наталя, і я підприємець компанії Forever. Два роки
                  тому я вирішила розпочати власну справу, яка дозволяє мені
                  поєднувати якісні продукти для здоров’я та можливість
                  розвитку.
                </p>
                <p className="indent-14">
                  Продукція Forever привернула мою увагу своїм натуральним
                  складом і високими стандартами якості. Я спробувала її сама,
                  переконалася в результатах і вирішила поділитися цим з іншими.
                  Так я прийшла до бізнесу, який став для мене не лише роботою,
                  а й способом зробити щось корисне для людей.
                </p>
                <p className="indent-14">
                  Forever – це можливість підтримувати здоров’я, доглядати за
                  собою та обирати якісні продукти. Якщо вам цікаво дізнатися
                  більше або спробувати продукцію, буду рада відповісти на
                  запитання та допомогти з вибором.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="cursor-pointer text-green-500"
            >
              {showText ? "Згорнути" : "Читати більше..."}
            </button>
          </div>
        </div>
        <div className="mt-auto border-4 border-red-500">
          <button
            onClick={scrollToFooter}
            className="flex w-full items-center gap-4 bg-blue-300 p-4 hover:bg-red-300"
          >
            <img
              src={phone}
              alt="Avatar"
              className="h-auto w-24 rounded-full border-4 border-red-500"
            />
            <p className="flex h-full w-full items-center justify-center text-center">
              Зв&apos;яжіться зі мною
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;

// import natalya from "../assets/images/natalya.jpg";

// const HeroBlock = () => {
//   return (
//     <div className="relative mb-8 grid w-full grid-cols-3 gap-16 bg-[url('/aloeCorner.jpg')] bg-cover bg-center px-4 py-8 before:absolute before:inset-0 before:bg-white/50 before:backdrop-blur-sm before:content-['']">
//       <div className="relative -top-32 flex justify-center">
//         <img
//           src={natalya}
//           alt="Photo"
//           className="relative z-10 h-auto w-full rounded-full border-8 border-backcolor shadow-all-green"
//         />
//       </div>
//       <div className="relative z-10 col-span-2 flex items-center">
//         <p className="indent-14 text-xl">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
//           doloremque eos non excepturi exercitationem rerum dolores quam numquam
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HeroBlock;
