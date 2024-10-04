import React from "react";
import { NavbarMenu } from "../../assets/data";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaCarTunnel, FaDumbbell } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./responsiveMenu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="">
        <div className="container flex justify-between item-center py-8">
        
        {/* Logo Section */}
        <div className="text-3xl flex items-center gap-2 font-bold uppercase cursor-pointer ">
          <FaDumbbell/>
          <p>Coders</p>
          <p className="text-secondary">Gym</p>
        </div>

        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
           {NavbarMenu.map((item)=>{
              return(
                <li key={item.id}>
                  <a className="inline-block py-1 px-3  hover:text-primary font-semibold " href={item.link}>{item.title}</a></li>
              )
            })
           }
          </ul>
        </div>

        
        {/* Icons Section */}
        <div className="flex gap-3 items-center ">
          <button  className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <CiSearch className=""/>
          </button>
          <button  className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <CiShoppingCart className=""/>
          </button>
          <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">Login</button>
          <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">Sign up</button>
       
        </div>



        {/* Mobile Hamburger */}

           <div className="md:hidden " onClick={()=>setOpen(!open)}>
            <MdMenu className="text-4xl"/>
           </div>




        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <ResponsiveMenu open={open}/>
    </>
  );
  
};

export default Navbar;
