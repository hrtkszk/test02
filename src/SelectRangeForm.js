import { useState } from 'react';

const SelectRangeForm = (props) => {

    let latestRange1 = JSON.parse(JSON.stringify(props.originalRange))
    const [updatedRange1, setlatestRange1] = useState(latestRange1);
    let latestRange2 = JSON.parse(JSON.stringify(props.originalRange))
    const [updatedRange2, setlatestRange2] = useState(latestRange2);
    
    return (
        <>
            <span className="dan">{props.title}</span>
            <span className="dan2">
                <select
                    defaultValue={props.Range1}
                    onChange={evt => {
                        props.setRange1(evt.target.value)
                        latestRange2 = JSON.parse(JSON.stringify(props.originalRange)) // 一度リセットする
                        for (let i = 1 ; i < Number(evt.target.value); i++) {
                            delete latestRange2[String(i)]
                        }
                        setlatestRange2(latestRange2)
                    }}>
                        {Object.keys(updatedRange1).map(key => <option value={key}>{updatedRange1[key]}</option>)}
                </select>
                〜
                <select
                    defaultValue={props.Range2}
                    onChange={evt => {
                        props.setRange2(evt.target.value)
                        if (Number(evt.target.value) !== 0) {
                            latestRange1 = JSON.parse(JSON.stringify(props.originalRange)) // 一度リセットする
                            for (let i = Number(evt.target.value) + 1 ; i <= 17 ; i++) {
                            delete latestRange1[String(i)]
                            }
                            setlatestRange1(latestRange1)
                        }
                    }}>
                    {Object.keys(updatedRange2).map(key => <option value={key}>{updatedRange2[key]}</option>)}
                </select>
            </span>
        </>
    )    
}
export default SelectRangeForm;