def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    if True:
        while True:
            for index in range(4):
                basic.show_leds("""
                    # # # # #
                                        # # # # #
                                        # # # # #
                                        # # # # #
                                        # # # # #
                """)
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                """)
                basic.clear_screen()
                basic.pause(500)
            for index2 in range(4):
                music.play_tone(988, music.beat(BeatFraction.WHOLE))
                music.rest(music.beat(BeatFraction.WHOLE))
            basic.show_string(receivedString)
    else:
        for index3 in range(4):
            basic.show_string("(Safe)")
            basic.clear_screen()
            basic.pause(100)
            basic.show_icon(IconNames.YES)
radio.on_received_string(on_received_string)

def on_forever():
    Pressure_level = 0
    radio.set_group(80)
    if Pressure_level < 500:
        while True:
            radio.send_string("!Intruder!")
            for index4 in range(5):
                music.play_tone(988, music.beat(BeatFraction.WHOLE))
                music.rest(music.beat(BeatFraction.WHOLE))
    elif Pressure_level > 500:
        for index5 in range(4):
            basic.show_string("(Safe)")
            basic.clear_screen()
            basic.pause(100)
            basic.show_icon(IconNames.YES)
basic.forever(on_forever)
