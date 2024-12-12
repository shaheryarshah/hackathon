import Link from "next/link";
import { PiMagnifyingGlass } from "react-icons/pi";
export default function Navbar() {
  return (
    <div className="flex bg-white flex-row h-[80px] w-full">
      <div className="flex flex-row gap-[50px] mx-[190px]">
        <p className="flex flex-row text-bold text-2xl items-center">Hekto</p>
        <div className="flex flex-row gap-[10px]">
        <Link className="flex items-center" href="https://hackthon-001.netlify.app/">
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
        <div className="flex items-center mx-[700px]">
          <input
            className="flex justify-end border-2 border-slate-300 h-[30px] w-[240px]"
            type="text"
          />
          <span className="flex justify-center h-[30px] w-[40px] items-center bg-pink-500">
            <PiMagnifyingGlass />
          </span>
        </div>
      </div>
    </div>
  );
}
