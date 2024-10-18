import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import images from "../../constants/images";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "../cart/Cart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "var(--color-red)",
    color: "white",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: "10px",
  borderRadius: "50%",
}));

const Navbar = ({ colorLink, colorIcon, colorBorder, cartColor }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [badgeNumber, setBadgeNumber] = useState(0);
  const [isWidthLessThan1000, setIsWidthLessThan1000] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWidthLessThan1000(window.innerWidth < 1051); // Correction ici
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewCart = () => {
    setShowCart(true);
  };

  return (
    <>
      <div className={`absolute top-0 left-0 w-full h-20 flex justify-between items-center bg-transparent p-4 transition-all duration-300 ${toggleMenu ? "bg-gray-800" : ""}`}>
        <div className="flex items-center">
          <FaBars
            className="text-white cursor-pointer md:hidden"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          <img src={images.logo} alt="logo" className="w-24 h-24 object-cover" />
        </div>

        <ul className="hidden md:flex space-x-10">
          <li>
            <NavLink className={`text-${colorLink} hover:text-gray-400`} to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className={`text-${colorLink} hover:text-gray-400`} to="/about">
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink className={`text-${colorLink} hover:text-gray-400`} to="/products">
              Produits
            </NavLink>
          </li>
          <li>
            <a href="#contact" className={`text-${colorLink} hover:text-gray-400`}>
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <StyledIconButton aria-label="cart" onClick={handleViewCart}>
            <StyledBadge badgeContent={badgeNumber} color="secondary">
              <ShoppingCartIcon style={isWidthLessThan1000 ? { color: 'white' } : { color: cartColor }} />
            </StyledBadge>
          </StyledIconButton>
          <a className="text-white" href="https://www.facebook.com/Fournisseurdeproximite">
            <FaFacebookF className={`text-${isWidthLessThan1000 ? colorIcon : colorLink}`} fontSize={20} />
          </a>
          <a className="text-white" target="blank" href="https://wa.me/24177066605">
            <FaWhatsapp className={`text-${isWidthLessThan1000 ? colorIcon : colorLink}`} fontSize={20} />
          </a>
          <Link className="btn-connection text-white border border-gray-600 rounded-md py-1 px-3 hover:bg-red-500" to="/connection/login">
            Login
          </Link>
          <Link className="btn-register text-white bg-red-600 rounded-md py-1 px-3 hover:bg-red-500" to="/connection/signup">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Navbar on small screen */}
      {toggleMenu && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <FaTimes
              className="text-white cursor-pointer"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center">
            <li>
              <NavLink className={`text-white hover:text-gray-400`} to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className={`text-white hover:text-gray-400`} to="/about">
                À propos
              </NavLink>
            </li>
            <li>
              <NavLink className={`text-white hover:text-gray-400`} to="/products">
                Produits
              </NavLink>
            </li>
            <li>
              <NavLink className={`text-white hover:text-gray-400`} to="#contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col items-center mt-4">
            <Link className="btn-connection text-white border border-gray-600 rounded-md py-1 px-3 hover:bg-red-500" to="/connection/login">
              Login
            </Link>
            <Link className="btn-register text-white bg-red-600 rounded-md py-1 px-3 hover:bg-red-500" to="/connection/signup">
              Sign Up
            </Link>
          </div>
        </div>
      )}

      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
    </>
  );
};

export default Navbar;
