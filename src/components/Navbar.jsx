import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <header className="h-24 sm:h-32 flex items-center z-30 w-full">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                        <img src="/logo.png" alt="logo" className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto " />
                    </div>
                    <div className="flex justify-between items-center">
                        {/* Menu navigation - visible sur grands écrans */}
                        <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                        <NavLink to="/" className={({ isActive }) => isActive  ? "py-2 px-6 flex text-gray-900 shadow-sm" 
        : "py-2 px-6 flex text-gray-500 dark:text-white  dark:hover:bg-gray-500 hover:text-gray-700"
    }
>
    Home
</NavLink>
         {/*                <NavLink to="/watch" className={({ isActive }) => isActive  ? "py-2 px-6 flex text-white bg-pink-400 rounded-lg shadow-lg" 
        : "py-2 px-6 flex text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-pink-600"
    }
>
    Watch
</NavLink> */}
<NavLink to="/product" className={({ isActive }) => isActive  ? "py-2 px-6 flex text-gray-900 rounded-lg shadow-sm" 
        : "py-2 px-6 flex text-gray-500 dark:text-white  dark:hover:bg-gray-700 hover:text-gray-700"
    }
>
    Product
</NavLink>
<NavLink to="/contact" className={({ isActive }) => isActive  ? "py-2 px-6 flex text-gray-900 rounded-lg shadow-sm" 
        : "py-2 px-6 flex text-gray-500 dark:text-white  dark:hover:bg-gray-700 hover:text-gray-700"
    }
>
    Contact
</NavLink>
                        </nav>
                        {/* Menu Hamburger - visible sur petits écrans */}
                        <button className="lg:hidden flex flex-col ml-4" onClick={toggleMenu}>
                            <span className="w-6 h-1 bg-gray-900 dark:bg-white mb-1"></span>
                            <span className="w-6 h-1 bg-gray-900 dark:bg-white mb-1"></span>
                            <span className="w-6 h-1 bg-gray-900 dark:bg-white mb-1"></span>
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                <div
                    className={`absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-900 transform ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:hidden z-20`}
                >
                    <div className="flex flex-col items-center justify-center h-full relative">
                        {/* Bouton de fermeture */}
                        <button
                            className="absolute top-6 right-6 text-gray-900 dark:text-white"
                            onClick={toggleMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <NavLink to="/" className="py-2 px-6 text-black text-2xl">
                            Home
                        </NavLink>
                       {/*  <NavLink to="/watch" className="py-2 px-6 text-xl">
                            Watch
                        </NavLink> */}
                        <NavLink to="product" className="py-2 px-6 text-2xl">
                            Product
                        </NavLink>
                        <NavLink to="/contact" className="py-2 px-6 text-2xl">
                            Contact
                        </NavLink>
                       {/*  <NavLink to="/career" className="py-2 px-6 text-xl">
                            Career
                        </NavLink> */}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
