import TopHeader from './TopHeader/TopHeader';
import Header from './Header/Header';
import Main from './Main/Main';
import Days from './30Days/30Days';
import Firebee from './Firebee/Firebee';
import WhatDo from './WhatDo/WhatDo';
import WhatIn from './WhatIn/WhatIn';
import Question from './Question/Question';
import Footer from './Footer/Footer';
const HomePage=()=>{
    return (
        <div>
            <TopHeader/>
            <Header/>
            <Main/>
            <Days/>
            <Firebee/>
            <WhatDo/>
            <WhatIn/>
            <Question/>
            <Footer/>
        </div>
    )
};

export default HomePage;