let value = 0
radio.onReceivedString(function (receivedString) {
    if (true) {
        while (true) {
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.clearScreen()
                basic.pause(500)
            }
            for (let index = 0; index < 4; index++) {
                music.playTone(988, music.beat(BeatFraction.Whole))
                music.rest(music.beat(BeatFraction.Whole))
            }
            basic.showString(receivedString)
        }
    } else {
        for (let index = 0; index < 4; index++) {
            basic.showString("(Safe)")
            basic.clearScreen()
            basic.pause(100)
            basic.showIcon(IconNames.Yes)
        }
    }
})
basic.forever(function () {
    radio.setGroup(80)
    if (value < 300) {
        value = pins.analogReadPin(AnalogPin.P1)
        while (true) {
            radio.sendString("!Intruder!")
            for (let index = 0; index < 5; index++) {
                music.playTone(988, music.beat(BeatFraction.Whole))
                music.rest(music.beat(BeatFraction.Whole))
            }
        }
    } else if (value > 300) {
        for (let index = 0; index < 4; index++) {
            basic.showString("(Safe)")
            basic.clearScreen()
            basic.pause(100)
            basic.showIcon(IconNames.Yes)
        }
    }
})
