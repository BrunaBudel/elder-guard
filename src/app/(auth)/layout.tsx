'use client'

import { useLoader } from "@/context/LoaderContext";
import { faArrowRightFromBracket, faPersonCane, faRectangleList, faSliders, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter } from "next/navigation";


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoading } = useLoader();
  const pathname = usePathname()
  const router = useRouter();
  return (
    <div className="bg-primary p-6 h-screen flex">
      {
        isLoading && (
          <div className="fixed top-0 left-0 z-50 w-full h-full bg-white bg-opacity-70 flex items-center justify-center">
            <span className="loading loading-spinner text-primary loading-lg"></span>
          </div>
        )
      }
      <div className="pr-6 text-white text-lg flex flex-col justify-center gap-8">
        <div className={`p-2 rounded hover:bg-white group flex items-center justify-center ${pathname.startsWith('/formularios/') && 'bg-white text-primary'}`} onClick={() => router.push('/formularios')}>
          <FontAwesomeIcon icon={faRectangleList} className="w-6 h-6 group-hover:text-primary" />
        </div>
        <div className={`p-2 rounded hover:bg-white group flex items-center justify-center `}>
          <FontAwesomeIcon icon={faPersonCane} className="w-6 h-6 group-hover:text-primary" />
        </div>
        <div className={`p-2 rounded hover:bg-white group flex items-center justify-center `}>
          <FontAwesomeIcon icon={faUser} className="w-6 h-6 group-hover:text-primary" />
        </div>
        <div className={`p-2 rounded hover:bg-white group flex items-center justify-center `}>
          <FontAwesomeIcon icon={faSliders} className="w-6 h-6 group-hover:text-primary" />
        </div>
        <div className={`p-2 rounded hover:bg-white group flex items-center justify-center `}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-6 h-6 group-hover:text-primary" />
        </div>
      </div>
      <div className="bg-white h-full w-full rounded-[50px] overflow-y-scroll p-4">
        <div className="flex justify-between">
          <div className="cursor-pointer flex items-center">
            <FontAwesomeIcon icon={faPersonCane} className="w-10 h-10 text-primary" />
            <span className="text-2xl font-bold">ElderGuard</span>
          </div>
          <div className="flex items-center gap-4">
            <label className="input bg-base-200 flex items-center gap-2 ">
              <input type="text" className="grow" placeholder="Pesquisar" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
            <div className="border p-1 rounded-2xl flex gap-2 items-center text-sm text-gray-500 ">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
        <div className="rounded-[50px] mt-12 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
