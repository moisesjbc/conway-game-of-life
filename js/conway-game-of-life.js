var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { create: create });
var grid = new Grid(800, 600, 25);

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
