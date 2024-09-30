import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";
import ContactCard from "@/components/cards/contact";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/*Contact cards*/}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call me directly at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="647 - 855 - 0852"
              btnText="Call us"
            />
            <ContactCard
              title="Chat with me"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="jiheecreates@gmail.com"
              btnText="Email us"
            />
          </div>
          {/*Contact form*/}
        </div>
      </Card>
    </div>
  );
}
