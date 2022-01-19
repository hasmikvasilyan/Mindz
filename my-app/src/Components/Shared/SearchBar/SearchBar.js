import { useState} from "react";
import axios from 'axios';
import Button from '../Button/Button';
import Candidates from "../Candidates/Candidates";
import './SearchBar.css';
import search from '../../../Assets/search.svg'

function SearchBar(props){
    
    const [inputValue,setInputValue]=useState("");
    const [gitusers,setGitusers]=useState([]);
    // const [laoding,setLoading]=useState(false);
    // const [followers,setFollowers]=useState("");
    
   
   

    const handleChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // setGitusers([]);
        await searchUser();
        // setGitusers(await searchUser());
    }
    const searchUser=async()=>{ 
        let testo=[];       
        // setLoading(true);
        fetch(`https://api.github.com/search/users?q=${inputValue}`).then(res=>res.json())
        .then(async data=>{
            // setLoading(false);
            
            await Promise.all(data.items.map(user=>{
                return(
                 fetch(`https://api.github.com/users/${user.login}`).then(res=>res.json()).then(data=>{
                    // setLoading(false);                    
                    let test={
                        id:data.id, 
                        gitUser:data.login, 
                        img:data.avatar_url,
                        followersCount:data.followers,
                        reposURL:data.repos_url,
                        reposCount:data.public_repos,
                        gitURL:data.url,
                        email:data.email,

                    }
                    testo.push(test);                                    
                }))
                
        }))
        setGitusers(testo); 
    })      
    }  

    return(
        <>
            <form onSubmit={handleSubmit} className="searchBar">
                <div className="inputContainer">
                    <img src={search} alt="search"/>
                    <input type="text" placeholder="Name/Position" value={inputValue} onChange={handleChange}/>
                </div>           
            <Button name="Search" class="filled"/>   
            </form>
            <Candidates candidates={gitusers}/>
        </>
    )
}
export default SearchBar