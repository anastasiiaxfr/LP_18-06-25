import Image from "next/image";
import img1 from "@/assets/img/img6.png";
import i1 from "@/assets/img/icons/i3.svg";
import img2 from "@/assets/img/img8.png";
import i2 from "@/assets/img/icons/i2.svg";
import img3 from "@/assets/img/img5.png";
import i3 from "@/assets/img/icons/i1.svg";
import img4 from "@/assets/img/img10.png";
import i4 from "@/assets/img/icons/i4.svg";

function Section3() {
  return (
    <section className="section section_3">
      <div className="container">
        <div className="hgroup">
          <div className="label">🔥 services</div>
          <h2>Can Help You Achieve Financial Success</h2>
        </div>

        <article className="card card_1">
          <Image src={img1} alt="" className="mx-auto order-2 lg:order-1" />
          <div className="p-10 m-auto w-full order-1 lg:order-1">
            <Image src={i1} alt="" />
            <h3 className="mt-2 mb-0">Transfers across the globe are free</h3>
          </div>
        </article>
        <div className="row_2">
          <article className="card">
            <div className="p-10">
              <Image src={i2} alt="" />
              <h3 className="mt-2">
                Create A Card That Is Unique And Customized
              </h3>
              <p>
                we offer a comprehensive range of innovative financial services
                tailored to meet your needs. Our services include High-Yield
                Savings Accounts.
              </p>
            </div>
            <Image src={img2} alt="" className="mx-auto" />
          </article>
          <article className="card bg-5 text-white">
            <div className="p-10">
              <Image src={i3} alt="" />
              <h3 className="mt-2">
                Personalized Insights And Financial Goals
              </h3>
              <p>
                savings accounts that offer competitive interest rates and
                flexible deposit options. Investment Invest wisely with our
                personalized.Our services include High-Yield Savings
              </p>
            </div>
            <Image src={img3} alt="" className="mx-auto" />
          </article>
        </div>
        <div className="row_3">
          <article className="card bg-1 p-10">
            <h3>100% Dedication</h3>
            <p>
              we offer a comprehensive range of innovative financial services
              tailored to meet your needs.
            </p>
          </article>
          <article className="card grid">
            <Image
              src={img4}
              alt=""
              className="ml-auto mt-auto -z-0"
              style={{ gridArea: "1 / 1 / 2 / 2" }}
            />
            <div className="p-10 z-10" style={{ gridArea: "1 / 1 / 2 / 2" }}>
              <Image src={i4} alt="" />
              <h3 className="mt-2">Hold money in 30+ currencies</h3>
            </div>
          </article>
          <article className="card card_2">
            <h3>Visit Our Services page</h3>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Section3;
