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
          Forever Living Products – це міжнародна компанія, заснована у 1978
          році, яка спеціалізується на виробництві та продажу продукції на
          основі алое вера. Компанія пропонує широкий асортимент товарів для
          здоров’я, краси та догляду за тілом, включаючи напої, косметику,
          харчові добавки та засоби для догляду за шкірою. Forever Living працює
          за принципом мережевого маркетингу, що дозволяє її дистриб’юторам
          будувати власний бізнес та розповсюджувати продукцію в більш ніж 160
          країнах світу. Forever Living Products – це міжнародна компанія,
          заснована у 1978 році, яка спеціалізується на виробництві та продажу
          продукції на основі алое вера. Компанія пропонує широкий асортимент
          товарів для здоров’я, краси та догляду за тілом, включаючи напої,
          косметику, харчові добавки та засоби для догляду за шкірою. Forever
          Living працює за принципом мережевого маркетингу, що дозволяє її
          дистриб’юторам будувати власний бізнес та розповсюджувати продукцію в
          більш ніж 160 країнах світу.
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
