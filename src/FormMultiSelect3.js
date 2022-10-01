const FormMultiSelect3 = (props) => {
    // console.log(props.defaultValue)

    let SelectArrayString = []
    let SelectArray = []
    if (props.defaultValue[props.keyText] !== undefined) {
        if (props.defaultValue[props.keyText + "secondRead"] === 1) {
            console.log(props.defaultValue[props.keyText])
            if (props.defaultValue[props.keyText].length === 0) {
                SelectArray = [0]
                props.setValue({...props.defaultValue, [props.keyText] : 0})
            } else {
                SelectArrayString = props.defaultValue[props.keyText].split("_")
                SelectArrayString.map(string =>
                    SelectArray.push(Number(string))
                )
            }
        }
    }

    // 未設定がある場合
    const withUnsetSelectionHandle = (event) => {
        let eventNum = Number(event.target.value)
        if (eventNum === 0) {
            if (SelectArray.indexOf(eventNum) > -1) {
            } else {
                const copyDefaultValue = {...props.defaultValue}
                delete copyDefaultValue[props.keyText]
                props.setValue({...props.defaultValue, [props.keyText] : "0"})
            }
        } else {
            const copyDefaultValue = {...props.defaultValue}
            delete copyDefaultValue[props.keyText]
            if (SelectArray.indexOf(eventNum) > -1) {
                SelectArray = SelectArray.filter(x => x !== eventNum)
                console.log(SelectArray)
                if (SelectArray.length === 0) {
                    SelectArray = [0]
                }
            } else {
                if (SelectArray.indexOf(0) > -1) {
                    SelectArray = SelectArray.filter(x => x !== 0)
                }
                SelectArray.push(eventNum)
                SelectArray.sort()
            }
            props.setValue({...copyDefaultValue, [props.keyText] : SelectArray.join("_")})
        }
        // console.log(props.defaultValue)
    }

    // 未設定がない場合

    const withOutUnsetSelectionHandle = (event) => {
        let eventNum = Number(event.target.value)
        const copyDefaultValue = {...props.defaultValue}
        delete copyDefaultValue[props.keyText]
        if (SelectArray.indexOf(eventNum) > -1) {
            SelectArray = SelectArray.filter(x => x !== eventNum)
            if (SelectArray.length === 0) {
                SelectArray = [0]
            }
        } else {
            SelectArray.push(eventNum)
            SelectArray.sort()
        }
        props.setValue({...copyDefaultValue, [props.keyText] : SelectArray.join("_")})
        // console.log(props.defaultValue)
    }

    let numKey = 0

    if (props.defaultValue[props.keyText] !== undefined) {
        return (
            <>
                <span className="dan">{props.title}</span>
                <span className="dan2">
                    {Object.keys(props.keyValue).map(key => (
                        <>
                            {numKey = Number(key)}
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
                                            SelectArray.indexOf(numKey) > -1 ? (
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