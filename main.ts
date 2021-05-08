controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomdirections[y][x].includes("N")) {
        y = y - 1
        boundarycheck()
    } else {
        noexit()
    }
    mySprite.setImage(assets.image`up`)
    mySprite.say("You can go " + roomdirections[y][x])
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomdirections[y][x].includes("W")) {
        x = x - 1
        boundarycheck()
    } else {
        noexit()
    }
    mySprite.setImage(assets.image`left`)
    mySprite.say("You can go " + roomdirections[y][x])
})
function showstate () {
    if (x == 0 && y == 2) {
        successtext = "completed"
    }
    game.splash("There is a " + objects[randint(0, objectsnumber - 1)])
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
    mySprite.setImage(assets.image`right`)
    mySprite.say("You can go " + roomdirections[y][x])
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (roomdirections[y][x].includes("S")) {
        y = y + 1
        boundarycheck()
    } else {
        noexit()
    }
    mySprite.setImage(assets.image`down`)
    mySprite.say("You can go " + roomdirections[y][x])
})
function noexit () {
    music.buzzer.play()
    game.splash("No exit that way.", "You can go " + roomdirections[y][x])
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
let mySprite: Sprite = null
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
game.showLongText("ADVENTURE!    " + "To move, press button A then a direction button.", DialogLayout.Center)
mySprite = sprites.create(assets.image`static`, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setPosition(scene.screenWidth() / 2 - 40, scene.screenHeight() - 10)
mySprite.say("You can go " + roomdirections[y][x])
