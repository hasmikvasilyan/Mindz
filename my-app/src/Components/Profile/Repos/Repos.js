import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import UserContext from '../../../Components/Context/UserContext';
import Title from '../../Shared/Title/Title';
import RepoItem from './RepoItem';
import Sort from '../../Shared/Sort/Sort';
import './Repos.css';

function Repos(props){
    const [repos,setRepos]=useState([]);
    // const userCtx=useContext(UserContext);
    
    useEffect(() => {
        fetchRepos();
    },[]);
    const fetchRepos=()=>{
        axios.get(`https://api.github.com/users/${props.profileUserName}/repos`)
        .then(res=>{
            setRepos(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }    
    const sortItems=[
        {
            id:1,
            name: "by size of repo",
            sortProperty: 'size'
        }, 
        {
            id:2,
            name: "by number of stars",
            sortProperty: 'stargazers_count'
        },
        {
            id:3,
            name: "by number of forks",
            sortProperty: 'forks_count'
        },
        // {
        //     id:4,
        //     name: "by creation date",
        //     sortProperty: 'created_at'
        // }
    ] ;
    const handleSortChange=(sortedData)=>{
        setRepos([...sortedData])
    } 
    return(       
        <section>           
                <div className="titleContainer">   
                    <Title>Top Repos</Title>
                    <Sort  
                        sortItems={sortItems} 
                        data={repos}
                        onChange={handleSortChange} 
                    />
                </div>
                <ul className='repoContainer'>
                    {repos.slice(0,3).map(repo=>{
                        return(
                            <RepoItem 
                                key={repo.id}
                                repoName={repo.name}
                                repoSize={repo.size}
                                repoStars={repo.stargazers_count}
                                repoForks={repo.forks_count}
                                repoDescription={repo.description}
                            />
                        )
                    })}
                </ul>            
        </section>
    )
}
export default Repos