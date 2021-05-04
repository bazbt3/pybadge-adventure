controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomdirections[y][x].includes("N")) {
        y = y - 1
        boundarycheck()
    } else {
        noexit()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomdirections[y][x].includes("W")) {
        x = x - 1
        boundarycheck()
    } else {
        noexit()
    }
})
function showstate () {
    if (x == 0 && y == 2) {
        successtext = " *** WELL DONE, you have completed the Adventure! ***"
    } else {
        successtext = ""
    }
    game.showLongText("You can go " + roomdirections[y][x] + ", there is a " + objects[randint(0, objectsnumber - 1)] + " here. Your coordinates are: " + ("" + convertToText(x) + "," + convertToText(y) + ".") + successtext + "", DialogLayout.Full)
    if (successtext != "") {
        music.magicWand.play()
        game.over(true, effects.confetti)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomdirections[y][x].includes("E")) {
        x = x + 1
        boundarycheck()
    } else {
        noexit()
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomdirections[y][x].includes("S")) {
        y = y + 1
        boundarycheck()
    } else {
        noexit()
    }
})
function noexit () {
    music.buzzer.play()
    game.showLongText("There is no exit that way. You can go only in direction(s) from: " + roomdirections[y][x] + "." + " Press button A.", DialogLayout.Center)
}
function boundarycheck () {
    if (x == -1) {
        x = 0
    } else if (x == 3) {
        x = 2
    } else if (y == -1) {
        y = 0
    } else if (y == 3) {
        y = 2
    }
    showstate()
}
let successtext = ""
let y = 0
let x = 0
let roomdirections: string[][] = []
let objectsnumber = 0
let objects: string[] = []
objects = [
"cat",
"dog",
"rabbit",
"human",
"grue",
"barren room"
]
objectsnumber = objects.length
roomdirections = [["S", "ES", "SW"], ["NE", "NW", "NS"], ["E", "EW", "NW"]]
x = 0
y = 0
successtext = ""
game.showLongText("ADVENTURE!    " + "To move, press button A then a direction button. Your coordinates are " + convertToText(x) + "," + convertToText(y) + " and you can go in direction(s) from: " + roomdirections[y][x] + ".", DialogLayout.Center)
