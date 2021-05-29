//
//  Code by Nicholas Taplin
//  GitHub: https://github.com/QubedFox
//

var cipher = []
var plain = []
var keyword = ""
var mode = "encrypt"

function setKeyword(keyword){
    this.keyword = keyword
}

function getCipher(){
    return this.cipher
}

function initialiseKeys(){
    this.cipher = []
    this.plain = []

    for (i = 0; i < 26; i++) {
        this.cipher.push("_")
    }
 
    for (i = 97; i < 123; i++){
        this.plain.push(i)
    }
}

function createCipher(offset){
    this.initialiseKeys()
    if (offset == "") { offset = 0 }
    var pos = 26 - parseInt(offset);

    if (pos == 26) { pos = 0 }

    for (i = 0; i < keyword.length; i++){
        if (plain.includes(keyword.charCodeAt(i))) {
            if (!cipher.includes(keyword.charCodeAt(i))) {
                cipher[pos] = keyword.charCodeAt(i)
                pos = pos + 1
                if (pos > 25){
                    pos = pos - 26
                }
            }
        }
    }

    for (const i of plain){
        if (!cipher.includes(i)) {
            cipher[pos] = i
            pos = pos + 1
            if (pos > 25) {
                pos = pos - 26
            }
        }
    }
}

function encrypt(input){
    let cipherText = ""

    for (i = 0; i < input.length; i++) {
        if (this.plain.includes(input.charCodeAt(i))){
            cipherText += String.fromCharCode(this.cipher[this.plain.indexOf(input.charCodeAt(i))])
        }
        else if (this.plain.includes(input.toLowerCase().charCodeAt(i)))
        {
            cipherText += String.fromCharCode(this.cipher[this.plain.indexOf(input.toLowerCase().charCodeAt(i))]).toUpperCase()
        }
        else {
            cipherText += input[i]
        }
    }
    return cipherText
}

function decrypt(input){
    plainText = ""

    for (i = 0; i < input.length; i++){
        if (this.plain.includes(input.charCodeAt(i))){
            plainText += String.fromCharCode(this.plain[this.cipher.indexOf(input.charCodeAt(i))])
        }
        else if (this.plain.includes(input.toLowerCase().charCodeAt(i))) {
            plainText += String.fromCharCode(this.plain[this.cipher.indexOf(input.toLowerCase().charCodeAt(i))]).toUpperCase()
        }
        else {
            plainText += input[i]
        }
    }
    return plainText
}

function modeToggle(){
    if (mode == "encrypt"){
        mode = "decrypt"
    }
    else {
        mode = "encrypt"
    }
}

function runCipher(input) {
    if (mode == "encrypt") {
        return encrypt(input)
    }
    else {
        return decrypt(input)
    }
}