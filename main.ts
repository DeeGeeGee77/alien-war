controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Laser_Player`, mySprite, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.destroy()
    info.changeScoreBy(20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let Alien_1: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
mySprite = sprites.create(assets.image`Player Sprit`, SpriteKind.Player)
mySprite.setPosition(80, 112)
controller.player1.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    Alien_1 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . d . . . . . . .
        . . . . . . d . d . . . . . . .
        . . . . . . 6 6 7 . . . . . . .
        . . . . . 6 2 7 2 b . . . . . .
        . . . . 6 7 7 f 7 7 b . . . . .
        . . . . 6 7 d 7 d 7 b . . . . .
        . . . 6 7 . 7 . 7 . 7 b . . . .
        . . . . 6 . 7 . 7 . b . . . . .
        . . . . . . 7 . 7 . . . . . . .
        . . . . . 7 . 7 . 7 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, 0, 50)
    Alien_1.x = randint(0, scene.screenWidth())
    Alien_1.setKind(SpriteKind.Enemy)
})
