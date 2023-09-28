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

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="fixed right-0 top-12 z-10 h-screen w-60 bg-gray-800">
        <ul className=" text-white p-5">
          {navLink.map((item) => (
            <Link href={item.path} key={item.path}>
              <li className="cursor-pointer">{item.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
