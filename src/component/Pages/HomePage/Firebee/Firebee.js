import line from '../../../../assests/images/line.png';
import a1 from '../../../../assests/images/a1.png';
import a2 from '../../../../assests/images/a2.png';
import a3 from '../../../../assests/images/a3.png';
import a4 from '../../../../assests/images/a4.png';
import a5 from '../../../../assests/images/a5.png';
import a6 from '../../../../assests/images/a6.png';
import a7 from '../../../../assests/images/a7.png';
import a8 from '../../../../assests/images/a8.png';

const Firebee=(props)=>{
    const images=[a1,a2,a3,a4,a5,a6,a7,a8]
    return(
        <div className='m-10'>
            <div className='flex flex-col md:flex-row gap-36'>
                <img src={line}></img>
                <div className='text-slate-600 place-content-center'>
                    <p className='w-full font-poppins text-center text-xl md:text-4xl'>Firebee Signals</p>
                    <p className='text-center text-small md:text-base'>A signal for every situation</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8'>
                {images.map((image)=>{
                    return(
                        <div className='flex gap-5 bg-slate-100 p-6'>
                            <img className='size-4/12 md:size-8/12' src={image}></img>
                            <p className='font-poppins text-small md:text-base'>Discover your best sleep<br></br>
                             with responsive sleep<br></br>
                              journeys, overnight sleep tracking, and personalized<br></br> 
                              insights.</p>
                        </div>
                    )
                })}
                <img src={line}></img>
            </div>
        </div>
    )
}

export default Firebee;