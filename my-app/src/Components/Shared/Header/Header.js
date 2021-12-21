import Logo from "../Logo";
import Menu from "../Menu/Menu";
import SearchBar from "../SearchBar/SearchBar";

const menuItems=[
    {            
        id:1,
        title:'Home',
        path: '',        
    },
    {   
        id:2,         
        title:'Services',
        path: 'services',  
    },
    {   
        id:3,          
        title:'Products',
        path: 'products',
    },
    {            
        id:4, 
        title:'Partners',
        path: 'partners',
    },
    {            
        id:5, 
        title:'Contact Us',
        path: 'contactUs',
    },
]
function Header(){
    
    return(
        <header>
            <Logo/>
            <SearchBar></SearchBar>
            <Menu 
                menuItems={menuItems}
                cName="headerMenuItem"
            />           
        </header>
    )
    
}
export default Header