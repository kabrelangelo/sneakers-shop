import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShoppingCart,
  Menu,
  X,
  User,
  Search,
  Phone,
  Mail,
  MapPin,
  Truck,
  Heart,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

// Importer les polices (dans le fichier index.css ou un fichier de styles global)
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-white font-poppins">
      {/* Top Info Bar */}
      <div className="bg-indigo-800 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">prentisoft@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+237 652 48 06 84</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Nos magasins</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
                <Truck className="h-4 w-4" />
                <span>Livraison gratuite dès 50€</span>
              </div>
              <div className="flex items-center space-x-3">
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/" className="flex items-center">
                <svg className="h-8 w-auto text-indigo-600" viewBox="0 0 28 24" fill="none">
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="ml-3 text-xl font-semibold text-gray-800 tracking-wide">
                  VotreStore
                </span>
              </NavLink>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <NavLink to="/account" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors">
                <User className="h-5 w-5" />
                <span className="hidden sm:inline text-sm">Compte</span>
              </NavLink>
              <NavLink to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                {/* <span className="hidden sm:inline text-sm">Panier</span> */}
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </NavLink>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Centered Categories Menu */}
          <div className="hidden md:flex items-center justify-center h-12 space-x-8">
            {['Nouveautés', 'Femmes', 'Hommes', 'Accessoires', 'Marques', 'Promotions'].map((category, index) => (
              <NavLink
                key={index}
                to={`/${category.toLowerCase()}`}
                className="text-base font-sans font-bold  text-gray-700 hover:text-indigo-600 transition-colors "
              >
                {category}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-b border-gray-200`}
      >
        <div className="px-4 py-4 space-y-2">
          <div className="py-2">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {['Nouveautés', 'Femmes', 'Hommes', 'Accessoires', 'Marques', 'Promotions'].map((category, index) => (
            <NavLink
              key={index}
              to={`/${category.toLowerCase()}`}
              className="block text-base font-sans font-semibold text-gray-700 hover:text-indigo-600 transition-colors hover:underline"
            >
              {category}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
