const FormMultiSelect = (props) => {
    return (
        <>
            <span className="dan">{props.title}</span>
            <span className="dan2">
                <select
                    multiple={true}
                    defaultValue = {props.defaultValue}
                    onChange = {event => {
                        props.setValue({...props.defaultValue, [event.target.value] : event.target[event.target.value].select})
                        console.log(props.defaultValue)
                        }}>
                    {Object.keys(props.keyValue).map(key => <option value={key} disabled={props.keyValue[key]==="未設定"&& true}>{props.keyValue[key]}</option>)}
                </select>
            </span>
        </>
    )    
}
export default FormMultiSelect;