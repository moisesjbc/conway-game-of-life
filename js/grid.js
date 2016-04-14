function Grid(game_width, game_height, size)
{
    this.size = size;
    this.cell_width = game_width / this.size;
    this.cell_height = game_height / this.size;

    this.cells = [];
    for(var i=0; i<this.size; i++) {
        this.cells[i] = new Array(this.size);
    }
    this.setCellAlive(5, 10, true);
    this.setCellAlive(5, 11, true);
    this.setCellAlive(5, 9, true);
}

Grid.prototype.render = function(graphics)
{
    graphics.lineStyle(2, 0xAAAAAA, 1);
    for(var row=0; row<this.size; row++){
        var y = row * this.cell_height;
        for(var column=0; column<this.size; column++){
            var x = column * this.cell_width;
            if(this.cells[row][column] == true){
                graphics.beginFill(0x000000);
            }else{
                graphics.beginFill(0xFFFFFF);
            }
            graphics.drawRect(x, y, this.cell_width, this.cell_height);
            graphics.endFill();
        }
    }
}


Grid.prototype.setCellAlive = function(row, column, alive)
{
    this.cells[row][column] = alive;
}

