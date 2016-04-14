var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { create: create, update: update, render: render });
var grid = new Grid(800, 600, 25);
var graphics = null;

function create()
{
    game.stage.backgroundColor = '#ffffff';
    graphics = game.add.graphics(0, 0);
    grid.render(graphics);
}


function update()
{
    
}


function render()
{
    
}
