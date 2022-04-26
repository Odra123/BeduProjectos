//var bcrypt= required ('bcrypt-nodejs');

const users = [{email: "myemail@mail.com", password: "securePassword", rol:"admin",  intent:0, latestAttemp:0},
    {email: "myemailTest@mail.com", password: "TestPassword", rol:"invitado",  intent:0, latestAttemp:0}] //arreglo de json

const tokens = ['e215ZW1haWxAbWFpbC5jb20sYWRtaW59'];    //arreglo de token


/*const login = (userCredentials) => {
    for (let i = 0; i < users.length; i++) {
        if (userCredentials.email === users[0].email && userCredentials.password === users[0].password) {
            return "Bienvenido al sistema";
        }
    }
}*/

const getToken = (userCredentials) => {
    const latestAttemp = Date.now();
    console.log(latestAttemp);
    for (let i = 0; i < users.length; i++) {

        if (userCredentials.email === users[i].email && userCredentials.password === users[i].password) {

            console.log("Bienvenido al getToken");
            var cadena= '{'+users[i].email+','+users[i].rol+'}';
            let buff= new Buffer(cadena);
            let encoded= buff.toString('base64');
            console.log(encoded);
            return encoded;
        }//correo si existe pero contraseña es incorrecta
        else if(userCredentials.email === users[i].email || userCredentials.password !== users[i].password){

            return "Contraseña para usuario incorrecta"

        }
        else{//ni correo ni contraseña existen o son invalidas no hay usuario
            return "usuario no existe"
        }

    }
}

const authentication = (tokenReceived) => {
    console.log('Validating Token '+tokenReceived);

    for (let i = 0; i < tokens.length; i++) {  // para recorrer el arreglo de token
        if(tokens[i]===tokenReceived){
            return true;
        }
    }
    return false;
}
module.exports = {getToken, authentication};
