import { nanoid } from "nanoid";
// const id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
// import q from "../assets/images/thumbs/bee.png";
import foreverCo from "../assets/images/foreverCo.jpg";

import { foreverLinks } from "../constants/foreverLinks.js";

const ForeverBlock = () => {
  return (
    <div className="mb-8 flex min-h-96 flex-col gap-8 bg-redcolor p-8">
      <div className="">
        <img
          src={foreverCo}
          alt="Опис фото"
          className="float-left mr-4 mb-2 h-auto w-1/5 rounded-md"
        />
        <p className="text-justify indent-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
          nisl ac nunc efficitur eleifend. Aenean nec eros sed ipsum dictum
          tincidunt. Maecenas in nibh et justo sagittis tincidunt. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vestibulum luctus, lorem id venenatis eleifend, eros
          odio fermentum lorem, sit amet dapibus felis quam eu ligula. Duis ut
          dui nec nunc suscipit condimentum. Sed vel nunc mi. Suspendisse ut
          ligula non quam porttitor ullamcorper. Donec nec purus ut lorem
          venenatis rhoncus. Forever Living Products – це міжнародна компанія,
          заснована у 1978 році, яка спеціалізується на виробництві та продажу
          продукції на основі алое вера. Компанія пропонує широкий асортимент
          товарів для здоров’я, краси та догляду за тілом, включаючи напої,
          косметику, харчові добавки та засоби для догляду за шкірою. Forever
          Living працює за принципом мережевого маркетингу, що дозволяє її
          дистриб’юторам будувати власний бізнес та розповсюджувати продукцію в
          більш ніж 160 країнах світу. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec vitae nisl ac nunc efficitur eleifend. Aenean
          nec eros sed ipsum dictum tincidunt. Maecenas in nibh et justo
          sagittis tincidunt. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Vestibulum luctus, lorem
          id venenatis eleifend, eros odio fermentum lorem, sit amet dapibus
          felis quam eu ligula. Duis ut dui nec nunc suscipit condimentum. Sed
          vel nunc mi. Suspendisse ut ligula non quam porttitor ullamcorper.
          Donec nec purus ut lorem venenatis rhoncus. Forever Living Products –
          це міжнародна компанія, заснована у 1978 році, яка спеціалізується на
          виробництві та продажу продукції на основі алое вера. Компанія
          пропонує широкий асортимент товарів для здоров’я, краси та догляду за
          тілом, включаючи напої, косметику, харчові добавки та засоби для
          догляду за шкірою. Forever Living працює за принципом мережевого
          маркетингу, що дозволяє її дистриб’юторам будувати власний бізнес та
          розповсюджувати продукцію в більш ніж 160 країнах світу.
        </p>
      </div>

      <div className="border-4 border-red-500 bg-backcolor p-8">
        <ul className="grid grid-cols-3 gap-8">
          {foreverLinks.map(({ title, url, thumb }) => (
            <li key={nanoid()} className="bg-blue-300 p-4">
              <a
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-4"
              >
                <img
                  src={thumb}
                  alt="Avatar"
                  className="h-auto w-24 border-4 border-red-500"
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
  );
};

export default ForeverBlock;
