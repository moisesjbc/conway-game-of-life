var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { create: create });
var grid = new Grid(800, 600, 25);
var timer = null;

function create()
{
    game.stage.backgroundColor = '#ffffff';
    grid.render(game);

    game.input.mouse.enabled = true;
    game.input.mouse.mouseDownCallback = function(mouseEvent){
        grid.swapCellAliveByCoordinates(game, game.input.mousePointer.x, game.input.mousePointer.y);
    }
}


function update()
{
    grid.update(game);
}


function play()
{
    timer = game.time.create(false);
    timer.loop(500, update, this);
    timer.start();

    var button = document.getElementById('play_pause_button');
    button.innerHTML = 'Pause';
    button.onclick = pause;
}


function pause()
{
    timer.stop();
    var button = document.getElementById('play_pause_button');
    button.innerHTML = 'Play';
    button.onclick = play;
}
