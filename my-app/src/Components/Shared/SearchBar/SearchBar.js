import { useState} from "react";
import axios from 'axios';
import Button from '../Button/Button';
import Candidates from "../Candidates/Candidates";
import './SearchBar.css';
import search from '../../../Assets/search.svg';
import loader from '../../../Assets/loader.svg'

function SearchBar(props){    
    const [inputValue,setInputValue]=useState("");
    const [gitusers,setGitusers]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    
    const handleChange=(e)=>{
        setInputValue(e.target.value);
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await searchUsers();
    };
    const searchUsers=async()=>{
        setGitusers([]);
        setIsLoading(true);
        const gitUsersData=[];
        const AccessToken='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';
        const fetchUrl=`https://api.github.com/search/users?q=${inputValue}&per_page=28`;
        const config= {
            headers: {'Authorization': `token ${AccessToken}`}
        };
        axios.get(fetchUrl,config)
            .then(async res=>{
            await Promise.all(res.data.items.map((user) => axios.get(`https://api.github.com/users/${user.login}`,config).then(
                (res => {
                    let gitUserData={
                        id:res.data.id, 
                        gitUser:res.data.login, 
                        img:res.data.avatar_url,
                        followersCount:res.data.followers,
                        reposURL:res.data.repos_url,
                        reposCount:res.data.public_repos,
                        gitURL:res.data.url,
                        email:res.data.email,
                    }
                    gitUsersData.push(gitUserData);
                }))))            
            setGitusers(gitUsersData);
            setIsLoading(false);
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
            {isLoading&&<img className="loader" src={loader}/>}
            <Candidates candidates={gitusers}/>
        </>
    )
}
export default SearchBar