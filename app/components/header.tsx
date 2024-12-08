import { CiMail } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[44px] bg-purple-600 px-4 md:px-0 ">
      {/* Left Section */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-[100px] md:ml-[200px] w-full md:w-2/4 items-center text-white">
        <a className="flex items-center gap-2 text-sm md:text-base">
          <CiMail />
          mhhasanul@gmail.com
        </a>
        <p className="text-sm md:text-base">(12345)67890</p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-white items-center justify-end md:mr-[200px] w-full">
        <select className="text-white bg-purple-600 text-sm md:text-base">
          <option value="English">English</option>
        </select>
        <select className="text-white bg-purple-600 text-sm md:text-base">
          <option value="USD">USD</option>
        </select>
        
        
        <Link className="flex items-center" href="/login">Login</Link>
          
        
        <span className="flex items-center gap-2 text-sm md:text-base">
          Wishlist
          <CiHeart />
        </span>
        <span className="flex items-center gap-2 text-sm md:text-base">
          <CiShoppingCart />
        </span>
      </div>
    </div>
  );
}
