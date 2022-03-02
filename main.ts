input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showNumber(2)
})
radio.setGroup(100)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -30) {
        radio.sendNumber(3)
        basic.showNumber(3)
    }
    if (input.rotation(Rotation.Roll) > 30) {
        radio.sendNumber(4)
        basic.showNumber(4)
    }
})
