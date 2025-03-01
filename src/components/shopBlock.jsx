import { useState, useEffect } from "react";

import retailStore2 from "../assets/images/retailStore2.jpg";
import shop from "../assets/images/shop.jpg";

// import { storeLinks } from "../constants/storeLinks.js";

const ShopBlock = () => {
  const [showText, setShowtext] = useState(false);
  const [effect, setEffect] = useState(false);

  const identity = "shop";

  useEffect(() => {
    if (!effect) {
      return;
    } else if (!showText) {
      document.getElementById(identity)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [showText, effect]);

  const handleClick = () => {
    setShowtext(!showText);
    setEffect(true);
  };

  return (
    <div
      id="shop"
      className="mx-8 mb-8 grid grid-cols-4 gap-8 border-4 border-red-500 bg-sky-100 p-8"
    >
      <div className="relative">
        <img
          src={retailStore2}
          alt="Store"
          className="relative -top-12 w-full rounded-full border-8 border-white shadow-all-green"
        />
      </div>
      <div className="col-span-3 flex min-h-full flex-col justify-between">
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
                    ❤️ Гелі алое вера – натуральні напої для зміцнення імунітету
                    та покращення травлення.
                  </li>
                  <li>
                    ❤️ Косметика та догляд за шкірою – креми, лосьйони, гелі для
                    обличчя та тіла з доглядовими компонентами.
                  </li>
                  <li>
                    ❤️ Харчові добавки – вітаміни, мінерали та біологічно
                    активні речовини для підтримки організму.
                  </li>
                  <li>
                    ❤️ Продукти бджільництва – натуральні медові продукти для
                    енергії та імунітету.
                  </li>
                  <li>
                    ❤️ Програми детоксу та контролю ваги – комплекси для
                    здорового способу життя.
                  </li>
                </ul>
                <p>
                  <b>Переваги покупки у нас</b>
                </p>
                <ul className="mb-4">
                  <li>
                    ✅ Гарантія якості – продукція сертифікована та має високу
                    якість.
                  </li>
                  <li>
                    ✅ Безпосереднє постачання – товари надходять від офіційного
                    дистриб’ютора, без посередників.
                  </li>
                  <li>
                    ✅ Гнучка система знижок – постійним клієнтам надаються
                    спеціальні пропозиції.
                  </li>
                  <li>
                    ✅ Швидка доставка – оперативна обробка замовлень і
                    відправка по всій країні.
                  </li>
                  <li>
                    ✅ Персональні консультації – допомога у виборі продукції
                    відповідно до потреб.
                  </li>
                </ul>
                <p>
                  <b> Як зробити замовлення</b>
                </p>
                <ul className="mb-4">
                  <li> 1️⃣ Оберіть потрібні товари в каталозі.</li>
                  <li> 2️⃣ Додайте їх до кошика та оформіть замовлення.</li>
                  <li> 3️⃣ Оберіть зручний спосіб доставки та оплати.</li>
                  <li>
                    4️⃣ Отримайте свою продукцію та насолоджуйтесь користю
                    натуральних компонентів!
                  </li>
                </ul>
                <p>
                  Залишайтесь здоровими та красивими разом із Forever Living
                  Products! 💚
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="cursor-pointer text-green-800"
            >
              {showText ? "Згорнути" : "Читати більше..."}
            </button>
          </div>
        </div>

        <div className="mt-auto border-4 border-red-500">
          <a
            href="https://380500014529.flpuretail.com/uk/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center gap-4 bg-blue-300 p-4 hover:bg-red-300"
          >
            <img
              src={shop}
              alt="Avatar"
              className="h-auto w-24 rounded-full border-4 border-red-500"
            />
            <p className="flex h-full w-full items-center justify-center text-center">
              Перейти до магазину
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopBlock;
