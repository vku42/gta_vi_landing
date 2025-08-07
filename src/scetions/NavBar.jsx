import React from "react";

const NavBar = () => {
  return (
    <nav>
      <img
        src="/images/kanya_karrt_logo.png"
        className="w-35 flex flex-col items-center justify-start"
      />
      <img
        src="/images/menu.svg"
        className="w-10 bg-[#0e6d3b] rounded-sm px-1 cursor-pointer"
      />
    </nav>
  );
};

export default NavBar;
