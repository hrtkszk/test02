const FormSelect2 = (props) => {
    // let TempValue =""
    return (
        <>
            <span className="dan">{props.title}</span>
                <span className="dan2">
                    <select
                        defaultValue = {props.defaultValue}
                        onChange={event => {
                            // TempValue = JSON.parse("{\"" + props.targetJSONName + "\":\"" + event.target.value + "\"}")
                            StringtargetJSONName = String(props.targetJSONName)
                            console.log(props.targetJSON)
                            console.log(props.defaultValue)
                            // console.log(TempValue)
                            props.setValue({
                                ...props.targetJSON,
                                StringtargetJSONName : event.target.value
                            })
                        }}>
                            {Object.keys(props.keyValue).map(key => <option value={key}>{props.keyValue[key]}</option>)}
                    </select>
            </span>
        </>
    )    
}
export default FormSelect2;