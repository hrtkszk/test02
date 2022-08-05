const FormSelect = (props) => {
    return (
        <>
            <span className="dan">{props.title}</span>
                <span className="dan2">
                    <select
                        defaultValue={props.defaultValue}
                        onChange={event => props.setValue(event.target.value)}>
                            {Object.keys(props.json).map(key => <option value={key}>{props.json[key]}</option>)}
                    </select>
            </span>
        </>
    )    
}
export default FormSelect;