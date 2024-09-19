import React from "react";
import Backdrop from "../../../../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faHeart,faUser} from '@fortawesome/free-regular-svg-icons';

const  SideDrawer=(props)=>{
    const MainPages=["How It Works" , "Signals" , "Reviews" , "Blog"];



    return(
        <div className=" ">
            
            <Backdrop show={props.open} clicked={props.closed} />

            <div  className= {props.open?
                "inline-block fixed w-2/3 max-w-40 h-full left-0 top-5 z-20 bg-white pt-8 pb-8 pl-4 pr-4 box-border transition transform ease-in-out delay-0.3 md:hidden translate-x-0 " 

                : 'hidden'}>
                <div className='flex flex-row '>
                    <strong className="ml-1 text-sm " >Exclusive</strong>
                </div>

                <div className="flex flex-col md:flex " >
                    {MainPages.map((page)=>{
                        return (<p
                                    className=" mb-0 hover:border-b-4 hover:border-slate-300"  href="...">{page}</p>)
                    })
                    }
                </div>

                <div className="flex flex-row justify-between ">
                    
                    <div className="text-2xl" >
                    <FontAwesomeIcon  className='text-gray-600' icon={faHeart} />
                    </div>


                    <div className="text-xl pt-1">
                    <FontAwesomeIcon className='text-gray-600'  icon={faUser} /> 
                    </div>
                    
                    
                </div>

           
             </div>


        </div>    
               
    )
}

export default SideDrawer;