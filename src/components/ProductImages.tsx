import Image from "next/image";

export const ProductImages = () => {
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div>
        <div>
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>
        <div>
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>
        <div>
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
