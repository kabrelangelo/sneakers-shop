import React from 'react';
import images from "../../../constants/images"
import {motion} from 'framer-motion'

const Avantages = () => {
    return (
        <div>
        <div className="grid my-5 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className=" flex flex-col items-center justify-center rounded-lg">
                <motion.div
                 whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                        scale: 0.8,
                        rotate: -100,
                        borderRadius: "100%"
                    }}
                    >
                <img src={images.support1} alt="free delivery" />
                </motion.div>
                <h5 className='text-xl font-serif p-5 font-semibold'>Livraison gratuite</h5>
            </div>
            <div className=" flex flex-col items-center justify-center rounded-lg">
            <motion.div
                 whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                        scale: 0.8,
                        rotate: -100,
                        borderRadius: "100%"
                    }}
                    >
                <img src={images.support2} alt="free delivery" />
                </motion.div>
                <h5 className='text-xl font-serif p-5 font-semibold'>Assistance 24h/24 et 7j/7</h5>
            </div>
            <div className=" flex flex-col items-center justify-center rounded-lg">
            <motion.div
                 whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                        scale: 0.8,
                        rotate: -100,
                        borderRadius: "100%"
                    }}
                    >
                <img src={images.support3} alt="free delivery" />
                </motion.div>
                <h5 className='text-xl font-serif p-5 font-semibold'>Satisfait ou remboursé</h5>
            </div>
            
            </div>
        </div>
    );
};

export default Avantages;