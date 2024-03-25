function registervalidation(values){

    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.name===""){
        error.name="Name Should not be empty";
    }else{
        error.name=""
    }
    if(values.phone_number===""){
        error.phone_number="phone number Should not be empty";
    }else{
        error.phone_number=""
    }
    if(values.cnic===""){
        error.cnic="cnic Should not be empty";
    }else{
        error.cnic=""
    }
    if(values.fname===""){
        error.fname="Fathername Should not be empty";
    }else{
        error.fname=""
    }
    if(values.address===""){
        error.paddress="permanent address Should not be empty";
    }else{
        error.paddress=""
    }
    if(values.caddress===""){
        error.caddress="current address Should not be empty";
    }else{
        error.caddress=""
    }
    if(values.email===""){
        error.email="Email Should not be empty";
    }else if(!email_pattern.test(values.email)){
        error.email="Email didnot match"
    }else{
        error.email=""
    }
    if(values.password===""){
        error.password="password Should not be empty";
    }else if(!password_pattern.test(values.password)){
        error.password="password didnot match"
    }else{
        error.password=""
    }
    return error;
    }
    export default registervalidation;