let randomNumber = 0
input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 8)
    if (randomNumber == 1) {
        basic.showString("Ja")
    } else if (randomNumber == 2) {
        basic.showString("Nein")
    } else if (randomNumber == 3) {
        basic.showString("Vielleicht")
    } else if (randomNumber == 4) {
        basic.showString("Auf keinen Fall")
    } else if (randomNumber == 5) {
        basic.showString("Auf jeden Fall")
    } else if (randomNumber == 6) {
        basic.showString("Irgendwann")
    } else if (randomNumber == 7) {
        basic.showString("Bald, schon")
    } else {
        basic.showString("Niemals")
    }
})
