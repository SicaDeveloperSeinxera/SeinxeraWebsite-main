import "react";
import logo from "../../assets/logogoogogoo.png";

const Logo = () => {
  return (
    <div className="flex">
      <img className="w-[90px] h-[90px] shrink-0" src={logo} alt="Logo" />
      <div className="flex-col items-center pt-8 hidden lg:flex">
        <h1 className="ml-2 transition-[font-size] text-white lg:text-xl font-bold tracking-wider">
          SEINXERA
        </h1>
      </div>
    </div>
  );
};

export default Logo;
