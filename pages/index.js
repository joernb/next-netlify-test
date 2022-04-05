import Image from "next/image";
import imgPath from "../public/image.jpg";

export default function Home() {
  return (
    <div>
      <Image alt="" src={imgPath} width={3024} height={4032} />
    </div>
  );
}
