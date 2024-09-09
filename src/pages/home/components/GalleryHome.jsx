import React from 'react';
import { Link } from 'react-router-dom';

const GalleryHome = () => {
    return (
        <div>
            <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12 my-5">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:grid-cols-2 md:gap-4 xl:gap-6">
  
            <Link to="#"
                className="group relative lg:h-screen overflow-hidden flex items-end rounded-lg 
                bg-gray-100 shadow-lg ">
                <img src="/images/gallery/gal1.jpg" loading="lazy" alt="adidas" 
                className=" h-full w-full lg:absolute inset-0 object-cover object-center transition duration-200 
                group-hover:scale-110" />
                <div
                    className="pointer-events-none bg-gradient-to-t from-gray-800 via-transparent 
                    to-transparent opacity-50">
                </div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 
                md:text-lg">Adidas</span>
            </Link>
            <Link to="#"
                className="group relative flex lg:h-screen overflow-hidden items-end rounded-lg 
                bg-gray-100 shadow-lg md:col-start-2 ">
                <img src="/images/gallery/gal2.webp" loading="lazy" alt="Puma" 
                className="h-full w-full object-cover lg:absolute inset-0 object-center transition 
                duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t 
                    from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 
                md:text-lg">Puma</span>
            </Link>
            <Link to="#"
                className="group relative lg:h-screen flex items-end overflow-hidden rounded-lg 
                bg-gray-100 shadow-lg ">
                <img src="/images/gallery/gal4.webp" loading="lazy" alt="Nike" 
                className="h-full lg:absolute inset-0 w-full object-cover object-center transition 
                duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t 
                    from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 
                md:text-lg">Nike</span>
            </Link>
            <Link to="#"
                className="group relative flex lg:h-screen items-end overflow-hidden rounded-lg 
                bg-gray-100 shadow-lg">
                <img src="/images/gallery/gal3.webp" loading="lazy" alt="Nike" 
                className="h-full w-full lg:absolute inset-0 object-cover object-center transition 
                duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t 
                    from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 
                md:text-lg">Nike</span>
            </Link>
        </div>
    </div>
</div>
        </div>
    );
};

export default GalleryHome;