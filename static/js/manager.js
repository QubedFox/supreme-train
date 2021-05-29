//
//  Code by Nicholas Taplin
//  GitHub: https://github.com/QubedFox
//

//Actions to perform on window load
window.onload = function() {
    createCipher($('#offset').val())
    fillPlainKey()
    fillCipherKey()
}

$(function () {
    const BODY = $('body')
    //Listeners below here

    BODY.on('input', '#offset', function() {
        createCipher($('#offset').val())
        fillCipherKey()
        updateOutput()
    })

    BODY.on('keyup', '#input', function(){
        updateOutput()
    })

    BODY.on('keyup', '#keyword', function(){
        setKeyword($('#keyword').val())
        createCipher($('#offset').val())
        fillCipherKey()
        updateOutput()
    })

    BODY.on('click', '#mode', function(){
        toggleMode()
        updateOutput()
    })
})