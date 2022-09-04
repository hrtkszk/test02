const PickOne = (props) => {
    let str = ""
    Object.keys(props.keyValue).map(key => (
        str = props.keyName.concat(key),
        console.log(props.DBValue.str)
    ))

    return (
        <>
            <span className="dan">{props.title}</span>
            <span className="dan2">

            </span>
        </>
    )    
}
export default PickOne;