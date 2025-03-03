import Contacts from "./contacts";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex flex-col justify-center gap-4 p-4 text-center text-white"
    >
      {/* <p className="font-poiret text-4xl">Контакти</p> */}
      <Contacts />
      <p className="font-vibes text-6xl">Наталя М</p>
      <p className="font-poiret text-lg">
        &copy; {new Date().getFullYear()} Всі права захищені.
      </p>
    </div>
  );
};

export default Footer;
