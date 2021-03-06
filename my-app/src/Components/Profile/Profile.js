import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import './Profile.css';
import Repos from './Repos/Repos';
import Container from '../Shared/Container/Container';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import ForksInfo from './ForksInfo/ForksInfo';
import MainInfo from './MainInfo/MainInfo';


function Profile(){
    const[profile,setProfile]=useState([]);
    const[forkedUsers,setForkedUsers]=useState(null);
    let profileUserName = useParams();
    useEffect(() => {
        fetchUser();
    },[]);
    const fetchUser=async()=>{
        const AccessToken='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';
        const config= {
            headers: {'Authorization': `token ${AccessToken}`}
        };
        let endpoints = [
            `https://api.github.com/users/${profileUserName.profileId}`,
            `https://api.github.com/users/${profileUserName.profileId}/events/public`,
            `https://api.github.com/users/${profileUserName.profileId}/repos`,
        ];
        let forkedUsersData=[];
        await Promise.all(endpoints.map((endpoint) => axios.get(endpoint,config))).then(
            axios.spread(async ({data: user}, {data:email},{data:repos})=>{              
                
                await Promise.all(repos.map(async (repo)=>{
                    if(repo.forks_count){
                        await axios.get(repo.forks_url,config).then(res=>{
                            res.data.forEach(item=>forkedUsersData.push(item.owner))                            
                        })
                    }
                    return forkedUsersData
                })
                );
                console.log("user",user);
                setProfile({
                    location:user.location,
                    joined: user.created_at,
                    email:user.email||email[1].payload.commits[0].author.email||"Not availabe",
                    company: user.company,
                    link:`https://github.com/${user.login}`,
                    img:user.avatar_url,
                    repos:user.public_repos,                
                    followers:user.followers,
                    // stars: user.stars, 
                    // codeLines: user.codeLines,                               
                });
                setForkedUsers(forkedUsersData);  
            }),            
        );        
    };

    return(
        <Container styleName="profileContainer">
            <main className='profileWrap'>
                <MainInfo profile={profile}/>
                <Repos profileUserName={profileUserName.profileId}/>
            </main>
            <div className="profileSidebar">
                <PersonalInfo profile={profile}/>
                {forkedUsers&&<ForksInfo forkedUsers={forkedUsers}/>}
            </div>        
        </Container>
    )
}
export default Profile