import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import retailStore2 from "../assets/images/retailStore2.jpg";

const useScrollTrigger = () => {
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setTrigger((prev) => prev + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return trigger;
};

const ShopBlock = () => {
  const [showText, setShowtext] = useState(false);
  const [effect, setEffect] = useState(false);

  const scrollTrigger = useScrollTrigger();
  const [animationStage, setAnimationStage] = useState("normal");

  // Відстежуємо, чи дів2 у вьюпорті
  const { ref, inView } = useInView({
    triggerOnce: false, // Завжди відстежуємо видимість
    threshold: 0.1, // 10% блоку має бути видно
  });

  const identity = "shop";

  useEffect(() => {
    if (effect & !showText) {
      document.getElementById(identity)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [showText, effect]);

  useEffect(() => {
    if (!inView) return; // Запускаємо анімацію тільки якщо div2 у вьюпорті

    setAnimationStage("scale-up");

    setTimeout(() => {
      // setAnimationStage("scale-down");
      setAnimationStage("normal");
      // setTimeout(() => {

      // }, 300);
    }, 300);
  }, [scrollTrigger, inView]);

  const getScale = () => {
    switch (animationStage) {
      case "scale-up":
        return 1.1;
      case "scale-down":
        return 0.95;
      default:
        return 1;
    }
  };

  const handleClick = () => {
    setShowtext(!showText);
    setEffect(true);
  };

  return (
    <div
      id="shop"
      className="mx-8 mb-4 grid grid-cols-1 bg-sky-100 p-4 sm:mb-5 sm:p-5 md:mb-6 md:grid-cols-3 md:gap-6 md:p-6 lg:mb-7 lg:gap-7 lg:p-7 xl:mb-8 xl:gap-8 xl:p-8"
      // className="mb-8 grid min-h-110 w-full grid-cols-1 border-4 border-red-500 bg-green-100 p-4 md:grid-cols-3 md:gap-8 md:p-6 lg:p-7 xl:p-8"
    >
      <div className="relative mb-4 sm:mb-5 md:mb-0">
        <motion.div
          ref={ref} // Додаємо ref для відстеження видимості
          className="sticky top-[calc(50%-150px)] mx-auto flex h-auto w-1/2 items-center justify-center md:w-2/3"
          animate={{ scale: getScale() }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <img
            src={retailStore2}
            alt="Store"
            className="w-full rounded-full border-8 border-white"
          />
        </motion.div>
      </div>

      <div className="col-span-2 flex flex-col justify-between">
        <div className="mb-4">
          <div className="mb-4">
            <p className="mb-4">
              <b>Онлайн магазин роздрібної торгівлі</b>
            </p>
            <p className="mb-4">
              <b>Forever Living Products</b> – це міжнародний бренд, що
              спеціалізується на виробництві та продажу натуральних продуктів на
              основі алое вера. Продукція компанії допомагає підтримувати
              здоров&apos;я, красу та гарне самопочуття.
            </p>

            {showText && (
              <div>
                <p>
                  <b>Асортимент продукції</b>
                </p>
                <ul className="mb-4">
                  <li>
                    Гелі алое вера – натуральні напої для зміцнення імунітету та
                    покращення травлення.
                  </li>
                  <li>
                    Косметика та догляд за шкірою – креми, лосьйони, гелі для
                    обличчя та тіла з доглядовими компонентами.
                  </li>
                  <li>
                    Харчові добавки – вітаміни, мінерали та біологічно активні
                    речовини для підтримки організму.
                  </li>
                  <li>
                    Продукти бджільництва – натуральні медові продукти для
                    енергії та імунітету.
                  </li>
                  <li>
                    Програми детоксу та контролю ваги – комплекси для здорового
                    способу життя.
                  </li>
                </ul>
                <p>
                  <b>Переваги покупки у нас</b>
                </p>
                <ul className="mb-4">
                  <li>
                    Гарантія якості – продукція сертифікована та має високу
                    якість.
                  </li>
                  <li>
                    Безпосереднє постачання – товари надходять від офіційного
                    дистриб’ютора, без посередників.
                  </li>
                  <li>
                    Гнучка система знижок – постійним клієнтам надаються
                    спеціальні пропозиції.
                  </li>
                  <li>
                    Швидка доставка – оперативна обробка замовлень і відправка
                    по всій країні.
                  </li>
                  <li>
                    Персональні консультації – допомога у виборі продукції
                    відповідно до потреб.
                  </li>
                </ul>
                <p>
                  <b> Як зробити замовлення</b>
                </p>
                <ul className="mb-4">
                  <li>Оберіть потрібні товари в каталозі.</li>
                  <li>Додайте їх до кошика та оформіть замовлення.</li>
                  <li>Оберіть зручний спосіб доставки та оплати.</li>
                  <li>
                    Отримайте свою продукцію та насолоджуйтесь користю
                    натуральних компонентів!
                  </li>
                </ul>
                <p>
                  Залишайтесь здоровими та красивими разом із Forever Living
                  Products!
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="cursor-pointer text-blue-500"
            >
              {showText ? "Згорнути" : "Читати більше..."}
            </button>
          </div>
        </div>

        <div className="mt-auto">
          <a
            href="https://380500014529.flpuretail.com/uk/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center gap-4 bg-blue-300 p-4 hover:bg-red-300"
          >
            <p className="flex h-full w-full items-center justify-center text-center font-bold">
              Перейти до магазину
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopBlock;
