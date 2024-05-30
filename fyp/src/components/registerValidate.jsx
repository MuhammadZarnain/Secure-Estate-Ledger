const registervalidation = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = "Name is required";
    } else if (/\d/.test(values.name)) {
        errors.name = "Name should not contain numbers";}
    else{
        errors.name=""
    }
    if (!values.fname) {
        errors.fname = "Father's name is required";
    }else if (/\d/.test(values.fname)) {
        errors.fname = "Father Name should not contain numbers";}
    else{
        errors.fname=""
    }
    if (!values.cnic) {
        errors.cnic = "CNIC is required";
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