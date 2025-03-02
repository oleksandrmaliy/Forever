import { FiPhoneCall } from "react-icons/fi";
import { RiTelegramLine } from "react-icons/ri";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";

const Contacts = () => {
  const classname = "size-20 text-white";
  return (
    <div className="mb-8 flex justify-center">
      <div className="mx-auto flex flex-row gap-4">
        <a href="tel:+380509967575">
          <FiPhoneCall className={classname} />
        </a>
        <a
          href="https://t.me/+380509967575"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTelegramLine className={classname} />
        </a>
        <a
          href="https://wa.me/380509967575?text=Привіт!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={classname} />
        </a>
        <a
          href="https://m.me/username_or_id"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiMessengerLine className={classname} />
        </a>
        <a
          href="viber://chat?number=%2B380509967575"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaViber className={classname} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
