const SelectProfileItem = (props) => {
    let str = ""
    let display = ""
    Object.keys(props.keyValue).map(key => 
        <>
            {str = props.keyName.concat(key)}
            {console.log(props.DBValue[str])}
            {props.DBValue[str] === 1 ? (
                display=props.keyValue[key]
                
            ) : null}
        </>
    )

    return (
        <>
            <span className="dan">{props.title}</span>
            <span className="dan2">{display}</span>
        </>
    )    
}
export default SelectProfileItem;