const daysGR = ['Κυριακή', 'Δευτερα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']

window.addEventListener('DOMContentLoaded', function() {

    this.setInterval(printGRDate, 1000)

    this.document.querySelector('#addNoteBtn').addEventListener('click', function() {
        onInsertController(document.querySelector('#inputNote').value.trim())
    })

    this.document.querySelector('#inputNote').addEventListener('keyup', function(e) {
        if (e.key === 'Enter'){
            onInsertController(this.value.trim())
        }

    })
})

function printGRDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const dayStr = daysGR[day]
    const monthsStr = monthGR[month]

    let dateStr = `${dayStr}, ${date} ${monthsStr} ${year}`
    let timeStr = `${(hours < 10) ? '0' : ''}${hours}:${(minutes < 10) ? '0' : ''}${minutes}:${(seconds < 10) ? '0' : ''}${seconds}`

    document.querySelector('#dateTxt').innerHTML = dateStr + '<br>' + timeStr
}

/**
 * Controller for insert button clicked
 * or Enter pressed.
 * 
 * @param {string} data 
 */
function onInsertController(data) {
    if (data) {
        insertNote(data)
        reset()
    }
}

function insertNote(note) {
    const notesWrapper = document.querySelector('.notes-wrapper')
    const noteTemplate = document.querySelector('.note.hidden')

    const newNote = noteTemplate.cloneNode(true)
    newNote.classList.remove('hidden')

    newNote.querySelector('.note-text').textContent = note
    newNote.querySelector('.note-check').addEventListener('change', function() {
        newNote.querySelector('.note-text').classList.toggle('completed')
    })
    newNote.querySelector('.note-del-btn').addEventListener('click', function() {
        notesWrapper.removeChild(newNote)
    })

    notesWrapper.appendChild(newNote)
}

function reset() {
    document.querySelector('#inputNote').value = '';
}