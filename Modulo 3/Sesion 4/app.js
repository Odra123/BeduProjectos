//SERVIDOR: aqui levanto la app desde la terminal node app.js
//aqui deberiamos tener el intent
var usersBlock ={"myemail@mail.com":{ intent:0, latestAttemp:0}};
const {getToken, authentication} = require("./Login");
const express = require('express')
const bodyParser = require('body-parser');
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    const userCredentials = {email: req.body.email, password: req.body.password}
    var email=userCredentials.email;
    var response = '';
    var bloqueado=false;
    if( usersBlock[email]){//usuario existe
        if(usersBlock[email].intent >= 3 )// si intentos mayor oigual a 3 esta bloqueado verificar diferencia de tiempo
        {
            const currentAttemp = Date.now();
            console.log(currentAttemp);
            console.log(usersBlock[email].latestAttemp);
            if((currentAttemp-usersBlock[email].latestAttemp)>=3000){//ya paso el tiempo de bloqueo
                //limpiar tiempo e intentos
                usersBlock[email].intent = 0;
                usersBlock[email].latestAttemp = 0;
            }
            else{
                //sigue bloqueado
                bloqueado=true;
                console.log("usuario sigue bloqueado");
            }
        }
    }
    if(!bloqueado) {//solo si no esta bloqueado permite validar las credenciales y asi evitar ataque de fuerza bruta
        response =  getToken(userCredentials)


        const latestAttemp = Date.now();
        console.log(latestAttemp);

        console.log(response);
        if(response === "Contraseña para usuario incorrecta"){

            //   for (let i = 0; i < usersBlock.length; i++) {
            if( usersBlock[email]){//usuario existe
                usersBlock[email].intent += 1;
                usersBlock[email].latestAttemp = latestAttemp;
                console.log("Agregando intento.");
                console.log("Intentos "+usersBlock[email].intent);
                //validar si intetos paso el umbra definido en este caso 3
                if(usersBlock[email].intent>=3){

                    console.log("bloqueando usuario: "+email);

                    usersBlock[email].latestAttemp=latestAttemp;
                }
            }
            //  }
        }
    }

    res.send(response)
})
app.post('/authentication', (req, res) => {
    const tokenReceived = req.body.token;
    const valid = authentication(tokenReceived);
    if(!valid){
        res.send("Invalid Token");
    }else{
        res.send("Valid token");
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})