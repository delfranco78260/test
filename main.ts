input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("1")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
    if (receivedString.compare("1") == 0) {
        test = 0
    }
})
let test = 0
radio.setGroup(1)
basic.forever(function () {
	
})
