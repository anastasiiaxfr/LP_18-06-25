import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import img from "@/assets/img/img4.png";

function Section2() {
  return (
    <section className="section section_2">
      <div className="container">
        <div className="row">
          <div>
            <Image src={img} alt="" className="m-auto md:m-0" />
          </div>
          <div>
            <div className="label bg-white/20 border-transparent">
              🔥 trustworthiness
            </div>
            <h2>We value your trust and security</h2>
            <p className="subtitle">
              Our mission is to make finance more accessible, transparent, and
              secure for everyone. With cutting.
            </p>
            <div className="btns">
              <Button asChild className="btn">
                <Link href="/">Get Started</Link>
              </Button>
              <Button variant="secondary" size="icon" className="btn-circle">
                <ArrowUpRight className="w-10 h-10" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
