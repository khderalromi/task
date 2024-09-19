
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faSignalMessenger, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../../assests/images/Union.png'

const Footer=(props)=>{
    return(
        <div className='mt-2 md:mt-10 gradient2 grid  text-white justify-between  sm:gap-20'>
            <div className='mt-8 ml-5 mr-5 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24 lg:mt-16 grid grid-flow-col grid-cols-3 gap-6 sm:gap-12 md:gap-72 justify-between'>    
                
                <div className='space-y-2 sm:space-y-4 w-full'>
                    <strong className='text-small md:text-md lg:text-lg xl:text-xl'>About</strong>
                    <p className='text-small md:text-base'>Home</p>
                    <p className='text-small md:text-base'>Product</p>
                </div>

                <div className='space-y-2 sm:space-y-4'>
                    <strong className='text-small md:text-md lg:text-lg xl:text-xl'>Support</strong>
                    <p className='text-small md:text-base'>Activate</p>
                    <p className='text-small md:text-base'>Login</p>
                </div>

                <div className='space-y-2 sm:space-y-4 w-min lg:w-fit  '>
                    <strong className='text-xSmall sm:text-sm md:text-md lg:text-lg xl:text-xl'>
                        Find Us On
                    </strong>


                    <div className='flex flex-row justify-between text-small lg:text-md xl:text-2xl gap-2 md:gap-5'>
                        <FontAwesomeIcon  icon={faFacebook} beat/>
                        <FontAwesomeIcon icon={faTwitter} beat/>
                        <FontAwesomeIcon icon={faInstagram} beat/>
                        <FontAwesomeIcon icon={faLinkedin} beat/>
                    </div>
                </div>

            </div>
            <div className=' text-gray-800 flex flex-col gap-5 ml-5 mr-5 md:ml-15 md:mr-15 lg:ml-24 lg:mr-24  border-t-2 w-full'>
                
                    <img className='size-1/6 mt-5' src={logo}></img>
                    <p className='text-small md:text-base'>Copyright © 2020 Firebee Technologies, Inc. All rights reserved.</p>
                    <p className='text-small md:text-base w-5/6'>The statements on this page have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any<br></br>
                     disease.</p>
                
            </div>
        </div>
    )
}

export default Footer;