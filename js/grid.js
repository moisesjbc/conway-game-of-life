function Grid(game_width, game_height, size)
{
    this.size = size;
    this.cell_width = game_width / this.size;
    this.cell_height = game_height / this.size;

    this.cells = [];
    for(var row=0; row<this.size; row++) {
        this.cells[row] = new Array(this.size);
        for(var column=0; column<this.size; column++) {
            this.cells[row][column] = new Cell();
        }
    }
}

Grid.prototype.render = function(game)
{
    var graphics = game.add.graphics(0, 0);
    graphics.lineStyle(2, 0xAAAAAA, 1);
    for(var row=0; row<this.size; row++){
        var y = row * this.cell_height;
        for(var column=0; column<this.size; column++){
            var x = column * this.cell_width;
            if(this.cells[row][column].isAlive()){
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
    this.cells[row][column].setAlive(alive);
}


Grid.prototype.isCellAlive = function(row, column)
{
    if(row >= 0 && row < this.size && column >= 0 && column < this.size){
        return this.cells[row][column].isAlive();
    }else{
        return false;
    }
}


Grid.prototype.update = function(game)
{
    for(var row=0; row<this.size; row++) {
        for(var column=0; column<this.size; column++) {
            var nAliveNeighbors = this.nAliveNeighbors(row, column);
            this.cells[row][column].updateStateInNextGeneration(nAliveNeighbors);
        }
    }

    for(var row=0; row<this.size; row++) {
        for(var column=0; column<this.size; column++) {
            this.cells[row][column].setNextGeneration();
        }
    }

    this.render(game);
}


Grid.prototype.nAliveNeighbors = function(cell_row, cell_column)
{
    var nAliveNeighbors = 0;
    for(row=cell_row-1; row<=cell_row+1; row++){
        for(column=cell_column-1; column<=cell_column+1; column++){
            if(this.isCellAlive(row, column) == true && (row != cell_row || column != cell_column)){
                nAliveNeighbors++;
            }
        }
    }
    return nAliveNeighbors;
}


Grid.prototype.swapCellAliveByCoordinates = function(game, x, y)
{
    var row = Math.floor(y / this.cell_height);
    var column = Math.floor(x / this.cell_width);

    this.cells[row][column].swapAlive();

    this.render(game);
}


Grid.prototype.clear = function(game)
{
    for(var row=0; row<this.size; row++) {
        for(var column=0; column<this.size; column++) {
            this.cells[row][column].setAlive(false);
        }
    }
    this.render(game);
}
