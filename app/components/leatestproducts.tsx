import Image from "next/image";
import Link from "next/link";
export default function Leatestproducts() {
  return (
    <div className="">

    <div className="">
      <h1 className="text-4xl font-bold text-center items-center ">
        Leatest Products
      </h1>
      <div>
        <span className="flex justify-center flex-row text-sm  sm:flex-row  gap-[10px] mt-[30px] text-semibold">
          <Link href="">New Arrival</Link>
          <Link href="">Best Seller</Link>
          <Link href="">Featured</Link>
          <Link href="">Special Offer</Link>
        </span>
      </div>
    </div>

<div>
<div>
        <>
   <section className="text-gray-600 body-font ">
    <div className="flex-col flex container px-5 py-24 mx-auto  ">
    
      <div className="flex flex-col sm:flex-row items-center justify-center ">
        <div className=" p-4  lg:w-1/4 md:w-1/2 ">
          <div className="h-full shadow-lg items-center text-center">
            <Image
              alt="team"
              className="bg-slate-200 flex-shrink-0 rounded-lg w-full h-100 object-cover object-center mb-4"
              src="/lp1.png"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
              Cantilever chair
              </h2>
              
              <p className="mb-4">
              Code - Y523201
              </p>
              <p className="mb-4">
              $42.00
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4  lg:w-1/4 md:w-1/2">
          <div className="h-full shadow-lg  flex flex-col items-center text-center">
            <Image
              alt="team"
              className="bg-slate-200 flex-shrink-0 rounded-lg w-full h-100 object-cover object-center mb-4"
              src="/lp4.png"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
              Cantilever chair 
              </h2>
              <h3 className="text-gray-500 mb-3">Code - Y523201</h3>
              <p className="mb-4">
              $42.00
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4  lg:w-1/4 md:w-1/2">
          <div className="h-full shadow-lg flex flex-col items-center text-center">
            <Image
              alt="team"
              className="bg-slate-200 flex-shrink-0 rounded-lg w-full h-100 object-cover object-center mb-4"
              src="/lp3.png"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
              Cantilever chair 
              </h2>
              <h3 className="text-gray-500 mb-3">Code - Y523201 </h3>
              <p className="mb-4">
              $42.00
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                
        
        
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</>


      </div>

      </div>

    <div>
        <>
   <section className="text-gray-600 body-font ">
    <div className="container px-5 py-24 mx-auto ">
    
      <div className="flex flex-col sm:flex-row container mx-auto mx-12 items-center justify-center">
        <div className="p-4 lg:w-1/4 md:w-1/4">
          <div className="h-full shadow-lg flex flex-col items-center text-center">
            <Image
              alt="team"
              className="bg-slate-200 flex-shrink-0 rounded-lg w-full h-100 object-cover object-center mb-4"
              src="/lp4.png"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
              Cantilever chair
              </h2>
              
              <p className="mb-4">
              Code - Y523201
              </p>
              <p className="mb-4">
              $42.00
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:w-3/12">
          <div className="flex shadow-lg flex-col items-center text-center">
            <Image
              alt="team"
              className="bg-slate-200 flex-shrink-0 rounded-lg w-full h-100 object-cover object-center mb-4"
              src="/lp5.png"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
              Cantilever chair 
              </h2>
              <h3 className="text-gray-500 mb-3">Code - Y523201</h3>
              <p className="mb-4">
              $42.00
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4  lg:w-4/12">
          <div className="h-full flex shadow-lg flex-col items-center text-center">
            <Image
              alt="team"
              className="bg-slate-200 flex-shrink-0 rounded-lg w-full h-100 object-cover object-center mb-4"
              src="/lp6.png"
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg text-gray-900">
              Cantilever chair 
              </h2>
              <h3 className="text-gray-500 mb-3">Code - Y523201 </h3>
              <p className="mb-4">
              $42.00
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                
        
        
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</>


      </div>

      </div>










   
  );
}
