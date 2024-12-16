import Link from "next/link";
import { PiMagnifyingGlass } from "react-icons/pi";
export default function Navbar() {
  return (
    <div className="container flex bg-white flex-row h-[80px] bg-slate-100 sm:mx-auto ">
      <div className="flex flex-col sm:flex-row sm:gap-[50px]  justify-center items-center sm:items-center mx-auto sm:mx-[240px]">
        <p className="flex justify-left sm:text-bold sm:text-2xl text-sm items-center">Hekto</p>
        <div className="flex  items-center justify-left text-sm sm:flex-row gap-[5px] sm:justify-end sm:gap-[50px]">
        <Link className="flex items-center" href="/">
        Home
        </Link>
          <Link className="flex items-center" href="/pages">
            Pages
          </Link>
          <Link className="flex items-center" href="/products">
            Products
          </Link>
          <Link className="flex items-center" href="/blog">
            Blog
          </Link>
          <Link className="flex items-center" href="/shop">
            Shop
          </Link>
          <Link className="flex items-center" href="/contact">
            Contact
          </Link>
        </div>
        <div className="border-2 hidden sm:block sm:flex  ">
          <input
            className=""
            type="text"
            
          />
          <div className="flex justify-center items-center bg-pink-500 h-[30px] w-[40px]">
         
          <PiMagnifyingGlass />
         
          </div>
        </div>
      </div>
    </div>
  );
}
