import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="dark:bg-gray-800 bg-white relative overflow-hidden lg:h-screen">
            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center py-16">
                    
                    {/* Texte principal */}
                    <div className="sm:w-full lg:w-2/5 flex flex-col relative z-20 text-center lg:text-left">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12 mx-auto lg:mx-0"></span>
                        <h1 className="uppercase text-5xl sm:text-7xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Step into 
                            <span className="text-5xl sm:text-7xl">Style</span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-4">
                            Explore the world where every step counts. 
                            Discover the latest trends in sneakers that define culture, 
                            elevate your street game, and bring comfort with every move. 
                            Find your perfect pair to make a statement wherever you go.
                        </p>
                        <div className="flex justify-center lg:justify-start mt-8">
                            <Link to="" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                Get started
                            </Link>
                            <Link to="" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                Read more
                            </Link>
                        </div>
                    </div>

                    {/* Image avec taille limitée */}
                    <div className="sm:w-full lg:w-3/5 mb-8 lg:mb-0">
                        <img src="/landing.webp" className="w-full max-w-md h-auto object-cover m-auto" alt="Landing visual" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
