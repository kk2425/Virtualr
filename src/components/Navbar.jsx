import{Menu, X} from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo.png";


import { navItems } from "../constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

      const toggleNavbar = () =>{
        setIsOpen(!isOpen);
      }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="w-full px-4 relative">
            <div className="flex items-center justify-between">
                <div className="flex items-center flex-shrink-0">
                    <img className="w-10 h-10 mr-2" src={logo} alt="logo"/>
                    <span className="text-lg font-bold text-white -tracking-tight">VirtualR</span>
                </div>
                <ul className="hidden lg:flex space-x-12 items-center text-lg">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        
                        </li>
                    ) )}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className="py-1 px-2 border rounded-lg border-white">
                        Sign In
                    </a>
                    <a href="#" className="py-2 px-3 border rounded-lg bg-gradient-to-r from-orange-500 to-orange-800">
                        Create a account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar} className="lg:hidden md:flex flex-col justify-end">
                        {isOpen ? <X /> : <Menu />}
                        
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4 text-lg ">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6 pt-4">
                        <a href="#" className="py-1 px-2 border rounded-lg border-white">Sign In</a>
                        <a href="#" className="py-2 px-3 border rounded-lg bg-gradient-to-r from-orange-500 to-orange-800">
                            Create a account
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar