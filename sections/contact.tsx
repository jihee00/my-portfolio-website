import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import ContactCard from "@/components/cards/contact";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import TextArea from "@/components/ui/text-area";
import { SiMinutemailer } from "react-icons/si";
import Button from "@/components/ui/button";
import { FormEvent, useRef, useState } from "react";
import SelectInput from "@/components/ui/select-input";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null!);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [services, setServices] = useState<string[]>([]);
  const [budgets, setBudgets] = useState<string[]>([]);

  const sendEmail=(e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    emailjs.sendForm(
      "service_4gin6az",
      "template_7bd5igl",
      formRef.current,
      "u7DuB_IsqjjcRUNVS"
    ).then((res) => {
      console.log(res.text);
      console.log("Email sent successfully");
    }, (error) => {
      console.log(error.text);
    });
  }

  return (
    <div id="contact" className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/*Contact cards*/}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call me directly at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="647 - 855 - 0852"
              btnText="Call me"
            />
            <ContactCard
              title="Chat with me"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="jiheecreates@gmail.com"
              btnText="Email me"
            />
          </div>
          {/*Contact form*/}
          <form 
            ref={formRef}
            onSubmit={sendEmail}
            className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md">
            <div className="flex items-center justify-between mb-4 gap-8">
              <Input name="name" type="text" placeholder="Full Name" icon={<FaUser />} />
              <Input name="email" type="text" placeholder="Email Address" icon={<MdEmail />} />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input name="subject" type="text" placeholder="Subject" icon={<MdSubject />} />
            </div>
            {/*Multiple select wrapper*/}
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  What services are you in need for ?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/*Services*/}
                  {servicesOptions.map((service) => (
                    <SelectInput
                    key={service.id}
                    type="checkbox" 
                    id={service.id}
                    text={service.text}
                    selectedOptions={services}
                    setSelectedOptions={setServices}
                    allowMultiple
                    />
                  ))}
                </div>
              </div>
            </div>
            {/*Multiple select wrapper*/}
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  What is your budget ?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/*Budget options*/}
                  {budgetsOptions.map((budget) => (
                    <SelectInput
                    key={budget.id}
                    type="radio" 
                    id={budget.id}
                    text={budget.text}
                    selectedOptions={budgets}
                    setSelectedOptions={setBudgets}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/*TextArea message*/}
            <TextArea
              name="message"
              placeholder="Tell us about your project"
              icon={<FaProjectDiagram />}
            />
            <div className="w-full flex justify-end">
              <div onClick={()=> btnRef.current?.click()}>
                <Button className="!w-44 !py-3 !text-lg">
                  Send <SiMinutemailer />
                </Button>
              </div>
              {/*Hidden services and budget inputs*/}
              <div className="hidden">
                <input
                  type="text"
                  value={services.join(", ")}
                  name="services"
                  hidden 
                />
                <input
                  type="text" 
                  value={budgets.join(", ")} 
                  name="budget" 
                  hidden />
              </div>
              <button type="submit" hidden ref={btnRef}></button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

const servicesOptions = [
  {
    id: "Web Design",
    text: "Web Design",
  },
  {
    id: "Website Development",
    text: "Website Development",
  },
  {
    id: "Web Application",
    text: "Web Application",
  },
  {
    id: "Mobile App Development",
    text: "Mobile App Development",
  },
  {
    id: "Logo Design",
    text: "Logo Design",
  },
];

const budgetsOptions = [
  {
    id: "less than 500$",
    text: "< $500",
  },
  {
    id: "between 500$ and 2000$",
    text: "$500 - $2000",
  },
  {
    id: "between 2000$ and 5000$",
    text: "$2000 - $5000",
  },
  {
    id: "more than 5000$",
    text: "> $5000",
  },
];