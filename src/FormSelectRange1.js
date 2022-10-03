import { useState } from 'react';

// 上・下を設けて、範囲設定できるようにする。
// 上が下よりも小さくならないようにしている

const FormSelectRange1 = (props) => {
    let latestRange1 = JSON.parse(JSON.stringify(props.originalRange))
    const [updatedRange1, setlatestRange1] = useState(latestRange1);
    let latestRange2 = JSON.parse(JSON.stringify(props.originalRange))
    const [updatedRange2, setlatestRange2] = useState(latestRange2);
    
    let SelectArrayString = []
    let Bottom = "0"
    let Up = "0"
    if (props.defaultValue[props.keyText] !== undefined) {
        // if (props.defaultValue[props.keyText + "secondRead"] === 1) {
            if (props.defaultValue[props.keyText] === null || props.defaultValue[props.keyText] === "null") {
                props.setValue({...props.defaultValue, [props.keyText] : "0_0"})
            } else {
                SelectArrayString = props.defaultValue[props.keyText].split("_")
                Bottom = SelectArrayString[0]
                Up = SelectArrayString[1]
                console.log("Initial: " + Bottom + "_" + Up)
            }
        // }
    }

    if (props.defaultValue[props.keyText] !== undefined) {
        return (
            <>
                <span className="dan">{props.title}</span>
                <span className="dan2">
                    <select
                        defaultValue={Bottom}
                        onChange={evt => {
                            const copyDefaultValue = {...props.defaultValue}
                            delete copyDefaultValue[props.keyText]
                            props.setValue({...copyDefaultValue, [props.keyText] : evt.target.value + "_" + Up})
                            latestRange2 = JSON.parse(JSON.stringify(props.originalRange)) // 一度リセットする
                            let DeleteUpRange = ""
                            if (Number(evt.target.value) !== 0) {
                                for (let i = 1 ; i < Number(evt.target.value); i++) {
                                    delete latestRange2[String(i)]
                                    DeleteUpRange += i + "_"
                                }
                            }
                            setlatestRange2(latestRange2)
                        }}
                    >
                    {Object.keys(props.originalRange).map(key =>
                        <option
                            value={key}
                            disabled={updatedRange1[key] === undefined ? true : false}
                        >
                            {props.originalRange[key]}
                        </option>
                    )}
                    </select>
                    〜
                    <select
                        defaultValue={Up}
                        onChange={evt => {
                            const copyDefaultValue = {...props.defaultValue}
                            delete copyDefaultValue[props.keyText]
                            props.setValue({...copyDefaultValue, [props.keyText] : Bottom + "_" + evt.target.value})
                            latestRange1 = JSON.parse(JSON.stringify(props.originalRange)) // 一度リセットする
                            let DeleteBtmRange = ""
                            if (Number(evt.target.value) !== 0) {
                                for (let i = Number(evt.target.value) + 1 ; i <= Object.keys(props.originalRange).length ; i++) {
                                    delete latestRange1[String(i)]
                                    DeleteBtmRange += i + "_"
                                }
                            }
                            setlatestRange1(latestRange1)
                        }}>
                        {Object.keys(props.originalRange).map(key => 
                            <option
                                value={key}
                                disabled={updatedRange2[key] === undefined ? true : false}
                            >
                                {props.originalRange[key]}
                            </option>
                        )}
                    </select>
                </span>
            </>
        )
    } else {
        return <>test</>
    }
}
export default FormSelectRange1;