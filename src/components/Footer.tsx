import Image from "next/image";
import Facebook from "../../public/facebook.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* top */}
      <div className="flex justify-between">
        {/* left */}
        <div className="w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Elle</div>
          </Link>
          <p>19 somerglen road south west</p>
          <span>aramkim37@gmail.com</span>
          <span>+1 403 996 4709</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
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
