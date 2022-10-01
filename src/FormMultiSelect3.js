const FormMultiSelect3 = (props) => {
    // console.log(props.defaultValue)

    let SelectArray = []
    if (props.defaultValue[props.keyText] !== undefined) {
        if (props.defaultValue[props.keyText + "secondRead"] === 1) {
            if (Object.keys(props.defaultValue[props.keyText]).length === 0) {
                props.setValue({...props.defaultValue, [props.keyText] : 0})
            } else {
                SelectArray = props.defaultValue[props.keyText].split("_")
            }
        }
    }

    // 未設定がある場合
    const withUnsetSelectionHandle = (event) => {
        if (event.target.value === "0") {
            if (SelectArray.indexOf(event.target.value) > -1) {
            } else {
                props.setValue({...props.defaultValue, [props.keyText] : 0})
            }
        } else {
            const copyDefaultValue = {...props.defaultValue}
            delete copyDefaultValue[props.keyText]
            if (SelectArray.indexOf(event.target.value) > -1) {
                SelectArray = SelectArray.filter(x => x !== event.target.value)
            } else {
                if (SelectArray.indexOf(0) > -1) {
                    SelectArray = SelectArray.filter(x => x !== 0)
                }
                SelectArray = SelectArray.push(event.target.value)
                SelectArray = SelectArray.sort()
            }
            props.setValue({...copyDefaultValue, [props.keyText] : SelectArray.join("_")})
        }
        // console.log(props.defaultValue)
    }

    // 未設定がない場合

    const withOutUnsetSelectionHandle = (event) => {
        const copyDefaultValue = {...props.defaultValue}
        delete copyDefaultValue[props.keyText]
        if (SelectArray.indexOf(event.target.value) > -1) {
            SelectArray = SelectArray.filter(x => x !== event.target.value)
        } else {
            SelectArray = SelectArray.push(event.target.value)
            SelectArray = SelectArray.sort()
        }
        props.setValue({...copyDefaultValue, [props.keyText] : SelectArray.join("_")})
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
                                            SelectArray.indexOf(key) > -1 ? (
                                                1
                                            ) : (
                                                0
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