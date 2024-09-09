import React from 'react';
import { Link } from 'react-router-dom';
import { newsProducts } from '../data/Products';

const Card = () => {

    return (
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-12">
          {newsProducts.map((newProduct) => (
            <Link key={newProduct.id} to={`/product/${newProduct.slug}`} className="group">
              <div className="relative w-full overflow-hidden rounded-lg bg-gray-200 pb-[66.67%]"> {/* ratio 3:2 pour agrandir */}
                <img
                  alt={newProduct.name}
                  src={newProduct.image}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-6 text-medium text-gray-900">{newProduct.name}</h3>
              <p className="mt-2 text-xl font-semibold text-gray-900">{newProduct.price}</p>
            </Link>
          ))}
      </div>
    );
};

export default Card;
