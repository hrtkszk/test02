const FormSelect1 = (props) => {
    return (
        <>
            <span className="dan">{props.title}</span>
                <span className="dan2">
                    <select
                        defaultValue = {props.defaultValue[props.keyText]}
                        onChange = {event => props.setValue({...props.defaultValue, [props.keyText] : event.target.value})}>
                            {Object.keys(props.keyValue).map(key => <option value={key}>{props.keyValue[key]}</option>)}
                    </select>
            </span>
        </>
    )    
}
export default FormSelect1;