const FormMultiSelect = (props) => {

    if (props.defaultValue["secondRead"] === true) {
        if (Object.keys(props.defaultValue).length === 1) {
            props.setValue({...props.defaultValue, "0" : true})
        }
    }

    // 未設定がある場合
    const withUnsetSelectionHandle = (event) => {
        if (event.target.value === "0") {
            if (props.defaultValue[event.target.value] === true) {
            } else {
                props.setValue({"0" : true})
            }
        } else {
            if (props.defaultValue[event.target.value] === true) {
                const copyDefaultValue = {...props.defaultValue}
                delete copyDefaultValue[event.target.value]
                props.setValue(copyDefaultValue)
            } else {
                const copyDefaultValue = {...props.defaultValue}
                if (props.defaultValue["0"] === true) {
                    delete copyDefaultValue["0"]
                }
                props.setValue({...copyDefaultValue, [event.target.value] : true})
            }
        }
        // props.setValue({...props.defaultValue, "continueFlag" : true})
        // const copyDefaultValue = {...props.defaultValue}
        // delete copyDefaultValue["secondRead"]
        // props.setValue(copyDefaultValue)
        console.log(props.defaultValue)
    }

    // 未設定がない場合
    const withOutUnsetSelectionHandle = (event) => {
        if (props.defaultValue[event.target.value] === true) {
            const copyDefaultValue = {...props.defaultValue}
            delete copyDefaultValue[event.target.value]
            props.setValue(copyDefaultValue)
        } else {
            props.setValue({...props.defaultValue, [event.target.value] : true})
        }
        // props.setValue({...props.defaultValue, "continueFlag" : true})
        // const copyDefaultValue = {...props.defaultValue}
        // delete copyDefaultValue["secondRead"]
        // props.setValue(copyDefaultValue)
        console.log(props.defaultValue)
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
                                onChange={
                                    props.keyValue["0"] === "未設定" ? 
                                    withUnsetSelectionHandle : withOutUnsetSelectionHandle
                                }
                                id={props.title+key}
                                // defaultChecked={
                                //     Object.keys(props.defaultValue).length === 0 ?
                                //     (
                                //         key === "0" ? 
                                //         (
                                //             true,
                                //             props.setValue({"0" : true})
                                //         ) : false
                                //     ) : props.defaultValue[key]
                                // }
                                // defaultChecked={props.defaultValue["secondRead"] !== true ? props.defaultValue[key]:false}
                                checked={
                                    // props.defaultValue["continueFlag"] === true ?
                                    // (
                                        // props.defaultValue[key]
                                        // props.setValue({...props.defaultValue, "continueFlag" : false})
                                    // ) : (
                                        props.defaultValue["secondRead"] === true ?
                                        (
                                            props.defaultValue[key] === "undefined" ? (
                                                false
                                            ) : (
                                                props.defaultValue[key]
                                            )
                                        ) : (
                                            false,
                                            props.setValue({...props.defaultValue, "secondRead" : true})
                                            // props.setValue({...props.defaultValue, "continueFlag" : true})
                                        )
                                    // )
                                }
                            />
                            {props.keyValue[key]}<br />
                        </label>
                        {console.log(props.title, ":", key, ":", props.defaultValue[key])}
                    </>
                ))}
            </span>
            {console.log(props.title, ":", props.defaultValue)}
        </>
    )    
}
export default FormMultiSelect;