function Grid(game_width, game_height, size)
{
    this.size = size;
    this.cell_width = game_width / this.size;
    this.cell_height = game_height / this.size;

    this.cells = [];
    for(var i=0; i<this.size; i++) {
        this.cells[i] = new Array(this.size);
    }   
}

Grid.prototype.render = function(graphics)
{
    graphics.lineStyle(2, 0xAAAAAA, 1);
    for(var row=0; row<this.size; row++){
        var y = row * this.cell_height;
        for(var column=0; column<this.size; column++){
            var x = column * this.cell_width;
            graphics.drawRect(x, y, this.cell_width, this.cell_height);
        }
    }
}
