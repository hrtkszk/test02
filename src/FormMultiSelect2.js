const FormMultiSelect = (props) => {
    const handleOnChange = (event) => {
        if (props.defaultValue[event.target.value] === 1) {
            const copyDefaultValue = {...props.defaultValue}
            delete copyDefaultValue[event.target.value]
            props.setValue(copyDefaultValue)
            // props.setValue({...props.defaultValue, [event.target.value] : ""})
        } else {
            props.setValue({...props.defaultValue, [event.target.value] : 1})
        }
        console.log(event.target.value, ":", props.defaultValue)
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
                {Object.keys(props.keyValue).map(key => (
                    <>
                        <input value={key} type="checkbox" name="test" onChange={handleOnChange}/>{props.keyValue[key]}<br />
                    </>
                ))}
                {/* checked={checkedItems[item.id]} */}
            </span>
        </>
    )    
}
export default FormMultiSelect;