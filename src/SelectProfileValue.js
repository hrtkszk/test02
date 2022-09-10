const SelectProfileValue = (keyName, keyValue, DBValue) => {
    let str = ""
    let selection = "0"
    Object.keys(keyValue).map(key => 
        <>
            {str = keyName.concat(key)}
            {DBValue[str] === 1 ? (
                selection=key
            ) : null}
        </>
    )
    return selection
  }
  export default SelectProfileValue;