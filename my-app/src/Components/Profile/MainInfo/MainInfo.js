import MainInfoItem from './MainInfoItem';
import './MainInfo.css';
import stars from '../../../Assets/stars.svg';
import followers from '../../../Assets/followers.svg';
import repos from '../../../Assets/repos.svg';
import codeLines from '../../../Assets/codeLines.svg';

function MainInfo(props){
    const mainInfo=[
        {
            id:1,
            infoName:'stars',
            infoFigure: 10,
            imgURL:stars,
        },
        {
            id:2,
            infoName:'followers',
            infoFigure: props.profile.followers,
            imgURL:followers,
        },
        {
            id:3,
            infoName:'repos',
            infoFigure: props.profile.repos,
            imgURL:repos,
        },
        {
            id:4,
            infoName:'lines of code',
            infoFigure: "3K",
            imgURL:codeLines,
        },
        // {
        //     id:5,
        //     infoName:"View profile on GitHub",
        //     imgURL:redirect,
        //     href:props.profile.link,
        // },
    ];
    return(
        <section className="mainInfoConatiner">                  
            <ul>
                {
                    mainInfo.map(item=>{
                        return <MainInfoItem 
                            key={item.id} 
                            infoName={item.infoName} 
                            infoFigure={item.infoFigure} 
                            imgURL={item.imgURL}
                        />
                    })
                }                            
            </ul>
        </section> 
        
    )
}
export default MainInfo