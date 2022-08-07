const FormMultiSelect = (props) => {
    return (
        <>
            <span className="dan">{props.title}</span>
                <span className="dan2">
                    <select
                        multiple={true}
                        defaultValue = {props.defaultValue}
                        onChange = {event => {
                            props.setValue(event.target.value)
                            console.log(event.target.value)
                            }}>
                            {Object.keys(props.keyValue).map(key => {
                                if (props.keyValue[key]==="未設定") {
                                    <option value={key} disabled>{props.keyValue[key]}</option>
                                } else {
                                    <option value={key}>{props.keyValue[key]}</option>
                                }
                            })}
                    </select>
            </span>
        </>
    )    
}
export default FormMultiSelect;