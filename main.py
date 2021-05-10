def on_up_pressed():
    global y
    if roomdirections[y][x].includes("N"):
        y = y - 1
        boundarycheck()
    else:
        noexit()
    mySprite.set_image(assets.image("""
        up
    """))
    mySprite.say("You can go " + roomdirections[y][x])
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    global x
    if roomdirections[y][x].includes("W"):
        x = x - 1
        boundarycheck()
    else:
        noexit()
    mySprite.set_image(assets.image("""
        left
    """))
    mySprite.say("You can go " + roomdirections[y][x])
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def showstate():
    global successtext
    if x == 0 and y == 2:
        successtext = "completed"
    game.splash("There is " + roomcontents[y][x])
    if successtext != "":
        music.magic_wand.play()
        mySprite.set_image(assets.image("""
            smiley
        """))
        pause(2000)
        game.over(True, effects.confetti)

def on_right_pressed():
    global x
    if roomdirections[y][x].includes("E"):
        x = x + 1
        boundarycheck()
    else:
        noexit()
    mySprite.set_image(assets.image("""
        right
    """))
    mySprite.say("You can go " + roomdirections[y][x])
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    global y
    if roomdirections[y][x].includes("S"):
        y = y + 1
        boundarycheck()
    else:
        noexit()
    mySprite.set_image(assets.image("""
        down
    """))
    mySprite.say("You can go " + roomdirections[y][x])
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def noexit():
    music.buzzer.play()
    game.splash("No exit that way.", "You can go " + roomdirections[y][x])
def boundarycheck():
    global x, y
    if x == -1:
        x = 0
    elif x == 3:
        x = 2
    elif y == -1:
        y = 0
    elif y == 3:
        y = 2
    showstate()
mySprite: Sprite = None
successtext = ""
y = 0
x = 0
roomcontents: List[List[str]] = []
roomdirections: List[List[str]] = []
roomdirections = [["S", "ES", "SW"], ["NE", "NW", "NS"], ["E", "EW", "NW"]]
roomcontents = [["an empty room here.",
        "another empty room.",
        "nothing here."],
    ["a cat here.", "a dog here.", "a rabbit here."],
    ["an end to this, your final objective!",
        "a grue!",
        "an empty room."]]
x = 0
y = 0
successtext = ""
game.show_long_text("ADVENTURE!    " + "To move, press button A then a direction button.     " + ("There is " + roomcontents[y][x]),
    DialogLayout.CENTER)
mySprite = sprites.create(assets.image("""
    static
"""), SpriteKind.player)
mySprite.set_stay_in_screen(True)
mySprite.set_position(scene.screen_width() / 2 - 40, scene.screen_height() - 10)
mySprite.say("You can go " + roomdirections[y][x])