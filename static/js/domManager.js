//
//  Code by Nicholas Taplin
//  GitHub: https://github.com/QubedFox
//

function fillPlainKey(){
    let target = $('#plain-key')
    let html = ""
    let plainKey = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    for (i = 0; i < plainKey.length; i++) {
        html += '<input type="text" class="form-control text-center" readonly value="' + plainKey[i] + '">'
    }

    target.html(html)
}

function fillCipherKey(){
    let target = $('#cipher-key')
    let html = ""
    let cipherKey = getCipher()

    target.html()

    for (i = 0; i < cipherKey.length; i++) {
        html += '<input type="text" class="form-control text-center" readonly value="' + String.fromCharCode(cipherKey[i]).toUpperCase() + '">'
    }

    target.html(html)
}

function updateOutput(){
    let input = $('#input').val()
    $('#output').val(runCipher(input))
}

function toggleMode() {
    if ($('#mode').val() == 'encrypt') {
        $('#mode').html('Decrypt')
        $('#mode').val('decrypt')
        modeToggle()
    }
    else {
        $('#mode').html('Encrypt')
        $('#mode').val('encrypt')
        modeToggle()
    }
}

function increaseOffset() {
    if ( parseInt($('#offset').val()) + 1  > -1 && parseInt($('#offset').val()) + 1  < 26) {
        editOffset(parseInt($('#offset').val()) + 1 )
    }
    else{
        editOffset(25)
    }
}

function decreaseOffset() {
    if ($('#offset').val() - 1 != -1){
        editOffset($('#offset').val() - 1 )
    }
    else{
        editOffset(0)
    }
}

function editOffset(value) {
    $('#offset').val(parseInt(value))
}

function reset(){
    editOffset(0)
    editKeyword("")
}

function editKeyword(string) {
    $('#keyword').val(string)
}