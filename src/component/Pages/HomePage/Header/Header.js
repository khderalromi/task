import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { faCartShopping,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faHeart,faUser} from '@fortawesome/free-regular-svg-icons'
import SideDrawer from './SideDrawer/SideDrawer';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';
import { useEffect, useState } from 'react';
import logo from '../../../../assests/images/logo.png'



const MainPages=["How It Works" , "Signals" , "Reviews" , "Blog"]

const Header=(props)=>{
    const [showSideDrawer,setShowSideDrawer]=useState(false);

    const sideDrawerClosedHandler = ()=>{
        return(
            setShowSideDrawer(false)
    )}

    



    const menuHandler = ()=>{
        return(
            setShowSideDrawer(!showSideDrawer)
    )}



    return(
        <div className='flex justify-between sm:justify-start sm:gap-5 align-middle p-4'>
            <img className='size-1/12 sm:size-1/6 mt-1' src={logo}></img>

            <button className="sm:hidden bg-lemon text-white pl-3 pr-3 sm:text-base  sm:pr-5 sm:pl-5  rounded-2xl">
                Buy Now
            </button>
            <div className='ml-2 mt-2 flex flex-col gap-2 '>
               <DrawerToggle clicked={menuHandler}/> 
                <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
            </div>
            <div className="hidden md:grid md:grid-flow-col w-full justify-between">   
                <div className="flex justify-start flex-row md:gap-6 pt-5  " >
                    {MainPages.map((page)=>{
                        return (<a href='#'> {page} </a>)
                    })
                    }
                </div>

                <div className="pt-3 flex gap-4 mr-24 justify-center w-full">
                    
                    <button className=" bg-lemon text-white pl-5 pr-5 sm:text-base rounded-3xl">
                        Buy Now
                    </button>

                    <div className="text-xl pt-1">
                    <FontAwesomeIcon className='text-white bg-blue_costume rounded-full p-2'  icon={faUser} /> 
                    </div>
                    
                    
                </div>

            </div>
           
        </div>

    )

}
export default Header;