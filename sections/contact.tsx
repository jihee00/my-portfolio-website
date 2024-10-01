import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import ContactCard from "@/components/cards/contact";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import TextArea from "@/components/ui/text-area";
import { SiMinutemailer } from "react-icons/si";
import Button from "@/components/ui/button";

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
          <div className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md">
            <div className="flex items-center justify-between mb-4 gap-8">
              <Input type="text" placeholder="Full Name" icon={<FaUser />} />
              <Input type="text" placeholder="Email Address" icon={<MdEmail />} />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input type="text" placeholder="Subject" icon={<MdSubject />} />
            </div>
            {/*Multiple select wrapper*/}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-bold text-lg">
                  What services are you in need for ?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/*Services*/}
                </div>
              </div>
            </div>
            {/*Multiple select wrapper*/}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-bold text-lg">
                  What is your budget ?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/*Budget options*/}
                </div>
              </div>
            </div>
            {/*TextArea message*/}
            <TextArea
              placeholder="Tell us about your project"
              icon={<FaProjectDiagram />}
            />
            <div className="w-full flex justify-end">
              <Button className="!w-44 !py-3 !text-lg">
                Send <SiMinutemailer />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
