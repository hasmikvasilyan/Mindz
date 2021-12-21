import Header from '../Shared/Header/Header' ;
import Services from './Services/Services';
import Products from './HowItWorks/HowItWorks';
import Partners from './Partners/Partners';

import ContactUs from './ContactUs/ContactUs';


function Home(){
    return(
        <>
            <Header/>
            {/* <Top/> */}
            <Services/>
            <Partners/>
            <Products/>
            <ContactUs/>
        </>
        
    )
}
export default Home