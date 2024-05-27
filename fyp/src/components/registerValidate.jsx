/*
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
    */
   /*
    const registervalidation = (values) => {
        let error = {};
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    
        if (values.name === "") {
            error.name = "Name should not be empty";
        }
    
        if (values.phone_number === "") {
            error.phone_number = "Phone number should not be empty";
        }
    
        if (values.cnic === "") {
            error.cnic = "CNIC should not be empty";
        }
    
        if (values.fname === "") {
            error.fname = "Father's name should not be empty";
        }
    
        if (values.paddress === "") {
            error.paddress = "Permanent address should not be empty";
        }
    
        if (values.caddress === "") {
            error.caddress = "Current address should not be empty";
        }
    
        if (values.email === "") {
            error.email = "Email should not be empty";
        } else if (!email_pattern.test(values.email)) {
            error.email = "Invalid email format";
        }
    
        if (values.password === "") {
            error.password = "Password should not be empty";
        } else if (!password_pattern.test(values.password)) {
            error.password = "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number";
        }
    
        return error;
    };
    
    export default registervalidation;
    */

    const registervalidation = (values) => {
        let errors = {};
    
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.fname) {
            errors.fname = "Father's name is required";
        }
        if (!values.cnic) {
            errors.cnic = "CNIC is required";
        } else if (values.cnic.length <= 13) {
            errors.cnic = "Invalid CNIC";
        }
        if (!values.phone_number) {
            errors.phone_number = "Phone number is required";
        } else if (values.phone_number.length <= 11) {
            errors.phone_number = "Invalid Phone Number";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Invalid Email address ";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        }
        if (!values.paddress) {
            errors.paddress = "Permanent address is required";
        }
        if (!values.caddress) {
            errors.caddress = "Current address is required";
        }
    
        return errors;
    };
    
    export default registervalidation;
    
    