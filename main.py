def on_up_pressed():
    global y
    if roomdirections[y][x].includes("N"):
        y = y - 1
        boundarycheck()
    else:
        music.buzzer.play()
        noexit()
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    global x
    if roomdirections[y][x].includes("W"):
        x = x - 1
        boundarycheck()
    else:
        music.buzzer.play()
        noexit()
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def showstate():
    global successtext
    if x == 0 and y == 2:
        successtext = " *** WELL DONE, you have completed the Adventure! ***"
    else:
        successtext = ""
    game.show_long_text("You can go " + roomdirections[y][x] + ", there is a " + objects[randint(0, objectsnumber - 1)] + " here. Your coordinates are: " + ("" + convert_to_text(x) + "," + convert_to_text(y) + ".") + successtext + "",
        DialogLayout.FULL)
    if successtext != "":
        music.magic_wand.play()
        game.over(True, effects.confetti)

def on_right_pressed():
    global x
    if roomdirections[y][x].includes("E"):
        x = x + 1
        boundarycheck()
    else:
        music.buzzer.play()
        noexit()
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    global y
    if roomdirections[y][x].includes("S"):
        y = y + 1
        boundarycheck()
    else:
        music.buzzer.play()
        noexit()
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def noexit():
    music.buzzer.play()
    game.show_long_text("There is no exit that way. You can go only in direction(s) from: " + roomdirections[y][x] + "." + " Press button A.",
        DialogLayout.CENTER)
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
successtext = ""
y = 0
x = 0
roomdirections: List[List[str]] = []
objectsnumber = 0
objects: List[str] = []
objects = ["cat", "dog", "rabbit", "human", "grue", "barren room"]
objectsnumber = len(objects)
roomdirections = [["S", "ES", "SW"], ["NE", "NW", "NS"], ["E", "EW", "NW"]]
x = 0
y = 0
successtext = ""
game.show_long_text("ADVENTURE!    " + "To move, press button A then a direction button. Your coordinates are " + convert_to_text(x) + "," + convert_to_text(y) + " and you can go in direction(s) from: " + roomdirections[y][x] + ".",
    DialogLayout.CENTER)