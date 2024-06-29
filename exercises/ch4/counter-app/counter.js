let counter = 0

$('#btnIncr').on('click',  function() {
    counter++
    $('#counter').text(counter)
})

$('#btnDecr').on('click',  function() {
    counter--
    $('#counter').text(counter)
})

$('#btnReset').on('click',  function() {
    counter = 0
    $('#counter').text(counter)
})



