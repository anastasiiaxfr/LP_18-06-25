import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import i1 from "@/assets/img/icons/quote.svg";
import i2 from "@/assets/img/icons/stars.svg";
import img1 from "@/assets/img/comments/ava1.png";
import img2 from "@/assets/img/comments/ava2.png";
import img3 from "@/assets/img/comments/ava3.png";

function Testimonials() {
  return (
    <section className="section section_comments">
      <div className="container">
        <div className="hgroup">
          <div className="label">🔥 Testimonial</div>
          <h2>Get to Know Our Clients</h2>
        </div>

        <div className="items">
          <article className="item">
            <Image src={i1} alt="" />
            <div className="item_desc">
              I like getting the SMS & knowing the jobs done. I often refer to
              it, “hope you get a ping today!” because my product
            </div>
            <div className="item_info">
              <Image src={img1} alt="" />
              <div>
                <Image src={i2} alt="" />
                <p className="item_title">
                  <b>Mike Torello</b>
                </p>
                <p className="item_label">CEO of Initech</p>
              </div>
            </div>
          </article>

          <article className="item">
            <Image src={i1} alt="" />
            <div className="item_desc">
              We have successfully sold digital product and have happy with the
              results & look forward to using it again this.
            </div>
            <div className="item_info">
              <Image src={img2} alt="" />
              <div>
                <Image src={i2} alt="" />
                <p className="item_title">
                  <b>Richards Hawkins</b>
                </p>
                <p className="item_label">Marketing Manager of Upnow</p>
              </div>
            </div>
          </article>

          <article className="item">
            <Image src={i1} alt="" />
            <div className="item_desc">
              Design Monks offers producers a cost-effective selling tool.
              Having the ability to post prices that you want on an exchange
              visible .
            </div>
            <div className="item_info">
              <Image src={img3} alt="" />
              <div>
                <Image src={i2} alt="" />
                <p className="item_title">
                  <b>Thomas Magnum</b>
                </p>
                <p className="item_label">Barellon NSW</p>
              </div>
            </div>
          </article>
        </div>
        <div className="btns justify-center">
          <Button asChild className="btn-bd">
            <Link href="/">View More</Link>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="btn-circle bg-primary text-white hover:text-black"
          >
            <ArrowUpRight className="w-10 h-10" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
