import Card from "./Card/Card";
import './Candidates.css'
import Container from "../Container/Container";
import Title from "../Title/Title";
import Sort from "../Sort/Sort";
import { useState, useEffect } from "react";

const Candidates = (props)=>{  
    const[candidatesData, setCandidatesData]=useState([]);

    useEffect(() => {
        setCandidatesData(props.candidates);
    });
    
    const sortItems=[
        {
            id:1,
            name: "by number of stars",
            sortProperty: 'followersCount'
        }, 
        {
            id:2,
            name: "by number of repos",
            sortProperty: 'reposCount'
        },
        {
            id:3,
            name: "by number of followers",
            sortProperty: 'followersCount'
        }] ;
        const handleSortChange=(sortedData)=>{
            setCandidatesData([...sortedData])
        }    
    return (
        <Container>
            <div className="titleContainer">
                <Title>Candidates</Title>
                <Sort  
                    sortItems={sortItems} 
                    data={candidatesData} 
                    onChange={handleSortChange}/>
            </div>
            <ul className="candidatesContainer">
                { candidatesData.map(candidate=>{                
                    return(
                        <Card 
                            key={candidate.id}
                            username={candidate.gitUser}
                            img={candidate.img}
                            followersCount={candidate.followersCount}
                            reposCount={candidate.reposCount}
                            reposURL={candidate.reposURL}
                        />                   
                    )
                })}                
            </ul>
        </Container>
    )
}
export default Candidates