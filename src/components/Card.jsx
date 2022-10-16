import CardWrapper from "./CardWrapper";


function Card(props){
    return(
       <CardWrapper>
        <div className="" key={props.id}>
            <div className="wallPaper" style={{background:props.wallpaper}}></div> 
            <img className="photo" src={ props.profilePic} alt="img"/>
            
             <div className="nameId">
                <div><strong>{props.username}</strong></div>
                <div>{props.id}</div>
             </div>
             <h5>About</h5><br/>
             <div>{props.userInfo}</div><br/>
            <div><strong>web</strong>:"https://google.com"</div>
            <div><strong>twitter</strong>:"https://twitter.com"</div>
        </div>
        </CardWrapper>
    )
}

export default Card;