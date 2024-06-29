$().ready(function() {
    function updateDateTime() {
        var now = new Date();
        var options = {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
            timeZone: 'Europe/Athens'
        }

        var dateTimeString = now.toLocaleString('el-GR', options).replace('στις', '')

        $('#dateTxt').text(dateTimeString)
    }

    updateDateTime()
    setInterval(updateDateTime, 1000)
})

$().ready(function() {
    function addNote() {
        var noteText = $('#inputNote').val().trim()

        if (noteText !== '') {
            var $newNote = $('.note.hidden').clone().removeClass('hidden')

            $newNote.find('.note-text').text(noteText)

            $('#inputNote').val('')

            $('.notes-wrapper').append($newNote)
        }
    }

    $('#addNoteBtn').on('click', function() {
        addNote()
    })

    $('#inputNote').on('keypress', function(event) {
        if (event.which === 13) {
            addNote()
        }
    })

    $(document).on('click', '.note-del-btn', function() {
        $(this).closest('.note').remove();
    })
})

