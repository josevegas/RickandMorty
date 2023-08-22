const regexEmail=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword=new RegExp(/(?=(.*[0-9]))(?=(.*[a-z]))(?=(.*[A-Z])).{6,10}/);

const Validation=(userData)=>{
    console.log(userData)
    const error={};
    if(!regexEmail.test(userData.userName)){
        error.userName="Debe ser un email";
    }
    if(!userData.userName){
        error.userName="No puede ser vacío";
    }
    if(userData.userName.length>35){
        error.userName="No puede tener más de 35 caracteres";
    }
    if(!regexPassword.test(userData.password)){
        error.password="La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y entre 6 a 10 caracteres";
    }
   return error;
}

export default Validation;