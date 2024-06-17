import Image from "next/image";
import Facebook from "../../public/facebook.png";

const Footer = () => {
  return (
    <div>
      {/* top */}
      <div>
        {/* left */}
        <div className="w-1/4 mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col  gap-5">
          <h1 className="text-2xl font-semibold">ELLE</h1>
          <p>19 somerglen road sw</p>
          <p>aramkim@gmail.com</p>
          <p>+1 403 996 4709</p>
          <div className="flex w-full gap-3">
            <Image src={Facebook} alt="" width={20} height={20} />
            <Image src={Facebook} alt="" width={20} height={20} />
            <Image src={Facebook} alt="" width={20} height={20} />
            <Image src={Facebook} alt="" width={20} height={20} />
            <Image src={Facebook} alt="" width={20} height={20} />
            <Image src={Facebook} alt="" width={20} height={20} />
          </div>
          <div className="w-full">
            <p>@2024 Elle shop</p>
          </div>
        </div>
        {/* center */}
        <div className="w-1/2"></div>
        {/* right */}
        <div className="w-1/4"></div>
      </div>
      {/* bottom */}
      <div></div>
    </div>
  );
};

export default Footer;
