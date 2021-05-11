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
    game.splash("There is " + roomcontents[y][x])
    if (roomcontents[y][x].includes("grue")) {
        combat()
    }
    if (successtext != "") {
        music.magicWand.play()
        mySprite.setImage(assets.image`smiley`)
        pause(2000)
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
function combat () {
    music.siren.play()
    mySprite.say("'B' starts combat!")
    game.splash("You must do combat with " + roomcontents[y][x] + "!")
    combatadversary = randint(0, 7)
    combatplayer = randint(0, 6)
    while (!(controller.B.isPressed())) {
        pause(100)
    }
    mySprite.say("You fight!")
    if (combatadversary >= combatplayer) {
        game.splash("Beaten by " + roomcontents[y][x] + "!")
        game.over(false)
    } else if (combatadversary < combatplayer) {
        music.baDing.play()
        game.splash("You beat ", "" + roomcontents[y][x] + "!!")
    }
}
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
let combatplayer = 0
let combatadversary = 0
let mySprite: Sprite = null
let successtext = ""
let y = 0
let x = 0
let roomcontents: string[][] = []
let roomdirections: string[][] = []
roomdirections = [["S", "ES", "SW"], ["NE", "NW", "NS"], ["E", "EW", "NW"]]
roomcontents = [["an empty room here.", "another empty room.", "nothing here."], ["a cat here.", "a dog here.", "a rabbit here."], ["an end to this, your final objective!", "a grue!", "an empty room."]]
x = 0
y = 0
successtext = ""
game.showLongText("ADVENTURE!    " + "To move, press button A then a direction button.     " + ("There is " + roomcontents[y][x]), DialogLayout.Center)
mySprite = sprites.create(assets.image`static`, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setPosition(scene.screenWidth() / 2 - 40, scene.screenHeight() - 10)
mySprite.say("You can go " + roomdirections[y][x])
