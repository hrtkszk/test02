const FormMultiSelect = (props) => {
    const handleOnChange = (event) => {
        if (props.defaultValue[event.target.value] === 1) {
            const copyDefaultValue = {...props.defaultValue}
            delete copyDefaultValue[event.target.value]
            props.setValue(copyDefaultValue)
        } else {
            props.setValue({...props.defaultValue, [event.target.value] : 1})
        }
        // console.log(event.target.value, ":", props.defaultValue)
    }

    return (
        <>
            <span className="dan">{props.title}</span>
            <span className="dan2">
                {Object.keys(props.keyValue).map(key => (
                    <>
                        <label for={props.title+key}>
                            <input
                                value={key}
                                type="checkbox"
                                onChange={handleOnChange}
                                id={props.title+key}
                                defaultChecked={
                                    props.defaultValue[key] === 1 ? (
                                        // console.log(props.title, ":", key, ":", props.defaultValue[key]),
                                        true
                                    ) : (
                                        props.defaultValue[key] === undefined && key === "0" ? (
                                            // console.log(props.title, ":", key, "=0 :",props.defaultValue[key], "=undefined"),
                                            true,
                                            handleOnChange
                                            // "checked",
                                            // false,
                                            // console.log(props.title, ":", key, "!=0 :",props.defaultValue[key], "=undefined")
                                        ) : (
                                            false
                                            // console.log(props.title, ":", key, "!=0 or ", props.defaultValue[key], "!=undefined")
                                        )
                                    )
                                }
                            />
                            {props.keyValue[key]}<br />
                        </label>
                        {console.log(props.title, ":", key, ":", props.defaultValue[key])}
                    </>
                ))}
                {/* {console.log(props.title, ":", Object.keys(props.defaultValue).length, ":", props.defaultValue)} */}
                {/* checked={checkedItems[item.id]} */}
            </span>
        </>
    )    
}
export default FormMultiSelect;