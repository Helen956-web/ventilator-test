basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.setLedColor(0x00ff00)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.setLedColor(0xff0000)
    }
})
