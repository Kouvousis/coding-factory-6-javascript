let color = undefined

this.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('#btn').addEventListener('click', function() {
        onClickMeClicked()
    })
})

/**
 * Handler. Actions taken after 'Click Me' clicked.
 */
function onClickMeClicked() {
    updateBg()
}

/**
 * Updates the state and updates the UI.
 */
function updateBg() {
    color = getColor()
    showBgColor()
}

/**
 * Selects randomly a color from a standard array of colors.
 * @returns the color.
 */
function getColor() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const hex = [...letters, ...digits]
    let hexVal

    color = '#'
    for (let i = 1; i <= 6; i++) {
        hexVal = Math.floor(Math.random() * hex.length)
        color += hex[hexVal]
    }

    return color
}

function showBgColor() {
    document.querySelector('#color').innerHTML = color
    document.body.style.backgroundColor = color
}