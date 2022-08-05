const FormSelect = (props) => {
    return (
        <>
            <span className="dan">{props.title}</span>
                <span className="dan2">
                    <select
                        defaultValue = {props.defaultValue}
                        onChange = {props.setValue}>
                            {Object.keys(props.keyValue).map(key => <option value={key}>{props.keyValue[key]}</option>)}
                    </select>
            </span>
        </>
    )    
}
export default FormSelect;