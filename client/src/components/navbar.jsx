import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../../images/logo.png'

const NavbarItem = ({title,classProps})=>{
    return(
        <li className= {`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}
const Navbar = ()=>{
    const navItems =["Market", "Exchange", "Tutorials", "Wallets"];
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-5'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="LOGO" className='w-32 cursor-pointer' />
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {navItems.map((item,index)=>(
                    <NavbarItem key={item + index} title={item} />
                ))}
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#0935D6]">
                    Login
                </li> 
            </ul>
            <div className="flex relative">
                {toggleMenu ?
                <div></div>
                 : 
                <GiHamburgerMenu fontSize ={28} className='text-white md:hidden cursor-pointer' onClick={()=>setToggleMenu(true)} /> } 
                {toggleMenu && (
                    <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                    flex flex-col justify-start  items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                        <li className="text-[30px] w-full my-2">
                            <AiOutlineClose className='cursor-pointer' onClick={()=> setToggleMenu(false)} />
                        </li>
                        {navItems.map((item,index)=>(
                    <NavbarItem key={item + index} title={item} classProps ="my-2 text-lg mx-auto text-[#c0c2c1] hover:text-white" />
                ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;