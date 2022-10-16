function CardWrapper(props){
    return(
        <div className="wrapper" key={props.id}>{props.children}</div>
    )
}
export default CardWrapper