import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import img from "@/assets/img/img3.jpg";

function Section1() {
  return (
    <section className="section section_1">
      <div className="container">
        <div className="row">
          <div className="order-2 md:order-1">
            <div>
              <div className="label">🔥 featured</div>
            </div>
            <h2>All the features in one app</h2>
            <ul className="list">
              <li>
                Get 3% cash back on everyday purchases, 2% on everything else4
              </li>
              <li>
                Extra Spending Power when you have Rewards Checking through
                Upgrade6
              </li>
            </ul>
            <div className="btns">
              <Button asChild className="btn-bd">
                <Link href="/">Get Started</Link>
              </Button>
              <Button variant="secondary" size="icon" className="btn-circle">
                <ArrowUpRight className="w-10 h-10" />
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Image src={img} alt="" className="m-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
