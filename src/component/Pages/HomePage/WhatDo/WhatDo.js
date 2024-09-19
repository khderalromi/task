import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import womwn from '../../../../assests/images/wonam.png'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const WhatDo=(props)=>{
    
    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []);

    return(
        <div className="flex flex-col">
            <div className="text-center flex flex-col gap-3" data-aos='fade-left'>
                <span className="font-poppins text-2xl md:text-5xl text-center">
                    What will Firebee do for me?
                </span>
                <p>Firebee will help you gently nudge yourself into a different mental state</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
                <img data-aos='flip-left' src={womwn}></img>
                
                <div className='flex flex-col gap-5 justify-center'>  
                    <motion.div
                        initial={{ scale: 1 }} 
                        whileHover={{ scale: 1.2 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <div className='flex gap-2 ml-5' data-aos='fade-left'>
                            <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                            <p className='place-content-center font-poppins text-slate-500'>
                                Can’t sleep? Turn on the <strong>deep sleep </strong> signal
                            </p>
                        </div>
                        
                    </motion.div> 

                    
                    <motion.div
                        initial={{ scale: 1 }} 
                        whileHover={{ scale: 1.2 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <div className='flex gap-2 ml-5' data-aos='fade-left'>
                            <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                            <p className='place-content-center font-poppins text-slate-500'>
                                Feeling tired? Turn on the <span className='text-color1'><strong>alert</strong></span> signal  
                            </p>
                        </div>
                    </motion.div>

                     
                    
                    <motion.div
                        initial={{ scale: 1 }} 
                        whileHover={{ scale: 1.2 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <div className='flex gap-2 ml-5' data-aos='fade-left'>
                            <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                            <p className='place-content-center font-poppins text-slate-500'>
                                Feeling anxious? Turn on the <span className='text-color2'><strong>calm</strong></span>  signal 
                            </p>
                        </div> 
                    </motion.div>

                     
                    
                    <motion.div
                        initial={{ scale: 1 }} 
                        whileHover={{ scale: 1.2 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <div className='flex gap-2 ml-5' data-aos='fade-left'>
                            <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                            <p className='place-content-center font-poppins text-slate-500'>
                                Feeling unproductive? Turn on the <span className='text-color3'><strong>focus</strong></span> signal  
                            </p>
                        </div>
                    </motion.div>

                     
                    
                    <motion.div
                        initial={{ scale: 1 }} 
                        whileHover={{ scale: 1.2 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <div className='flex gap-2 ml-5' data-aos='fade-left' >
                            <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                            <p className='place-content-center font-poppins text-slate-500'>
                                Feeling blue? Turn on the  <span className='text-color4'><strong>happy</strong></span> signal   
                            </p>
                        </div>
                    </motion.div>
                </div>
             
            </div>
        </div>
    )
}

export default WhatDo;