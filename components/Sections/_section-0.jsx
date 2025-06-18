import Image from "next/image";
import img from "@/assets/img/img2.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const data = [
  {
    title: "Expenses Tracker",
    desc: "Our comprehensive selection of medications, supplements, and healthcare products.",
  },
  {
    title: "Crypto Connection",
    desc: "From advanced imaging technology such as MRI and CT scanners to precision surgical tools.",
  },
  {
    title: "Automated Invoicing ",
    desc: "We're committed to leveraging the latest innovations in medical technology.",
  },
];

function Section0() {
  return (
    <section className="section section_0">
      <div className="container">
        <Tabs defaultValue={0} className="tabs">
          <div className="w-full h-full lg:w-1/2">
            {data.map((_, ind) => (
              <TabsContent value={ind} key={ind}>
                <div className="bg-gray-100 p-10 rounded-2xl">
                  <Image
                    src={img}
                    alt="Payments preview"
                    className="rounded-lg m-auto"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
          <div className="w-full h-full lg:w-1/2">
            <div className="label">🔥 About Us</div>
            <h2>All your money needs in one app</h2>

            <TabsList className="tabs_list">
              {data.map((i, ind) => (
                <TabsTrigger value={ind} className="tabs_trigger" key={ind}>
                  <div className="tabs_item">
                    <div className="tabs_title">{i.title}</div>
                    <div className="tabs_desc">{i.desc}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Section0;
