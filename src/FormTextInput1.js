const FormTextInput1 = (props) => {
    console.log(props.keyText + "(All) : " + props.defaultValue)
    console.log(props.keyText + " : " + props.defaultValue[props.keyText])
    return (
        <>
            <span className="dan">{props.title}</span>
            <span className="dan2">
                <input
                    type={props.type}
                    defaultValue={props.defaultValue[props.keyText]}
                    onChange={event => props.setValue({...props.defaultValue, [props.keyText] : event.target.value})}
                    // setProfileMessage(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
                    placeholder={props.title}
                    required={props.required}
                />
            </span>
        </>
    )    
}
export default FormTextInput1;