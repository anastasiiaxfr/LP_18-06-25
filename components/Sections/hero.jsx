import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

import img from "@/assets/img/img1.png";

function Hero() {
  return (
    <section className="section section_hero">
      <div className="container">
        <div>
          <div className="label bg-white/20 border-transparent">
            🔥 100% TRUSTED PLATFORM
          </div>
          <h1>
            Finance with Security And <span>Flexibility</span>
          </h1>
          <p className="subtitle">
            No-fee checking account with cash back rewards. Enjoy fee-free
            banking and earn cash back on your everyday purchases.
          </p>
          <div className="btns">
            <Button asChild className="btn">
              <Link href="/">Open Account</Link>
            </Button>
            <Button variant="secondary" size="icon" className="btn-circle">
              <ArrowUpRight className="w-10 h-10" />
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image src={img} alt="" className="m-auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
