const FormMultiSelect = (props) => {
    const handleOnChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <>
            <span className="dan">{props.title}</span>
            <span className="dan2">
                {/* <select
                    multiple={true}
                    defaultValue = {props.defaultValue}
                    onChange = {event => {
                        props.setValue({...props.defaultValue, [event.target.value] : event.target[event.target.value].select})
                        console.log(props.defaultValue)
                        }}>
                    {Object.keys(props.keyValue).map(key => <option value={key} disabled={props.keyValue[key]==="未設定"&& true}>{props.keyValue[key]}</option>)}
                </select> */}
                {Object.keys(props.keyValue).map(key => <input type="checkbox" value={key} name="test" onChange={handleOnChange}>{props.keyValue[key]}</input>)}
                {/* checked={checkedItems[item.id]} */}
            </span>
        </>
    )    
}
export default FormMultiSelect;