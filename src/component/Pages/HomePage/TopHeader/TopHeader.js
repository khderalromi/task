import classes from '../TopHeader/TopHeader.module.css'
const TopHeader=(props)=>{
    return(
        <div className={classes.TopHeader}
        >
            <p className="text-center pt-3 pb-1 text-white font-bold " >
                Black Friday Sale Save $100
            </p>
            
        </div>
    )
}

export default TopHeader;