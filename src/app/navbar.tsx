import Link from "next/link";

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
  return (
    <>
      <nav className="flex bg-gray-800 py-3 px-5 ">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          {navLink.map((item) => (
            <Link href={item.path} key={item.path}>
              <li className="mr-3 text-blue-300 cursor-pointer">{item.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
