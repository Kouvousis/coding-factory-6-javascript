const colors = ['black', 'red', 'green', 'blue', 'white']

$('#btn').on('click', function() {
    const randomIndex = Math.floor(Math.random() * colors.length)
    $('#color').text(colors[randomIndex])
    $('body').css('background-color', colors[randomIndex])
})