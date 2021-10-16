import { useState } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Link from "next/link";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className="sticky top-0 z-50 bg-blue-200 flex flex-wrap items-center
     justify-between px-2 py-3 lg:hidden"
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full text-white relative flex justify-between md:mx-auto">
          <Link href="/">
            <img
              loading="lazy"
              className="pt-2 md:inline-flex cursor-pointer h-12 w-28 rounded-xl"
              src="https://www.hustlermoneyblog.com/wp-content/uploads/2019/01/Discover-Bank-IRA-CD.jpg"
              alt="img"
            />
          </Link>

          <Button
            color="white"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="h-10 w-10 pt-2 border-0 text-red-400 hover:opacity-90 md:ml-auto lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Icon name="menu" size="3xl" />
          </Button>
        </div>

        <div
          className={
            "flex-grow items-center" + (navbarOpen ? "flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="mx-auto text-center pt-6 lg:hidden">
            <li>
              <h2 className="mobile">
                <Link href="/partner">PARTNER WITH US</Link>
              </h2>{" "}
            </li>

            <li>
              <h2 className="mobile">
                <Link href="/what">WHAT WE DO</Link>
              </h2>
            </li>

            <li>
              <h2 className="mobile">
                <Link href="/about">ABOUT US</Link>
              </h2>
            </li>

            <li>
              <h2 className="mobile">
                <Link href="/careers">CAREERS</Link>
              </h2>
            </li>

            <li>
              <h2 className="mobile">
                <Link href="/blog">BLOGS</Link>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
