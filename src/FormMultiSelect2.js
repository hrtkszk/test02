const FormMultiSelect = (props) => {

    let secondRead = false

    if (secondRead === true) {
    // props.defaultValue["secondRead"]はどこかでfalseにするか、削除が必要。
    // if (props.defaultValue["secondRead"] === true) {
        if (Object.keys(props.defaultValue).length === 1) {
            props.setValue({...props.defaultValue, "0" : true})
            console.log(props.title, "initial:", props.defaultValue)
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
                                checked={
                                    secondRead === true ?
                                    // props.defaultValue["secondRead"] === true ?
                                    (
                                        props.defaultValue[key] === "undefined" ? (
                                            false
                                        ) : (
                                            props.defaultValue[key]
                                        )
                                    ) : (
                                        false,
                                        secondRead = true
                                        // props.setValue({...props.defaultValue, "secondRead" : true})
                                    )
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