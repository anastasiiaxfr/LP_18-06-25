import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import img from "@/assets/img/img7.png";

function Cta() {
  return (
    <section className="section section_cta">
      <div className="container">
        <div className="cta">
          <div className="p-10 m-auto">
            <h2>Are you ready to start?</h2>
            <p className="subtitle">
              Personalize your settings, follow your progress, archive your
              highlights and notes automatically Glose is the ultimate reading
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
          <div className="cta_img">
            <Image src={img} alt="" className="mx-auto mt-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
