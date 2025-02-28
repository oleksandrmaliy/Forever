// import { nanoid } from "nanoid";
// const id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
// import q from "../assets/images/thumbs/bee.png";
import retailStore2 from "../assets/images/retailStore2.jpg";
import retailStore1 from "../assets/images/retailStore1.png";

// import { storeLinks } from "../constants/storeLinks.js";

const ShopBlock = () => {
  return (
    <div className="">
      <div className="mx-8 mb-8 grid grid-cols-4 gap-8 border-4 border-red-500 bg-sky-200 p-8">
        <div className="relative">
          <img
            src={retailStore2}
            alt="Store"
            className="relative -top-8 w-full rounded-full border-8 border-white shadow-all-green"
          />
        </div>
        <div className="col-span-3">
          <p className="mb-8 indent-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad
            in debitis autem nesciunt aspernatur facere sit voluptates? Vitae
            ratione optio deserunt veritatis laudantium nulla asperiores
            recusandae officiis, odio obcaecati. Ullam nisi maiores corrupti
            quis ut voluptas? Architecto suscipit nobis perspiciatis incidunt
            deleniti, voluptatem blanditiis beatae pariatur velit dolor. Earum,
            dolor ipsum saepe numquam non mollitia voluptatum fugit eos
            voluptatem! Saepe qui quod, quos vitae obcaecati consectetur earum
            eos nobis totam molestias repudiandae? Possimus ex natus, corporis
            quos magni libero amet earum eum odio dolore! Dolorum consectetur
            veritatis iusto dignissimos! Deleniti in, non velit, a esse nemo
            quaerat numquam veniam eligendi ipsum ab ipsa fugiat unde ratione
            saepe sunt ducimus impedit repellendus accusamus eius iusto odio.
            Explicabo esse aliquam porro. Quam, enim amet tempore voluptate
            vitae molestias pariatur necessitatibus aspernatur a molestiae
            asperiores velit voluptatum et assumenda quis debitis nesciunt
            veritatis doloribus dolorem voluptates. Sint fugiat modi ad eaque
            illum!
          </p>

          <div className="border-4 border-red-500">
            <a
              href="https://380500014529.flpuretail.com/uk/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="flex items-center gap-4 bg-blue-300 p-4 hover:bg-red-300"
            >
              <img
                src={retailStore1}
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
    </div>
  );
};

export default ShopBlock;
