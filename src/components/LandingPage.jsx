import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <div class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
    <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 class="uppercase text-5xl sm:text-7xl font-black flex flex-col 
                leading-none dark:text-white text-gray-800">
                    Step into 
                    <span class="text-5xl sm:text-7xl">
                    Style
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                Explore the world where every step counts. 
                Discover the latest trends in sneakers that define culture, 
                elevate your street game, and bring comfort with every move. 
                Find your perfect pair to make a statement wherever you go.

                </p>
                <div class="flex mt-8">
                    <Link to="" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 
                    border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Get started
                    </Link>
                    <Link to="" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 
                    border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500
                     hover:text-white text-md">
                        Read more
                    </Link>
                </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="/landing.webp" class="max-w-xs w-full h-full md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default LandingPage;