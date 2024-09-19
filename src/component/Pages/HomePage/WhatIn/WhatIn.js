
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import book from '../../../../assests/images/book.png'
import d1 from '../../../../assests/images/d1.png'
import d2 from '../../../../assests/images/d2.png'
import d3 from '../../../../assests/images/d3.png'
import d4 from '../../../../assests/images/d4.png'
import d5 from '../../../../assests/images/d5.png'
import d6 from '../../../../assests/images/d6.png'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const WhatIn=(props)=>{
    
    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []);

    const images=[d1,d2,d3,d4,d5,d6]
    return(
        <div className="mt-14 flex flex-col justify-center">
            <div>
                <p className="text-4xl text-center">What’s in the box?</p>
            </div>

            <div className='self-center'>
                <img data-aos='flip-left' src={book}></img>
            </div>

            <div className='self-center grid grid-row-2 grid-cols-3 sm:grid-rows-1 sm:grid-cols-6 gap-5 sm:gap-8 border-b-2'>
                {images.map((image)=>{
                    return(
                        <div className='pb-5 '>
                            <motion.div
                                initial={{ scale: 1 }} 
                                whileInView={{scale: [1,1.2,1] }}
                                transition={{
                                    duration: 0.5, 
                                    ease: "easeInOut", 
                                    repeat: 5, 
                                    repeatType: "loop" }}
                            >
                                <img src={image} alt=''></img>
                            </motion.div>

                        </div>
                    )
                })}
            </div>

            <div className='mt-8 mb-10 flex flex-col md:flex-row justify-between ml-4 md:ml-0 md:self-center gap-5 md:gap-48'>                    
                <motion.div
                    initial={{ scale: 1 }} 
                    whileHover={{ scale: 1.2 }} 
                    transition={{ duration: 0.3 }}
                >
                    <div className='flex gap-2'>
                            <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                            <p className='place-content-center font-poppins text-slate-500'>
                                1 Firebeeheadband 
                            </p>
                    </div>
                </motion.div>
                
                    
                <motion.div
                    initial={{ scale: 1 }} 
                    whileHover={{ scale: 1.2 }} 
                    transition={{ duration: 0.3 }}
                >
                    <div className='flex gap-2'>
                            <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                            <p className='place-content-center font-poppins text-slate-500'>
                                1 Charging cable 
                            </p>
                    </div>  
                </motion.div>
                
                
                <motion.div
                    initial={{ scale: 1 }} 
                    whileHover={{ scale: 1.2 }} 
                    transition={{ duration: 0.3 }}
                >
                    <div className='flex gap-2'>
                            <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                            <p className='place-content-center font-poppins text-slate-500'>
                                1 User manual 
                            </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default WhatIn;