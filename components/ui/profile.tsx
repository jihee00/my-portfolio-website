import Image from "next/image";
import MyImage from "@/public/assets/images/me/Jihee_280.png";

export default function Profile() {
  return (
    <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
      {/*Profile Image*/}
      <div className="relative w-[100px] h-[100px] rounded-full flex itmes-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
        <Image
          src={MyImage}
          alt="Jihee Kim photo"
          className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
        />
        {/*Online*/}
        <div className="w-3 h-3 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-5"></div>
      </div>
      {/*Name*/}
      <div className="text-3xl font-medium">Jihee Kim</div>
    </div>
  )
}
