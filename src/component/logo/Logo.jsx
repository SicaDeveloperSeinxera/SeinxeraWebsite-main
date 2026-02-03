import "react";
import logo from "../../assets/logogoogogoo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        className="w-22.5 h-22.5 shrink-0 -ml-2 lg:ml-0"
        src={logo}
        alt="Logo"
      />

      <div className="flex-1 md:text-center lg:text-left">
        <h1 className="text-white font-bold tracking-wider sm:text-base md:text-lg flex-1 md:text-center lg:text-left lg:text-xl">
          SEINXERA
        </h1>
      </div>
    </div>
  );
};

export default Logo;
