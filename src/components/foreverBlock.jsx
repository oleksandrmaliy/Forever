import { nanoid } from "nanoid";
// const id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
// import q from "../assets/images/thumbs/bee.png";
import forever4 from "../assets/images/forever4.jpg";

import { foreverLinks } from "../constants/foreverLinks.js";

const ForeverBlock = () => {
  return (
    <div className="mx-8 mb-8 grid grid-cols-4 gap-8 border-4 border-red-500 bg-sky-200 p-8">
      <div className="relative">
        <img
          src={forever4}
          alt="Опис фото"
          className="relative -top-8 w-full rounded-full border-8 border-white shadow-all-green"
        />
      </div>
      <div className="col-span-3">
        <p className="mb-8 indent-14">
          Forever Living Products – міжнародний лідер у виробництві продукції на
          основі алое вера Forever Living Products – це американська компанія,
          заснована у 1978 році в місті Скоттсдейл, штат Аризона. Вона
          спеціалізується на вирощуванні, виробництві та дистрибуції продуктів
          на основі алое вера, а також пропонує широкий асортимент харчових
          добавок, засобів догляду за шкірою та іншої продукції для здоров’я.
          Основні факти про компанію: ✅ Рік заснування: 1978 ✅ Засновник: Рекс
          Моан (Rex Maughan) ✅ Штаб-квартира: Скоттсдейл, Аризона, США ✅
          Діяльність: Виробництво та продаж продукції для здоров’я та краси ✅
          Продукція: Напої з алое вера, біологічно активні добавки, косметика,
          продукти бджільництва ✅ Мережа дистрибуції: Понад 160 країн
          Виробництво та якість Forever Living Products володіє власними
          плантаціями алое вера, що дозволяє контролювати кожен етап виробництва
          – від вирощування рослин до кінцевого продукту. Вся продукція
          проходить суворий контроль якості, а компанія дотримується міжнародних
          стандартів сертифікації. Основні напрямки продукції 🌿 Гелі алое вера
          – натуральні напої для зміцнення імунітету та підтримки здоров’я. 🍯
          Продукти бджільництва – мед, маточне молочко, прополіс. 💊 Харчові
          добавки – вітаміни та мінерали для підтримки організму. 💆‍♀️ Косметика –
          креми, лосьйони, засоби догляду за шкірою та волоссям. 🏋️ Програми
          детоксу та контролю ваги – комплексні рішення для здорового способу
          життя. Бізнес-модель та принципи Forever Living Products працює за
          моделлю мережевого маркетингу (MLM), що дозволяє незалежним
          дистриб’юторам розвивати власний бізнес, продаючи продукцію компанії.
          Основні принципи компанії: Висока якість продукції Природні компоненти
          Інноваційні технології виробництва Глобальна екологічна
          відповідальність Forever Living Products залишається одним із
          найбільших виробників продукції на основі алое вера у світі,
          пропонуючи натуральні та ефективні рішення для здорового способу
          життя. 🌱💚
        </p>
        <div className="border-4 border-red-500">
          <ul className="grid grid-cols-3 gap-8">
            {foreverLinks.map(({ title, url, thumb }) => (
              <li key={nanoid()} className="bg-blue-300 p-4 hover:bg-red-300">
                <a
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <img
                    src={thumb}
                    alt="Avatar"
                    className="h-auto w-24 rounded-full border-4 border-red-500"
                  />
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
