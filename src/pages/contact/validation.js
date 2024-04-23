
export const validate = (form, setCheckboxInfo, setEmailInfo, setMessageInfo, setTitleInfo) =>{
    let validation_passed = true;

    if(form.current.title.value == ""){
        validation_passed = false;
        setTitleInfo(true)
    }
    if(form.current.message.value == ""){
        validation_passed = false;
        setMessageInfo(true)
    }
    console.log(form.current.confirmation.checked);
    if(!form.current.confirmation.checked){
        setCheckboxInfo(true)
        validation_passed = false;
    }
    let email_confirmation_regex = form.current.from_name.value.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    if(!email_confirmation_regex){
        setEmailInfo(true)
        validation_passed = false;
    }
    return validation_passed;
}