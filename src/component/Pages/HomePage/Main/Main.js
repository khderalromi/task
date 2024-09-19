import { useState,useEffect } from 'react';
import one from '../../../../assests/images/one.png';
import two from '../../../../assests/images/two.png';
import c1 from '../../../../assests/images/c1.png';
import c2 from '../../../../assests/images/c2.jpg';
import c3 from '../../../../assests/images/c3.jpg';
import c4 from '../../../../assests/images/c4.jpg';
import c5 from '../../../../assests/images/c5.jpg';
import b0 from '../../../../assests/images/b0.svg';
import b1 from '../../../../assests/images/b1.png';
import b2 from '../../../../assests/images/b2.png';
import b3 from '../../../../assests/images/b3.png';
import b4 from '../../../../assests/images/b4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEarth,faCircleCheck,  faStarHalfAlt, faStopwatch20 } from '@fortawesome/free-solid-svg-icons';
import { faGgCircle } from '@fortawesome/free-brands-svg-icons/faGgCircle';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import { faRightLong } from '@fortawesome/free-solid-svg-icons/faRightLong';
import AOS from "aos";
import "aos/dist/aos.css";

const Main = (props)=>{
    

    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []);

    const images=[c1,c2,c3,c4,c5]
    const images2=[b0,b1,b2,b3,b4]
    const [index,setIndex]=useState(0);

    const imageIndexHandler=(index)=>{
        return(
            setIndex(index)
        )
    }
    return(
        <div className="bg-slate-300 grid grid-flow-row md:grid-flow-col md:grid-cols-2">
            <div className='pt-6 pl-2 md:pl-10 flex flex-col gap-3 md:gap-8'>
                <div className='flex gap-4'>
                    <img className='size-12 md:size-28' src={one}></img>
                    <img className='size-12 md:size-28'  src={two}></img>
                </div>

                <div>
                    <div data-aos='fade-right'>
                        <img className='' src={images[index]}></img>
                    </div>
                    <div className='flex gap-2 md:gap-4'  data-aos='zoom-in'>     
                        {[0,1,2,3,4].map((index)=>{
                            return(
                                <div onClick={()=>{return imageIndexHandler(index)}}>
                                    <img className='size-full' src={images[index]}></img>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='hidden md:grid grid-cols-2 grid-rows-2 gap-4' data-aos='fade-right'>
                    <div className='flex gap-4 '>
                        <FontAwesomeIcon className='size-8 sm:size-12' icon={faStopwatch20} />
                        <p className='text-slate-600 font-poppins'>Fast and very hight<br></br> quality products </p>
                       
                    </div>

                    <div className='flex gap-4 '>
                        <FontAwesomeIcon className='size-8 sm:size-12' icon={faEarth} />
                        <p className='text-slate-600'>Free Shipping<br></br> within USA</p>
                        
                    </div>
                    <div className='flex gap-4 '>
                        <FontAwesomeIcon className='size-8 sm:size-12' icon={faGgCircle}/> 
                        <p className='text-slate-600'>Customer Support via<br></br> E-mail, Phone, and Chat</p>
                    </div>

                    <div className='flex gap-4 '>
                        <FontAwesomeIcon className='size-8 sm:size-12' icon={faUserTie} />
                        <p className='text-slate-600'>Signal Catalogue <br></br>Updates Included</p>
                        
                    </div>
                  
                </div>

            </div>

            <div className='flex flex-col gap-6 md:gap-8 pt-6 pr-5 pl-10'>
                <div className='w-full flex flex-col gap-1'>
                    <strong>Firebee Headband</strong>
                    <div className='flex gap-2'>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}}/>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}}/>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}}/>
                        <FontAwesomeIcon icon={faStarHalfAlt} style={{color: "#FFD43B",}}/>
                        <p className='font-poppins'>267 Reviews</p>
                    </div>
                    <div>
                        <p className='font-poppins text-small md:text-base'>Order today and receive your Firebee by June 15th, 2021</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='border_gradient p-4 flex flex-col gap-3  bg-white'  data-aos='fade-left'>
                        <div className='flex flex-col md:flex-row w-full justify-between'>
                            <strong>Firebee Starter Kit</strong>
                            <div className='flex gap-3'>
                                <p className='line-through'>999.00$</p>
                                <p>379.00$</p>
                            </div>
                        </div>

                        <div>   
                            <button className="gradient text-small md:text-base text-white pl-7 pr-7 sm:text-base rounded-2xl">
                            MOST POPULAR KIT
                            </button>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                                <p className='place-content-center text-small md:text-base font-poppins text-slate-500'>Access to 7 signals (and future signal releases)</p>
                            </div>

                            
                            <div className='flex gap-2'>
                                <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                                <p className='place-content-center font-poppins text-small md:text-base text-slate-500'>Firebee Headband </p>
                            </div>

                            
                            <div className='flex gap-2'>
                                <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                                <p className='place-content-center font-poppins text-small md:text-base text-slate-500'>$19/month membership, first 2 months free</p>
                            </div>
                            
                        </div>

                        <div>
                            <p className='font-poppins text-slate-600 text-small md:text-base'>
                            The starter kit is the most affordable way to get started with Firebee. Pay<br></br> 
                            $299 for the Firebee headband and access to the entire Firebee Signal
                            <br></br> Catalogue for only $19 a month.<strong className='text-black'> Membership can be cancelled anytime.<br></br>
                             No contracts. Satisfaction guaranteed.</strong>
                            </p>
                        </div>
                    </div>

                   {/*************** **************/}
                   
                   <div className='border-2 rounded-lg p-4 flex flex-col gap-3 bg-white' data-aos='fade-left'>
                        <div className='flex flex-col md:flex-col w-full justify-between'>
                            <strong>Founder’s Kit</strong>
                            <p>799.00$</p>
                            
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                                <p className='place-content-center font-poppins text-small md:text-base text-slate-500'>Access to 7 signals (and future signal releases)</p>
                            </div>

                            
                            <div className='flex gap-2'>
                                <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                                <p className='place-content-center font-poppins text-small md:text-base text-slate-500'>Firebee Headband </p>
                            </div>

                            
                            <div className='flex gap-2'>
                                <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                                <p className='place-content-center font-poppins text-small md:text-base text-slate-500'>No Monthly Membership</p>
                            </div>
                            
                        </div>

                        <div>
                            <p className='font-poppins text-slate-600 text-small md:text-base'>
                            The Founders kit allows you to get the Firebee headband and lifetime<br></br>
                             access to the entire Firebee Signal Catalogue for a one-time payment.<br></br>
                              The Founders is kit can be paid through Affirm allowing customers to
                            <br></br> make small payments of $73 a month.
                            </p>
                        </div>
                    </div>

                    
                    <div className='flex justify-center'>   
                        <button className=" w-3/4 bg-lemon text-white pt-2 pb-2 pl-7 pr-7 sm:text-xl rounded-2xl">
                            Add to Cart
                            <FontAwesomeIcon className='pl-2 align-center' icon={faRightLong} />
                        </button>
                    </div>

                    <div className='flex gap-5 justify-center'>
                        {images2.map((image)=>{
                            return(
                                <div>
                                    <img className='size-10' src={image}></img>
                                </div>
                            )
                        })}
                    </div>

                    
                <div className='grid md:hidden grid-cols-2 grid-rows-2 gap-4' data-aos='zoom-in'>
                    <div className='flex gap-4 '>
                        <FontAwesomeIcon className='size-6 md:size-8 sm:size-12' icon={faStopwatch20} />
                        <p className='text-slate-600 font-poppins text-small md:text-base'>Fast and very hight<br></br> quality products </p>
                       
                    </div>

                    <div className='flex gap-4 '>
                        <FontAwesomeIcon className='size-6 md:size-8 sm:size-12' icon={faEarth} />
                        <p className='text-slate-600 text-small md:text-base'>Free Shipping<br></br> within USA</p>
                        
                    </div>
                    <div className='flex gap-4 '>
                        <FontAwesomeIcon className='size-6 md:size-8 sm:size-12' icon={faGgCircle}/> 
                        <p className='text-slate-600 text-small md:text-base'>Customer Support via<br></br> E-mail, Phone, and Chat</p>
                    </div>

                    <div className='flex gap-4 '>
                        <FontAwesomeIcon className='size-6 md:size-8 sm:size-12' icon={faUserTie} />
                        <p className='text-slate-600 text-small md:text-base'>Signal Catalogue <br></br>Updates Included</p>
                        
                    </div>
                  
                </div>

                </div>
            </div>

        </div>
    )
}

export default Main;