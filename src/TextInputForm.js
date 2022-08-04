const TextInputFrom = (props) => {
    return (
        <input
            type="text"
            // defaultValue={props.value}
            onChange={props.handler}
            // placeholder={props.placeholder}
            required
        />
    )    
}
export default TextInputFrom;