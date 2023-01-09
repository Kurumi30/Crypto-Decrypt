const CryptoJS = require("crypto-js")

// Criptografando o texto
let text = "William é um gay"
let password = "japonestrouxa"

const crypt = CryptoJS.AES.encrypt(text, password)

console.log(crypt.toString())

// Descriptografando o texto
const decrypt = CryptoJS.AES.decrypt(crypt, password)

console.log(decrypt.toString(CryptoJS.enc.Utf8))
