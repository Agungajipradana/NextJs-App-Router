import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLink = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Profile",
    path: "/about/profile",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <nav className="flex bg-gray-800 py-3 px-5 justify-between">
        <div className="flex">
          <h1 className="text-white">Navbar</h1>
          <ul className="flex ml-5">
            {navLink.map((item) => (
              <Link href={item.path} key={item.path}>
                <li className={`mr-3 ${pathname === item.path ? "text-blue-300" : "text-white"} cursor-pointer `}>{item.label}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer" onClick={() => router.push("/login")}>
            Login
          </button>
        </div>
      </nav>
    </>
  );
}
