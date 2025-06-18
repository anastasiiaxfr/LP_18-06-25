import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo2.png";
import app1 from "@/assets/img/app1.png";
import app2 from "@/assets/img/app2.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container flex flex-col items-center">
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        <div className="btns mb-5">
          <Link href="/">
            <Image src={app1} alt="" />
          </Link>
          <Link href="/">
            <Image src={app2} alt="" />
          </Link>
        </div>

        <nav className="menu">
          <Link href="/">Personal Loan</Link>
          <Link href="/">One Card</Link>
          <Link href="/">Savings</Link>
          <Link href="/">Checking</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Help</Link>
          <Link href="/">Support</Link>
        </nav>

        <p className="mt-5">
          <b>Send Your Feedback:</b>{" "}
          <Link href="moc.edargpu@tcatnoc">moc.edargpu@tcatnoc</Link>
        </p>

        <nav className="flex gap-1 my-4">
          <Link href="/">Privacy Policy </Link> |
          <Link href="/">Terms & Condition</Link> |
          <Link href="/">Cookie Notice</Link> |
          <Link href="/">Copyright Policy</Link> |
          <Link href="/">Data Policy </Link>
        </nav>
        <p>© 2024 Design Monks. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
