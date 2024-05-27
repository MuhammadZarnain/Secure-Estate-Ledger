function transfervalidation(values){

    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const ethereum_address_pattern = /^(0x)?[0-9a-fA-F]{40}$/
   
    if(values.recipientName===""){
        error.recipientName="Name Should not be empty";
    }
    else if (/\d/.test(values.recipientName)) {
        error.recipientName = "Name should not contain numbers";}
    else{
        error.recipientName=""
    }
    if(values.recipientCnic===""){
        error.recipientCnic="cnic Should not be empty";
    }
    else if (!/^\d{5}-\d{7}-\d$/.test(values.recipientCnic)) {
        error.recipientCnic = "Invalid CNIC ";
      }else{
        error.recipientCnic=""
    }
    if(values.fullName===""){ // father name 
        error.fullName="Fathername Should not be empty";
    }else if (/\d/.test(values.fullName)) {
        error.fullName = "Name should not contain numbers";
      }
    else{
        error.fullName=""
    }
    if(values.permanentAddress===""){
        error.permanentAddress="permanent address Should not be empty";
    }else{
        error.permanentAddress=""
    }
    if(values.currentAddress===""){
        error.currentAddress="current address Should not be empty";
    }else{
        error.currentAddress=""
    }
    if(values.email===""){
        error.email="Email Should not be empty";
    }else if(!email_pattern.test(values.email)){
        error.email="Email didnot match"
    }else{
        error.email=""
    }
    if (values.useraddress === "") {
        error.useraddress = "Recipient address should not be empty";
      } else if (!ethereum_address_pattern.test(values.useraddress)) {
        error.useraddress = "Invalid recipient address format";
      } else {
        error.useraddress = "";
      }
    return error;
    }
    export default transfervalidation;