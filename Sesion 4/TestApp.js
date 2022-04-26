//PETICIONES

const axios = require('axios');
const {login} = require("./Login");

const executeTest = async (input, expectedOutput, functionToExecute) => {
    const actualOutput = await functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}

const makePostApiCall = async (userCredentials) => {
    const response = await axios.post('http://localhost:3000/login', userCredentials)
    return response.data
}
const makePostApiCallAuth = async (userCredentials) => {
    const response = await axios.post('http://localhost:3000/authentication', userCredentials)
    return response.data
}
const testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "myemail@mail.com", password: "securePassword"}
    const successMessage = "e215ZW1haWxAbWFpbC5jb20sYWRtaW59"
    executeTest(userCredentials, successMessage, makePostApiCall)
}

const testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "myemail@mail.com", password: "invalidPassword"}
    const successMessage = "Contraseña incorrecta"
    executeTest(userCredentials, successMessage, makePostApiCall)
}

const testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "unregistered_user@mail.com", password: "securePassword"}
    const successMessage = "Usuario no registrado"
    executeTest(userCredentials, successMessage, makePostApiCall)
}

const testReturnsValidTokenWhenUserAuthenticateWithValidToken = () => {
    const token = {token: "e215ZW1haWxAbWFpbC5jb20sYWRtaW59"};
    const successMessage = "Valid token"
    executeTest(token, successMessage, makePostApiCallAuth)
}


//testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword()
//testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword()
//testReturnsValidTokenWhenUserAuthenticateWithValidToken()
