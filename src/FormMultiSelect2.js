import { useState } from 'react';

const FormMultiSelect = (props) => {
    const [CheckJson, setCheckJson] = useState({});

    const withUnsetSelectionHandle = (event) => {
        // valueは内部的にはチェックが外れている(undefinedになる)が、見た目はチェックされたまま。
        // 見た目も変えるようにする必要がある。
        if (event.target.value === "0") {
            if (props.defaultValue[event.target.value] === 1) {
                props.setValue({})
                setCheckJson({})
            } else {
                props.setValue({[event.target.value] : 1})
                setCheckJson({[event.target.value] : true})
            }
        } else {
            if (props.defaultValue[event.target.value] === 1) {
                const copyDefaultValue = {...props.defaultValue}
                delete copyDefaultValue[event.target.value]
                props.setValue(copyDefaultValue)
                const copyCheckJson = {...CheckJson}
                delete copyCheckJson[event.target.value]
                setCheckJson(copyCheckJson)
            } else {
                const copyDefaultValue = {...props.defaultValue}
                const copyCheckJson = {...CheckJson}
                if (props.defaultValue["0"] === 1) {
                    delete copyDefaultValue["0"]
                    delete copyCheckJson["0"]
                }
                props.setValue({...copyDefaultValue, [event.target.value] : 1})
                setCheckJson({...copyCheckJson, [event.target.value] : true})
            }
        }
    }

    const withOutUnsetSelectionHandle = (event) => {
        if (props.defaultValue[event.target.value] === 1) {
            const copyDefaultValue = {...props.defaultValue}
            delete copyDefaultValue[event.target.value]
            props.setValue(copyDefaultValue)
            // checkmark用
            const copyCheckJson = {...CheckJson}
            delete copyCheckJson[event.target.value]
            setCheckJson(copyCheckJson)
        } else {
            props.setValue({...props.defaultValue, [event.target.value] : 1})
            setCheckJson({...CheckJson, [event.target.value] : true})
        }
    }

    const defaultCheck = (key) => {
        console.log("typeofValue=", Object.keys(props.defaultValue).length, " ,key=", key)
        if (Object.keys(props.defaultValue).length === 0) {
            if (key === "0") {
                // props.setValue({...props.defaultValue, "0": 1})
                // setCheckJson({"0" : true})
                return true
            } else {
                return false
            }
        } else {
            if (props.defaultValue[key] === 1) {
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
                                    props.keyValue["0"] === "未設定" ? 
                                    withUnsetSelectionHandle : withOutUnsetSelectionHandle
                                }
                                id={props.title+key}
                                defaultChecked={defaultCheck(key)}
                                checked={
                                    CheckJson[key] === "undefined" ? (
                                        false
                                    ) : (
                                        CheckJson[key]
                                    )
                                }
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