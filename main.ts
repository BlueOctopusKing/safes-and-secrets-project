let value = 0
radio.setGroup(80)
basic.forever(function () {
    radio.setGroup(80)
    value = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(value)
    if (value < 500) {
        radio.sendString("!Intruder!")
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    } else if (value > 500) {
        radio.sendString("Safe")
        basic.showString("(Safe)")
        basic.clearScreen()
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
    }
})
