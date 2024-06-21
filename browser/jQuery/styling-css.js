$(function() {
    sayHello()
})

function sayHello() {
    $('#helloTxt').html('Hello World')
    $('#helloTxt').css({'color': 'red', 'background-color': 'black'})
}