radio.onReceivedString(function (receivedString) {
    while (true) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.clearScreen()
            basic.pause(500)
        }
        basic.showString(receivedString)
    }
})
basic.forever(function () {
    let Pressure_level = 0
    radio.setGroup(80)
    if (Pressure_level < 500) {
        while (true) {
            radio.sendString("!Intruder!")
        }
    } else if (Pressure_level > 500) {
        basic.showString("Alarm reset")
    }
})
