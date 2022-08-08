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
                        <input
                            value={key}
                            type="checkbox"
                            onChange={handleOnChange}
                            checked={
                                props.defaultValue[key] === 1 ? (
                                    true
                                ) : (
                                    false,
                                    console.log(props.defaultValue[key].length)
                                    // props.defaultValue[key].length === 0 ? (
                                    //     key === 0 ? (
                                    //         true
                                    //     ) : false
                                    //  ) : false
                                )
                            }
                        />
                            {props.keyValue[key]}<br />
                        {/* </input> */}
                    </>
                ))}
                {console.log(props.title, ":", Object.keys(props.defaultValue).length, ":", props.defaultValue)}
                {/* checked={checkedItems[item.id]} */}
            </span>
        </>
    )    
}
export default FormMultiSelect;