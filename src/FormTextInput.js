const FormTextInput = (props) => {
    return (
        <>
            <span className="dan">{props.title}</span>
            <span className="dan2">
                <input
                    type={props.type}
                    defaultValue={props.defaultValue}
                    onChange={event => props.setValue(event.target.value)}
                    // setProfileMessage(evt.target.value.replace(/"/g, '”').replace(/#/g, '＃').replace(/\$/g, '＄').replace(/&/g, '＆').replace(/'/g, '’').replace(/\(/g,'（').replace(/\)/g,'）').replace(/\\/g, '＼').replace(/</g, '＜').replace(/>/g, '＞').replace(/\*/g, '＊').replace(/`/g, '｀').replace(/\|/g, '｜'))
                    placeholder={props.placeholder}
                    required={props.required}
                />
            </span>
        </>
    )    
}
export default FormTextInput;