const FormMultiSelect = (props) => {
    const handleOnChange1 = (event) => {
        if (props.defaultValue[event.target.value] === 1) {
            const copyDefaultValue = {...props.defaultValue}
            delete copyDefaultValue[event.target.value]
            props.setValue(copyDefaultValue)
        } else {
            props.setValue({...props.defaultValue, [event.target.value] : 1})
        }
    }

    const resetAll = (event) => {
        if (props.defaultValue[event.target.value] === 1) {
            props.setValue({})
        } else {
            props.setValue({[event.target.value] : 1})
        }
    }

    const defaultCheck = () => {
        if (props.defaultValue[key] === 1) {
            return true
        } else {
            if (props.defaultValue[key] === undefined && key === "0") {
                props.setValue({...props.defaultValue, "0": 1})
                return true
            } else {
                return false
            }
        }
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
                                    props.keyValue[key] === "未設定" ? 
                                    resetAll : handleOnChange1
                                }
                                id={props.title+key}
                                defaultChecked={defaultCheck}
                                //     props.defaultValue[key] === 1 ? (
                                //         true
                                //     ) : (
                                //         props.defaultValue[key] === undefined && key === "0" ? (
                                //             true
                                //         ) : (
                                //             false
                                //         )
                                //     )
                                // }
                            />
                            {props.keyValue[key]}<br />
                        </label>
                        {console.log(props.title, ":", key, ":", props.defaultValue[key])}
                    </>
                ))}
            </span>
        </>
    )    
}
export default FormMultiSelect;