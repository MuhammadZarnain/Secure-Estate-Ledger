function landregistervalidation(values){

    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
   
    if(values.fname===""){
        error.fname="Name Should not be empty";
    }
    else if (/\d/.test(values.fname)) {
        error.fname = "Name should not contain numbers";}
    else{
        error.fname=""
    }
    if(values.cnic===""){
        error.cnic="cnic Should not be empty";
    }
    else if (!/^\d{5}-\d{7}-\d$/.test(values.cnic)) {
        error.cnic = "CNIC should be in the format xxxxx-xxxxxxx-x";
      }else{
        error.cnic=""
    }
    if(values.fathername===""){
        error.fathername="Fathername Should not be empty";
    }else if (/\d/.test(values.fathername)) {
        error.fathername = "Father's name should not contain numbers";
      }
    else{
        error.fathername=""
    }
    if(values.paddress===""){
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
    if (values.size === "") {
        error.size = "Size should not be empty";
    } else if (!/^\d+(\.\d+)?\s*(sq meter|marla)$/.test(values.size)) {
        error.size = "Invalid size format.'";
    } else {
        error.size = "";
    }

      if (values.location === "") {
        error.location = "Location should not be empty";
      } else {
        error.location = "";
      }
    return error;
    }
    export default landregistervalidation;