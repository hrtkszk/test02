const FormMultiSelect3 = (props) => {
    // console.log(props.defaultValue)


    if (props.defaultValue[props.keyText] !== undefined) {
        console.log(props.defaultValue[props.keyText].key)
        Object.keys(props.defaultValue[props.keyText]).map(key => (
            console.log(key, ":", props.defaultValue[props.keyText])
        ))
        if (props.defaultValue[props.keyText + "secondRead"] === 1) {
            if (Object.keys(props.defaultValue[props.keyText]).length === 0) {
                props.setValue({...props.defaultValue, "0" : 1})
            }
        }
    }

    // 未設定がある場合
    const withUnsetSelectionHandle = (event) => {
        if (event.target.value === "0") {
            if (props.defaultValue[event.target.value] === 1) {
            } else {
                props.setValue({"0" : 1})
            }
        } else {
            if (props.defaultValue[event.target.value] === 1) {
                const copyDefaultValue = {...props.defaultValue}
                delete copyDefaultValue[event.target.value]
                props.setValue(copyDefaultValue)
            } else {
                const copyDefaultValue = {...props.defaultValue}
                if (props.defaultValue["0"] === 1) {
                    delete copyDefaultValue["0"]
                }
                props.setValue({...copyDefaultValue, [event.target.value] : 1})
            }
        }
        // console.log(props.defaultValue)
    }

    // 未設定がない場合

    const withOutUnsetSelectionHandle = (event) => {
        if (props.defaultValue[event.target.value] === 1) {
            const copyDefaultValue = {...props.defaultValue}
            delete copyDefaultValue[event.target.value]
            props.setValue(copyDefaultValue)
        } else {
            props.setValue({...props.defaultValue, [event.target.value] : 1})
        }
        // console.log(props.defaultValue)
    }

    if (props.defaultValue[props.keyText] !== undefined) {
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
                                    checked={
                                        props.defaultValue[props.keyText + "secondRead"] === 1 ?
                                        (
                                            props.defaultValue[key] === "undefined" ? (
                                                0
                                            ) : (
                                                props.defaultValue[key]
                                            )
                                        ) : (
                                            0,
                                            props.setValue({...props.defaultValue, [props.keyText + "secondRead"] : 1})
                                        )
                                    }
                                />
                                {props.keyValue[key]}<br />
                            </label>
                            {console.log(props.title, ":", key, ":", props.defaultValue[key])}
                        </>
                    ))}
                </span>
                {console.log(props.title, ":", props.defaultValue[props.keyText])}
            </>
        )
    } else {
        console.log(props.defaultValue[props.keyText])
        return <>test</>
    }
}
export default FormMultiSelect3;