import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import forever4 from "../assets/images/forever4.jpg";

import { foreverLinks } from "../constants/foreverLinks.js";

const useScrollDirection = () => {
  const [direction, setDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setDirection("up");
      }
      setLastScrollY(currentScrollY);
      setTrigger((prev) => prev + 1); // Змінюємо trigger кожного разу
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { direction, trigger };
};

const ForeverBlock = () => {
  const [showText, setShowText] = useState(false);
  const [effect, setEffect] = useState(false);

  const [animationStage, setAnimationStage] = useState("center");

  const { direction: scrollDirection, trigger } = useScrollDirection();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const identity = "forever";

  useEffect(() => {
    if (effect & !showText) {
      document.getElementById(identity)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [showText, effect]);

  useEffect(() => {
    if (!inView || !scrollDirection) return;

    setAnimationStage("move-30");

    setTimeout(() => {
      setAnimationStage("overshoot-10");

      setTimeout(() => {
        setAnimationStage("center");
      }, 300);
    }, 300);
  }, [trigger, inView, scrollDirection]); // Додаємо `trigger` для перезапуску анімації при кожному скролі

  const getTranslateY = () => {
    switch (animationStage) {
      case "move-30":
        return scrollDirection === "down" ? "30%" : "-30%";
      case "overshoot-10":
        return scrollDirection === "down" ? "-5%" : "5%";
      default:
        return "0%";
    }
  };

  const handleClick = () => {
    setShowText(!showText);
    setEffect(true);
  };

  return (
    <div
      id="forever"
      className="xk:p-8 mx-8 mb-4 grid grid-cols-1 gap-4 border-4 border-red-500 bg-sky-100 p-4 sm:mb-5 sm:gap-5 sm:p-5 md:mb-6 md:grid-cols-3 md:p-6 lg:mb-7 lg:p-7 xl:mb-8"
    >
      <div className="relative border-4 border-red-500">
        <motion.div
          ref={ref}
          className="sticky top-[calc(50%-150px)] mx-auto flex h-auto w-1/2 items-center justify-center md:w-2/3"
          animate={{ y: getTranslateY() }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <img
            src={forever4}
            alt="Опис фото"
            className="w-full rounded-full border-8 border-white"
          />
        </motion.div>
        {/* <div className="sticky top-[calc(50%-150px)] mx-auto w-2/3">
          <img
            src={forever4}
            alt="Опис фото"
            className="w-full rounded-full border-8 border-white"
          />
        </div> */}
      </div>

      <div className="col-span-2 flex flex-col justify-between">
        <div className="mb-4">
          <div className="mb-4">
            <p className="mb-4">
              <b>
                Forever Living Products – міжнародний лідер у виробництві
                продукції на основі алое вера
              </b>
            </p>
            <p className="mb-4">
              Forever Living Products – це американська компанія, заснована у
              1978 році в місті Скоттсдейл, штат Аризона. Вона спеціалізується
              на вирощуванні, виробництві та дистрибуції продуктів на основі
              алое вера, а також пропонує широкий асортимент харчових добавок,
              засобів догляду за шкірою та іншої продукції для здоров’я.
            </p>

            {showText && (
              <div>
                <p>
                  <b> Основні факти про компанію:</b>
                </p>
                <ul className="mb-4">
                  <li> ✅ Рік заснування: 1978</li>
                  <li> ✅ Засновник: Рекс Моан (Rex Maughan)</li>
                  <li> ✅ Штаб-квартира: Скоттсдейл, Аризона, США</li>
                  <li>
                    ✅ Діяльність: Виробництво та продаж продукції для здоров’я
                    та краси
                  </li>
                  <li>
                    ✅ Продукція: Напої з алое вера, біологічно активні добавки,
                    косметика, продукти бджільництва
                  </li>
                  <li> ✅ Мережа дистрибуції: Понад 160 країн </li>
                </ul>
                <p className="mb-4">
                  Виробництво та якість Forever Living Products володіє власними
                  плантаціями алое вера, що дозволяє контролювати кожен етап
                  виробництва – від вирощування рослин до кінцевого продукту.
                  Вся продукція проходить суворий контроль якості, а компанія
                  дотримується міжнародних стандартів сертифікації.
                </p>
                {/* <p>
                  <b> Основні напрямки продукції</b>
                </p>
                <ul className="mb-4">
                  <li>
                    🌿 Гелі алое вера – натуральні напої для зміцнення імунітету
                    та підтримки здоров’я.
                  </li>
                  <li>
                   
                    🍯 Продукти бджільництва – мед, маточне молочко,
                    прополіс.{" "}
                  </li>
                  <li>
                    💊 Харчові добавки – вітаміни та мінерали для підтримки
                    організму.
                  </li>
                  <li>
                    💆‍♀️ Косметика – креми, лосьйони, засоби догляду за шкірою та
                    волоссям.
                  </li>
                  <li>
                    🏋️ Програми детоксу та контролю ваги – комплексні рішення
                    для здорового способу життя.
                  </li>
                </ul> */}
                <p className="mb-4">
                  Бізнес-модель та принципи Forever Living Products працює за
                  моделлю мережевого маркетингу (MLM), що дозволяє незалежним
                  дистриб’юторам розвивати власний бізнес, продаючи продукцію
                  компанії.
                </p>
                <p>
                  <b> Основні принципи компанії: </b>
                </p>
                <ul className="mb-4">
                  <li>1️⃣ Висока якість продукції </li>
                  <li>2️⃣ Природні компоненти</li>
                  <li>3️⃣ Інноваційні технології виробництва </li>
                  <li>4️⃣ Глобальна екологічна відповідальність</li>
                </ul>
                <p>
                  Forever Living Products залишається одним із найбільших
                  виробників продукції на основі алое вера у світі, пропонуючи
                  натуральні та ефективні рішення для здорового способу життя.
                  🌱💚
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-center text-blue-500">
            <button onClick={handleClick}>
              {showText ? "Згорнути" : "Читати більше..."}
            </button>
          </div>
        </div>

        <div className="mt-auto border-4 border-red-500">
          <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:grid-cols-3 xl:gap-8">
            {foreverLinks.map(({ title, url }) => (
              <li
                key={nanoid()}
                className="bg-forevercolor p-4 hover:bg-red-300"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center"
                >
                  {/* <img
                    src={thumb}
                    alt="Avatar"
                    className="h-auto w-24 rounded-full border-4 border-red-500"
                  /> */}
                  <p className="flex h-full w-full items-center justify-center text-center">
                    {title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForeverBlock;
