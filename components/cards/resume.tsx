import Card from "../ui/card";
import SignatureImage from "@/public/assets/images/me/signature.png";
import Image from "next/image";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";

export default function ResumeCard() {
  return (
    <Card className="md:h-full">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
      Enthusiastic entry-level Full-Stack Developer with a solid foundation in
      JavaScript, React, Next.js, ASP.NET, and Java. Eager to contribute to
      building robust, scalable applications across both front-end and back-end while growing and collaborating in agile environments.
      </p>
      {/*Signature*/}
      <div className="flex justify-center">
        <Image src={SignatureImage} alt="Jihee Kim" />
      </div>
      {/*Socials and resume btn*/}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/*Socials*/}
        <Socials />
        <Button>
          <FaDownload />
          Resume
        </Button>
      </div>
    </Card>
  );
}
