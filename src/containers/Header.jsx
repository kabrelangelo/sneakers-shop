import React, { useState, useEffect } from 'react';
import { ArrowRight, ShoppingBag, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
      title: "Nouvelle Collection",
      subtitle: "Automne-Hiver 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
      title: "Style Urbain",
      subtitle: "Pour Elle"
    },
    {
      url: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
      title: "Élégance Moderne",
      subtitle: "Pour Lui"
    }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl">
          {/* Badge */}
          {/* <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mt-48 mb-6">
            <TrendingUp className="w-4 h-4 text-rose-400 mr-2" />
            <span className="text-sm font-medium text-white">Nouvelle collection disponible</span>
          </div> */}

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl mt-32 font-bold text-white mb-6">
            La Mode Qui 
            <span className="block text-rose-500">Vous Sublime.</span>
          </h1>

          {/* Description */}
          <p className="text-md font-sans text-gray-300 mb-8 max-w-2xl">
            Des vêtements qui reflètent votre personnalité, pour un style qui ne passe jamais inaperçu.
            Trouvez l'inspiration et faites de chaque tenue une œuvre unique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/collection"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-rose-500 px-8 py-4 text-white focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
            >
              <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <ArrowRight className="w-5 h-5" />
              </span>
              <span className="text-sm font-bold uppercase tracking-wider transition-transform group-hover:translate-x-4">
                Découvrir la Collection
              </span>
            </Link>

            <Link 
              to="/shop"
              className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-white px-8 py-4 text-white hover:bg-white hover:text-rose-500 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              <span className="text-sm font-bold uppercase tracking-wider">
                Acheter Maintenant
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index ? 'bg-rose-500 w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Header;