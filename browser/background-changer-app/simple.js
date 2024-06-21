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
    const colors = ['black', 'red', 'green', 'blue', 'white']
    return colors[Math.floor(Math.random() * colors.length)]
}

function showBgColor() {
    document.querySelector('#color').innerHTML = color
    document.body.style.backgroundColor = color
}