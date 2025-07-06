import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const menus = ["Home", "About Me", "Technologies", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 py-[20px] px-[170px] bg-[#09090f] shadow-lg shadow-gray-700  flex justify-between items-center max-md:px-[40px]">
      <div className="text-[25px] font-bold text-glow">
        <span className="text-primary">Momo</span>
        <span>.Tech</span>
      </div>
      <img
        src={menu_open}
        alt=""
        className="w-6 hidden max-md:block max-md:fixed max-md:right-[30px]"
        onClick={openMenu}
      />
      <ul
        ref={menuRef}
        className="text-[20px] flex items-center list-none gap-[60px] max-md:w-[350px] max-md:h-[100%] max-md:z-2 max-md:transition-[right] max-md:duration-500 max-md:fixed max-md:flex-col max-md:items-start max-md:top-0 max-md:right-[-350px] max-md:gap-[30px] max-md:bg-[#09090f]/95 backdrop-blur-sm"
      >
        <img
          src={close}
          alt=""
          className="w-7 hidden max-md:block max-md:relative max-md:top-[30px] max-md:left-[290px]"
          onClick={closeMenu}
        />
        {menus.map((item) => (
          <li
            key={item}
            onClick={() => setMenu(item)}
            className={`cursor-pointer hover:text-[#b08ffc] ${
              menu === item
                ? "font-bold text-glow text-primary underline decoration-white underline-offset-8"
                : ""
            } max-md:text-[25px] max-md:pl-[100px] max-md:flex-row max-md:gap-[20px]`}
          >
            <AnchorLink className="anchor-link" offset={50} href={`#${item}`}>
              {item}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
