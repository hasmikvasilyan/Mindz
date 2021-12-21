// import MenuItem from "./MenuItem";
import { Link, animateScroll as scroll } from "react-scroll";

function Menu(props){
    return(
        <nav>
            <ul>
                 {props.menuItems.map(menuItem=>{
                    return(
                        <li 
                            key={menuItem.id}
                            className={`${props.cName} ${menuItem.title}`}>
                            <Link 
                            to={menuItem.path}
                            activeClass="active"
                            smooth={true}
                            duration={1000}
                            delay={500}
                            isDynamic={true}                            
                            >{menuItem.title}</Link>                            
                        </li>                    
                    )                
                })}  
            </ul>
        </nav>
    )
}
export default Menu