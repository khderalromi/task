import days from '../../../../assests/images/30days.png'

const Days=(props)=>{
    return(
        <div className='flex flex-col md:flex-row gap-4 m-4 md:gap-12 bg-slate-50 md:m-14 md:p-10'>
            <div className='self-center w-5/6 md:w-1/4'>
                <img className='' src={days}></img>
            </div>

            <div className='w-3/4 self-center'>
                <strong>
                    <p className='font-poppins text-xl sm:text-4xl'>30 Day Money Back Guarantee</p>
                </strong>

                <p className='sm:text-xl font-poppins text-small '>
                    At Firebee we believe in building quality products that actually work.<br></br>
                    Firebee and its partners have invested over $85 million in research and<br></br>
                    development to create the highest quality wearable for customers to<br></br>
                    enjoy. If for any reason if you are not satisfied with your Firebee headband<br></br>
                    we will happily refund your purchase. 
                </p>
            </div>
        </div>
    )
}
export default Days;