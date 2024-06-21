$(function () {
    sayHelloLorem()
})

function sayHelloLorem() {
    const $p = $('<p>')
    $p.html(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minima magnam id harum sapiente recusandae in aliquid tenetur iusto possimus, numquam blanditiis quo quaerat error exercitationem quis quod adipisci nam!`)
    $('body').append($p)
}

const $body = $('body')
$body.html(`<p class="">Hello</p>`)