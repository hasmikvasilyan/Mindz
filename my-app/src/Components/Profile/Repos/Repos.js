import Title from '../../Shared/Title/Title';
import Container from '../../Shared/Container/Container';
import RepoItem from './RepoItem';
import './Repos.css';

function Repos(){
    const sortItems=[
        {
            id:1,
            name: "stars",
            sortProperty: 'stars'
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
    return(       
        <section className='repoContainer'>
            <Container>        
                <Title>Top Repos</Title>
                <ul>
                    {Repos.map(repo=>{
                        return(
                            <RepoItem></RepoItem>
                        )
                    })}
                </ul>
            </Container>
        </section>
    )
}
export default Repos