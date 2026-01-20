import  'react';
import logo from "../../assets/logogoogogoo.png";

const Logo = () => {
  return (
    <div className='flex'>
      <img className='w-[90px] h-[90px]' src={logo} alt="Logo" />
      <h1 className='text-white mt-7 text-3xl font-semibold'>Seinxera</h1>
    </div>
  );
};

export default Logo;
