import Link from "next/link";
import Image from "next/image";
import img from "@/assets/img/logo.png";

function Logo() {
  return (
    <Link href="/">
      <Image src={img} alt="" />
    </Link>
  );
}

export default Logo;
