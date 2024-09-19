import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import womwn from '../../../../assests/images/wonam.png'

const WhatDo=(props)=>{
    return(
        <div className="flex flex-col">
            <div className="text-center flex flex-col gap-3">
                <span className="font-poppins text-2xl md:text-5xl text-center">
                    What will Firebee do for me?
                </span>
                <p>Firebee will help you gently nudge yourself into a different mental state</p>
            </div>

            <div className='flex flex-col md:flex-row gap-5'>
                <img src={womwn}></img>
                
                <div className='flex flex-col gap-5 justify-center'>    
                    <div className='flex gap-2 ml-5'>
                        <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                        <p className='place-content-center font-poppins text-slate-500'>
                            Can’t sleep? Turn on the <strong>deep sleep </strong> signal
                        </p>
                    </div>

                    <div className='flex gap-2 ml-5'>
                        <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                        <p className='place-content-center font-poppins text-slate-500'>
                            Feeling tired? Turn on the <span className='text-color1'><strong>alert</strong></span> signal  
                        </p>
                    </div>

                    <div className='flex gap-2 ml-5'>
                        <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                        <p className='place-content-center font-poppins text-slate-500'>
                            Feeling anxious? Turn on the <span className='text-color2'><strong>calm</strong></span>  signal 
                        </p>
                    </div>
                    <div className='flex gap-2 ml-5'>
                        <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                        <p className='place-content-center font-poppins text-slate-500'>
                            Feeling unproductive? Turn on the <span className='text-color3'><strong>focus</strong></span> signal  
                        </p>
                    </div>

                    <div className='flex gap-2 ml-5'>
                        <FontAwesomeIcon className='size-8' icon={faCircleCheck} style={{color:'#67CFE9'}} />
                        <p className='place-content-center font-poppins text-slate-500'>
                            Feeling blue? Turn on the  <span className='text-color4'><strong>happy</strong></span> signal   
                        </p>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default WhatDo;