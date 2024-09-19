import { useEffect } from 'react';
import days from '../../../../assests/images/30days.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from 'framer-motion';

const Days=(props)=>{

    

    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []);

    return(
        <motion.div
            initial={{ scale: 0.9 }} 
            whileHover={{ scale: 1 }} 
            transition={{ duration: 0.3 }}
        >
            <div className='flex flex-col md:flex-row gap-4 m-4 md:gap-20 bg-slate-50 md:m-14 md:p-10'>
                <div className='self-center w-5/6 md:w-1/4 md:ml-4' data-aos='zoom-in'>
                    <img className='' src={days}></img>
                </div>

                <div className='w-3/4 self-center' data-aos='fade-right'>
                    <strong>
                        <p className='font-poppins text-xl sm:text-4xl'>30 Day Money Back Guarantee</p>
                    </strong>
                    <p className='sm:text-lg font-poppins text-small '>
                        At Firebee we believe in building quality products that actually work.<br></br>
                        Firebee and its partners have invested over $85 million in research and<br></br>
                        development to create the highest quality wearable for customers to<br></br>
                        enjoy. If for any reason if you are not satisfied with your Firebee headband<br></br>
                        we will happily refund your purchase. 
                    </p>

                    

                </div>
            </div>
        </motion.div>
    )
}
export default Days;