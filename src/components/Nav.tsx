import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className={`nav ${isOpen ? "text-black" : "text-white"}`}>
        <nav>
          <div className="ham-menu fixed right-0 top-0 bg-white">
            <button
              className="ham-menu-button absolute right-3 top-2 text-3xl outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <GrClose /> : <FiMenu />}
            </button>
            <div className={`ham-menu-items ${isOpen ? "visible" : "hidden"}`}>
              <ul className="mb-4 ml-4 mr-10 mt-10 flex flex-col text-3xl font-light gap-1">
                <li
                  className={`${
                    location.pathname === "/"
                      ? "font-playfair italic underline"
                      : "hover:underline"
                  }`}
                >
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li
                  className={`${
                    location.pathname === "/projects"
                      ? "font-playfair italic underline"
                      : "hover:underline"
                  }`}
                >
                  <Link to="/projects" onClick={() => setIsOpen(false)}>
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
