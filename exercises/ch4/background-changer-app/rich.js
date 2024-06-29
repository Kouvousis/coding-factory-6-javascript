const hex = 'ABCDEF0123456789'

$('#btn').on('click', function() {
    const  color = '#' + Array.from({ length: 6}, () => hex[Math.floor(Math.random() * hex.length)]).join('')
    $('#color').text(color)
    $('body').css('background-color', color)
})