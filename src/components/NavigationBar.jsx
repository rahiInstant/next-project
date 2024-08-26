"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavigationBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/dashboard",
      title: "dashboard",
    },
    {
      path: "/categories",
      title: "categories",
    },
    {
      path: "/blogs",
      title: "Blogs",
    },
  ];

  if(pathName.includes('dashboard')) {
    return (<div className="p-4 bg-orange-800 text-orange-300">
      Dashboard layout
    </div>)
  }
  return (
    <div>
      <nav className="flex p-4 justify-between bg-green-900 text-green-100 items-center">
        <div>Logo</div>
        <ul className="flex gap-5">
          {links.map((link, id) => (
            <li
              className={`${pathName == link.path && "text-green-400 font-medium"}`}
              key={id}
            >
              <Link href={link.path}>{link.title} </Link>
            </li>
          ))}
        </ul>
        <button
          className="px-4 py-1 text-lg font-medium bg-green-600 text-white rounded-md"
          onClick={() => router.push("/login")}
        >
          Log in
        </button>
      </nav>
    </div>
  );
};

export default NavigationBar;
