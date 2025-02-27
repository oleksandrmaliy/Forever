import { nanoid } from "nanoid";
// const id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
// import q from "../assets/images/thumbs/bee.png";

import { storeLinks } from "../constants/storeLinks.js";

const ShopBlock = () => {
  return (
    <div className="mb-8 flex flex-col gap-8 bg-blue-500 p-8">
      <div className="border-4 border-red-500">
        <p className="indent-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad
          in debitis autem nesciunt aspernatur facere sit voluptates? Vitae
          ratione optio deserunt veritatis laudantium nulla asperiores
          recusandae officiis, odio obcaecati. Ullam nisi maiores corrupti quis
          ut voluptas? Architecto suscipit nobis perspiciatis incidunt deleniti,
          voluptatem blanditiis beatae pariatur velit dolor. Earum, dolor ipsum
          saepe numquam non mollitia voluptatum fugit eos voluptatem! Saepe qui
          quod, quos vitae obcaecati consectetur earum eos nobis totam molestias
          repudiandae? Possimus ex natus, corporis quos magni libero amet earum
          eum odio dolore! Dolorum consectetur veritatis iusto dignissimos!
          Deleniti in, non velit, a esse nemo quaerat numquam veniam eligendi
          ipsum ab ipsa fugiat unde ratione saepe sunt ducimus impedit
          repellendus accusamus eius iusto odio. Explicabo esse aliquam porro.
          Quam, enim amet tempore voluptate vitae molestias pariatur
          necessitatibus aspernatur a molestiae asperiores velit voluptatum et
          assumenda quis debitis nesciunt veritatis doloribus dolorem
          voluptates. Sint fugiat modi ad eaque illum!
        </p>
      </div>

      <div className="border-4 border-red-500 bg-backcolor p-8">
        <ul className="grid grid-cols-3 gap-8">
          {storeLinks.map(({ title, url, thumb }) => (
            <li key={nanoid()} className="bg-blue-300 p-4 first:col-span-3">
              <a
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-4"
              >
                <img
                  src={thumb}
                  alt="Avatar"
                  className="h-auto w-24 border-4 border-red-500 p-1"
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

export default ShopBlock;
